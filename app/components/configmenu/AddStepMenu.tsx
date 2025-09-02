import React from "react";
import MenuTemplate from "./MenuTemplate";
import { useWorkflowContext } from "@/app/contexts/WorkflowContext";

const AddStepMenu = () => {
  const { addWorkflowStep, deleteWorkflowStep, reorderWorkflowStep } =
    useWorkflowContext();
  return (
    <div>
      <MenuTemplate menuTitle="Add a step">
        <div className="flex gap-3">
          <button
            onClick={() => addWorkflowStep("Extract")}
            className="rounded-lg bg-red-100 p-4"
          >
            Add Extract Task
          </button>
          <button
            onClick={() => addWorkflowStep("Summarise")}
            className="rounded-lg bg-red-100 p-4"
          >
            Add Summarise Task
          </button>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => deleteWorkflowStep(0)}
            className="rounded-lg bg-red-100 p-4"
          >
            Delete Task at index 0
          </button>
          <button
            onClick={() => reorderWorkflowStep(1, 3)}
            className="rounded-lg bg-red-100 p-4"
          >
            Reorder Task at index 1 to index 3
          </button>
        </div>
      </MenuTemplate>
    </div>
  );
};

export default AddStepMenu;
