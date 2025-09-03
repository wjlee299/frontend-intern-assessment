"use client";

import { ConfigMenuProvider } from "./ConfigMenuContext";
import { WorkflowProvider } from "./WorkflowContext";
import { StepsTreeProvider } from "./StepsTreeContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StepsTreeProvider>
      <WorkflowProvider>
        <ConfigMenuProvider>{children}</ConfigMenuProvider>
      </WorkflowProvider>
    </StepsTreeProvider>
  );
}
