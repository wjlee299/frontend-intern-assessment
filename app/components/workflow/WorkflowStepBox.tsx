"use client";
import React from "react";
import { WorkflowStep } from "@/app/models/WorkflowModel";
import GripIcon from "@/app/assets/icons/grip-vertical.svg";
import EllipsisIcon from "@/app/assets/icons/ellipsis-vertical.svg";
import { useConfigMenuContext } from "@/app/contexts/ConfigMenuContext";

const WorkflowStepBox: React.FC<WorkflowStep> = ({ id, index, action }) => {
  const { openConfigMenu } = useConfigMenuContext();

  return (
    <div
      onClick={() => {
        openConfigMenu(action.configOptions);
      }}
      className="group relative w-full cursor-pointer rounded-lg border border-neutral-n30 bg-neutral-n0 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.15)] "
    >
      <button className="drag-handle cursor-pointer absolute top-0 bottom-0 left-2 my-auto h-6 w-6 text-neutral-n0 group-hover:text-neutral-n50 active:text-neutral-n200">
        <GripIcon></GripIcon>
      </button>
      <div className="body-03 flex w-full items-center gap-4 px-9 py-4 text-neutral-n700">
        <h1>{index}</h1>
        <div className="h-8 w-8 rounded-lg border border-neutral-n30">
          {action.icon}
        </div>
        <h1>{action.stepName}</h1>
      </div>
      <button className="absolute top-0 right-2 bottom-0 my-auto h-5 w-5 text-neutral-n0 group-hover:text-neutral-n50 active:text-neutral-n200">
        <EllipsisIcon></EllipsisIcon>
      </button>
    </div>
  );
};

export default WorkflowStepBox;
