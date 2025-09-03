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
  duplicateWorkflowStep: (inputWorkflowStep: WorkflowStep) => void;
  deleteWorkflowStep: (stepId: string) => void;
  updateWorkflowStepConfigs: (
    stepIndex: number,
    updater: (prev: WorkflowStep) => WorkflowStep,
  ) => void;
  reorderWorkflowStep: (
    originalStepIndex: number,
    newStepIndex: number,
  ) => void;
  clearWorkflowPipeline: () => void;
}

const WorkflowContext = createContext<WorkflowContextType | undefined>(
  undefined,
);

export function WorkflowProvider({ children }: { children: ReactNode }) {
  const [workflowPipeline, setWorkflowPipeline] = useState<WorkflowStep[]>([]);

  // add new workflow step into pipeline with default config values
  const addWorkflowStep = (actionName: string) => {
    const newStepIndex = workflowPipeline.length + 1;
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
      id: crypto.randomUUID(),
      index: newStepIndex,
      action: actionType,
    };

    setWorkflowPipeline([...workflowPipeline, newWorkflowStep]);
  };

  const duplicateWorkflowStep = (inputWorkflowStep: WorkflowStep) => {
    const newStepIndex = inputWorkflowStep.index + 1;
    const newWorkflowStep: WorkflowStep = {
      id: crypto.randomUUID(),
      index: newStepIndex,
      action: inputWorkflowStep.action,
    };

    setWorkflowPipeline((prevSteps) => {
      const updatedPipeline = [...prevSteps];
      updatedPipeline.splice(newStepIndex, 0, newWorkflowStep);

      return updatedPipeline.map((step, idx) => ({ ...step, index: idx + 1 }));
    });
  };

  // delete workflow step and renumber indices
  const deleteWorkflowStep = (stepId: string) => {
    setWorkflowPipeline((prevSteps) =>
      prevSteps
        .filter((step) => step.id !== stepId)
        .map((step, idx) => ({ ...step, index: idx  + 1 })),
    );
  };

  // update entire WorkflowStep object in the pipeline
  const updateWorkflowStepConfigs = (
    stepIndex: number,
    updater: (prev: WorkflowStep) => WorkflowStep,
  ) => {
    setWorkflowPipeline((prev) =>
      prev.map((step) => (step.index === stepIndex ? updater(step) : step)),
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

      return updatedPipeline.map((step, idx) => ({ ...step, index: idx + 1 }));
    });
  };

  const clearWorkflowPipeline = () => {
    setWorkflowPipeline([]);
  };

  return (
    <WorkflowContext.Provider
      value={{
        workflowPipeline,
        addWorkflowStep,
        duplicateWorkflowStep,
        deleteWorkflowStep,
        updateWorkflowStepConfigs,
        reorderWorkflowStep,
        clearWorkflowPipeline,
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
