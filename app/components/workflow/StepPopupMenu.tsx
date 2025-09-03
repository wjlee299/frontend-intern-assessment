import React from "react";
import { WorkflowStep } from "@/app/models/WorkflowModel";
import DuplicateIcon from "@/app/assets/icons/copy-plus.svg";
import DeleteIcon from "@/app/assets/icons/trash-2.svg";
import "./popupmenu.css";
import { useWorkflowContext } from "@/app/contexts/WorkflowContext";

interface StepPopupMenu {
  step: WorkflowStep;
}

const StepPopupMenu: React.FC<StepPopupMenu> = ({ step }) => {
  const { duplicateWorkflowStep, deleteWorkflowStep } = useWorkflowContext();

  return (
    <div className="title-04 body-04 card-shadow absolute right-0 bottom-[-4.2rem] z-50 flex h-fit w-fit flex-col items-start overflow-hidden rounded-lg">
      <button
        onClick={() => {
          duplicateWorkflowStep(step);
        }}
        className="popup-menu-item"
      >
        <div className="popup-menu-icon">
          <DuplicateIcon></DuplicateIcon>
        </div>
        <h1 className="popup-menu-item-label">Duplicate</h1>
      </button>
      <button
        onClick={() => {
          deleteWorkflowStep(step.id);
        }}
        className="popup-menu-item"
      >
        <div className="popup-menu-icon">
          <DeleteIcon></DeleteIcon>
        </div>
        <h1 className="popup-menu-item-label">Delete</h1>
      </button>
    </div>
  );
};

export default StepPopupMenu;
