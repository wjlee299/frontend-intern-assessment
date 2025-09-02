"use client"
import TriggerScheduleBox from "../workflow/TriggerScheduleBox";
import { useConfigMenuContext } from "@/app/contexts/ConfigMenuContext";
import { useWorkflowContext } from "@/app/contexts/WorkflowContext";

const WorkflowSection = () => {
    const { openConfigMenu, openAddStepMenu } = useConfigMenuContext();
    const { workflowPipeline } = useWorkflowContext();

  return (
    <div className="w-[45%]">
          <TriggerScheduleBox></TriggerScheduleBox>
          <div>{ JSON.stringify(workflowPipeline)}</div>

      {/* for testing config menu context */}
      <div className="flex gap-3">
        <button
          onClick={() => openAddStepMenu()}
          className="cursor-pointer rounded-xl bg-gray-200 px-8 py-4 hover:bg-gray-300"
        >
          Add Step
        </button>
        <button
          onClick={() => openConfigMenu([{ optionName: "Test 1" }, { optionName: "Test 2" }])}
          className="cursor-pointer rounded-xl bg-gray-200 px-8 py-4 hover:bg-gray-300"
        >
          Config Step
        </button>
      </div>
    </div>
  );
};

export default WorkflowSection;
