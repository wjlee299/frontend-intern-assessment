"use client";
import React from "react";
import { WorkflowStep } from "@/app/models/WorkflowModel";
import GripIcon from "@/app/assets/icons/grip-vertical.svg";
import EllipsisIcon from "@/app/assets/icons/ellipsis-vertical.svg";
import { useConfigMenuContext } from "@/app/contexts/ConfigMenuContext";
import StepPopupMenu from "./StepPopupMenu";
import { useState, useEffect, useRef } from "react";

const WorkflowStepBox: React.FC<WorkflowStep> = ({ id, index, action }) => {
  const { openConfigMenu, currStep } = useConfigMenuContext();
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
    <div
      className={`group relative w-full cursor-pointer rounded-lg bg-neutral-n0 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.15)] transition-all duration-300 ${currStep?.id == id ? "border border-extended-dark-blue-50" : "border border-neutral-n30"}`}
    >
      <button className="drag-handle absolute top-0 bottom-0 left-0.5 my-auto h-5 w-5 cursor-pointer text-neutral-n0 group-hover:text-neutral-n50 active:text-neutral-n50 hover:text-neutral-n200 transition-colors">
        <GripIcon></GripIcon>
      </button>
      <div
        onClick={() => {
          openConfigMenu({ id, index, action });
        }}
        className="body-03 flex w-full items-center gap-4 px-9 py-4 text-neutral-n700"
      >
        <h1>{index}</h1>
        <div className="h-8 w-8 rounded border border-neutral-n30">
          {action.icon}
        </div>
        <h1>{action.actionName}</h1>
      </div>
      <button
        onClick={() => setOpenPopUp((prev) => !prev)}
        className="absolute top-0 right-1 bottom-0 my-auto transition-colors h-5 w-5 cursor-pointer text-neutral-n0 group-hover:text-neutral-n50 hover:text-neutral-n200 active:text-neutral-n200"
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
