import React from "react";
import MenuTemplate from "./MenuTemplate";
import { useWorkflowContext } from "@/app/contexts/WorkflowContext";
import SearchIcon from "@/app/assets/icons/search.svg";
import StepItem from "./StepItem";
import TaskActionIcon from "@/app/assets/icons/action-task.svg";
import SearchActionIcon from "@/app/assets/icons/action-search.svg";


const AddStepMenu = () => {
  const { addWorkflowStep, deleteWorkflowStep, reorderWorkflowStep } =
    useWorkflowContext();
  return (
    <MenuTemplate menuTitle="Add a step">
      <div className="flex gap-3 p-5 border-b border-neutral-n30  text-neutral-n50">
        <SearchIcon className="h-5 w-5"></SearchIcon>
        <input
          type="text"
          placeholder="Search actions"
          className="body-02 placeholder-opacity-100 text-neutral-n300 placeholder-neutral-n50 focus:outline-0 active:outline-0"
        ></input>
      </div>

      <StepItem
        stepName="Tasks"
        stepDesc="Add smart automations like extracting and summarising"
        stepIcon={<TaskActionIcon />}
        hasSubMenu={true}
      ></StepItem>
      <StepItem
        stepName="Search"
        stepDesc="Get text or data from uploaded repository or web"
        stepIcon={<SearchActionIcon />}
        hasSubMenu={false}
      ></StepItem>

      {/* 
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
      </div> */}
    </MenuTemplate>
  );
};

export default AddStepMenu;
