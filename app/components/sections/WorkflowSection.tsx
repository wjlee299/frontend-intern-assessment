"use client";
import TriggerScheduleBox from "../workflow/TriggerScheduleBox";
import { useConfigMenuContext } from "@/app/contexts/ConfigMenuContext";
import { useWorkflowContext } from "@/app/contexts/WorkflowContext";
import AddStepBox from "../workflow/AddStepBox";
import WorkflowStepBox from "../workflow/WorkflowStepBox";

const WorkflowSection = () => {
  const { workflowPipeline } = useWorkflowContext();

  return (
    <div className="connector-wrapper relative flex w-[45%] flex-col gap-6">
      <TriggerScheduleBox></TriggerScheduleBox>
      {workflowPipeline.map((workflowStep, index) => (
        <WorkflowStepBox
          action={workflowStep.action}
          index={workflowStep.index}
          key={index}
        ></WorkflowStepBox>
      ))}
      <AddStepBox></AddStepBox>
    </div>
  );
};

export default WorkflowSection;
