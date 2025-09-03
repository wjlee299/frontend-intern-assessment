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
        <div className="card-shadow w-full rounded-lg bg-neutral-n0">
          <div className="flex w-full justify-center py-4">
            <AddBtn label="Add Step" action="ADDSTEP"></AddBtn>
          </div>
        </div>
      ) : (
        <div
          onClick={openAddStepMenu}
          className={`mt-6 h-8 w-8 rounded-lg border border-neutral-n30 p-1 transition-colors ${menuType == "addStep" && isOpen ? "cursor-default bg-extended-dark-blue-100 text-neutral-n0" : "cursor-pointer bg-neutral-n0 text-neutral-n500 hover:bg-extended-dark-blue-10"}`}
        >
          <PlusIcon></PlusIcon>
        </div>
      )}
    </div>
  );
};

export default AddStepBox;
