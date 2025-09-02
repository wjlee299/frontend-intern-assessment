import React from "react";
import MenuTemplate from "./MenuTemplate";
import { useWorkflowContext } from "@/app/contexts/WorkflowContext";

const AddStepMenu = () => {
  const { addWorkflowStep, deleteWorkflowStep } = useWorkflowContext();
  return (
    <div>
      <MenuTemplate menuTitle="Add a step"></MenuTemplate>
      <div className="flex gap-3">
        <button
          onClick={() => addWorkflowStep("Extract")}
          className="rounded-lg bg-red-100 p-4"
        >
          Add Extract Task
        </button>
        <button
          onClick={() => deleteWorkflowStep(1)}
          className="rounded-lg bg-red-100 p-4"
        >
          Delete Task at index 1
        </button>
      </div>
    </div>
  );
};

export default AddStepMenu;
