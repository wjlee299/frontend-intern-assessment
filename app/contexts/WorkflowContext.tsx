"use client";
import { createContext, useState, ReactNode } from "react";
import { WorkflowStep } from "../models/WorkflowModel";

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

  const addWorkflowStep = (actionName: string) => {};

  const deleteWorkflowStep = (stepIndex: number) => {};

  const updateWorkflowStepConfigs = (updatedWorkflowStep: WorkflowStep) => {};

  const reorderWorkflowStep = (
    originalStepIndex: number,
    newStepIndex: number,
  ) => {};

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
