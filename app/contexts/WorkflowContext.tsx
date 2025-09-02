"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { WorkflowStep } from "../models/WorkflowModel";
import {
  ExtractTask,
  SummariseTask,
  WriteTask,
  SearchAction,
} from "../models/ActionsModel";

// Keeps track of pipeline actions(i.e. tasks, search) added to workflow
// Controls the ordering of steps as well
interface WorkflowContextType {
  workflowPipeline: WorkflowStep[];
  addWorkflowStep: (actionName: string) => void; // creates a new workflow step with default config
  deleteWorkflowStep: (stepIndex: number) => void;
  updateWorkflowStepConfigs: (updatedWorkflowStep: WorkflowStep) => void;
  reorderWorkflowStep: (
    originalStepIndex: number,
    newStepIndex: number,
  ) => void;
}

const WorkflowContext = createContext<WorkflowContextType | undefined>(
  undefined,
);

export function WorkflowProvider({ children }: { children: ReactNode }) {
  const [workflowPipeline, setWorkflowPipeline] = useState<WorkflowStep[]>([]);

  // add new workflow step into pipeline with default config values
  const addWorkflowStep = (actionName: string) => {
    const newStepIndex = workflowPipeline.length;
      var actionType = undefined;
      

    switch (actionName) {
      case "Search":
        actionType = new SearchAction();
        break;
      case "Extract":
        actionType = new ExtractTask();
        break;
      case "Summarise":
        actionType = new SummariseTask();
        break;
      case "Write":
        actionType = new WriteTask();
        break;
      default:
        throw new Error("Action Name not valid.");
    }

    const newWorkflowStep: WorkflowStep = {
      index: newStepIndex,
      action: actionType,
    };

    setWorkflowPipeline([...workflowPipeline, newWorkflowStep]);
  };

  // delete workflow step and decrement indices of later steps by 1
  const deleteWorkflowStep = (stepIndex: number) => {
    setWorkflowPipeline((prevSteps) =>
      prevSteps
        .filter((step) => step.index !== stepIndex)
        .map((step) =>
          step.index > stepIndex ? { ...step, index: step.index - 1 } : step,
        ),
    );
  };

  // update entire WorkflowStep object in the pipeline
  const updateWorkflowStepConfigs = (updatedWorkflowStep: WorkflowStep) => {
    setWorkflowPipeline((prevSteps) =>
      prevSteps.map((step) =>
        step.index === updatedWorkflowStep.index ? updatedWorkflowStep : step,
      ),
    );
  };

  // extract step from pipeline and put it in the new index position
  // re-number indices so that they stay sequential
  const reorderWorkflowStep = (
    originalStepIndex: number,
    newStepIndex: number,
  ) => {
    setWorkflowPipeline((prevSteps) => {
      const updatedPipeline = [...prevSteps];

      const movedStep = updatedPipeline.splice(originalStepIndex, 1);
      updatedPipeline.splice(newStepIndex, 0, movedStep[0]);

      return updatedPipeline.map((step, idx) => ({ ...step, index: idx }));
    });
  };

  return (
    <WorkflowContext.Provider
      value={{
        workflowPipeline,
        addWorkflowStep,
        deleteWorkflowStep,
        updateWorkflowStepConfigs,
        reorderWorkflowStep,
      }}
    >
      {children}
    </WorkflowContext.Provider>
  );
}

export function useWorkflowContext() {
  const context = useContext(WorkflowContext);
  if (!context) {
    throw new Error("useWorkflowContext must be used within WorkflowProvider");
  }
  return context;
}
