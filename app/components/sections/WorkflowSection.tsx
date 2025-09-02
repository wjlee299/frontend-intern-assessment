"use client";
import TriggerScheduleBox from "../workflow/TriggerScheduleBox";
import { useWorkflowContext } from "@/app/contexts/WorkflowContext";
import AddStepBox from "../workflow/AddStepBox";
import WorkflowStepBox from "../workflow/WorkflowStepBox";
import { useRef, useEffect } from "react";
import Sortable from "sortablejs";

const WorkflowSection = () => {
  const { workflowPipeline, reorderWorkflowStep } = useWorkflowContext();
  const pipelineListRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!pipelineListRef.current) return;

    const sortable = Sortable.create(pipelineListRef.current, {
      animation: 400,
      handle: ".drag-handle",
      easing: "cubic-bezier(0.44, 0, 0.06, 1)",
      onEnd: (event) => {
        const { oldIndex, newIndex } = event;
        if (oldIndex != null && newIndex != null && oldIndex !== newIndex) {
          // Update React state order
          reorderWorkflowStep(oldIndex, newIndex);
        }
      },
    });

    return () => {
      sortable.destroy();
    };
  }, []);

  return (
    <div className="connector-wrapper relative flex h-fit w-[45%] flex-col gap-6">
      <TriggerScheduleBox></TriggerScheduleBox>
      <div className="flex flex-col gap-6" ref={pipelineListRef}>
        {workflowPipeline.map((workflowStep) => (
          <WorkflowStepBox
            id={workflowStep.id}
            action={workflowStep.action}
            index={workflowStep.index}
            key={workflowStep.id}
          ></WorkflowStepBox>
        ))}
      </div>
      <AddStepBox></AddStepBox>
    </div>
  );
};

export default WorkflowSection;
