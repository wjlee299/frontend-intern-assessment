"use client";
import { useWorkflowContext } from "@/app/contexts/WorkflowContext";
import { useConfigMenuContext } from "@/app/contexts/ConfigMenuContext";

const ClearPipelineBtn = () => {

    const { clearWorkflowPipeline } = useWorkflowContext();
    const {closeMenu} = useConfigMenuContext()
    
    const onClickBtn = () => {
        clearWorkflowPipeline()
        closeMenu()
    }
  return (
    <button
      onClick={onClickBtn}
      className="title-02 cursor-pointer pr-2 text-extended-red-100 transition-transform hover:-translate-x-1"
    >
      Clear Pipeline
    </button>
  );
};

export default ClearPipelineBtn;
