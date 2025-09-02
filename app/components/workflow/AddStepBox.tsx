"use client";
import AddBtn from "../buttons/AddBtn";
import { useWorkflowContext } from "@/app/contexts/WorkflowContext";
import { useConfigMenuContext } from "@/app/contexts/ConfigMenuContext";
import PlusIcon from "@/app/assets/icons/plus.svg";

const AddStepBox = () => {
  const { workflowPipeline } = useWorkflowContext();
  const { isOpen, menuType, openAddStepMenu } = useConfigMenuContext();
  return (
    <div className="flex w-full justify-center">
      {workflowPipeline.length == 0 ? (
        <div className="w-full rounded-lg border border-neutral-n30 bg-neutral-n0 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.15)]">
          <div className="flex w-full justify-center py-4">
            <AddBtn label="Add Step" action="ADDSTEP"></AddBtn>
          </div>
        </div>
      ) : (
        <div
          onClick={openAddStepMenu}
          className={`mt-6 h-8 w-8 cursor-pointer rounded-lg border border-neutral-n30 p-1 transition-colors hover:bg-extended-dark-blue-10 ${menuType == "addStep" && isOpen ? "bg-extended-dark-blue-100 text-neutral-n0" : "bg-neutral-n0 text-neutral-n500"}`}
        >
          <PlusIcon></PlusIcon>
        </div>
      )}
    </div>
  );
};

export default AddStepBox;
