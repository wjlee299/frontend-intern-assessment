"use client";
import React from "react";
import { WorkflowStep } from "@/app/models/WorkflowModel";
import GripIcon from "@/app/assets/icons/grip-vertical.svg";
import EllipsisIcon from "@/app/assets/icons/ellipsis-vertical.svg";
import { useConfigMenuContext } from "@/app/contexts/ConfigMenuContext";
import StepPopupMenu from "./StepPopupMenu";
import { useState, useEffect, useRef } from "react";

const WorkflowStepBox: React.FC<WorkflowStep> = ({ id, index, action }) => {
  const { openConfigMenu } = useConfigMenuContext();
  const [openPopUp, setOpenPopUp] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpenPopUp(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div className="group card-shadow relative w-full cursor-pointer rounded-lg bg-neutral-n0">
      <button className="drag-handle absolute top-0 bottom-0 left-2 my-auto h-6 w-6 cursor-pointer text-neutral-n0 group-hover:text-neutral-n50 active:text-neutral-n200">
        <GripIcon></GripIcon>
      </button>
      <div
        onClick={() => {
          openConfigMenu(action.configOptions);
        }}
        className="body-03 flex w-full items-center gap-4 px-9 py-4 text-neutral-n700"
      >
        <h1>{index}</h1>
        <div className="h-8 w-8 rounded-lg border border-neutral-n30">
          {action.icon}
        </div>
        <h1>{action.actionName}</h1>
      </div>
      <button
        onClick={() => setOpenPopUp((prev) => !prev)}
        className="absolute top-0 right-2 bottom-0 my-auto h-5 w-5 cursor-pointer text-neutral-n0 group-hover:text-neutral-n50 hover:text-neutral-n200 active:text-neutral-n200"
      >
        <EllipsisIcon></EllipsisIcon>
      </button>
      <div ref={ref}>
        {openPopUp && (
          <StepPopupMenu step={{ id, index, action }}></StepPopupMenu>
        )}
      </div>
    </div>
  );
};

export default WorkflowStepBox;
