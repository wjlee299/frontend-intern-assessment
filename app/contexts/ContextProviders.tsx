"use client";

import { ConfigMenuProvider } from "./ConfigMenuContext";
import { WorkflowProvider } from "./WorkflowContext";
import { StepsTreeProvider } from "./StepsTreeContext";
import { ScheduleProvider } from "./ScheduleContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ScheduleProvider>
      <StepsTreeProvider>
        <WorkflowProvider>
          <ConfigMenuProvider>{children}</ConfigMenuProvider>
        </WorkflowProvider>
      </StepsTreeProvider>
    </ScheduleProvider>
  );
}
