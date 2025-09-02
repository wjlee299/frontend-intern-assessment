"use client";

import { ConfigMenuProvider } from "./ConfigMenuContext";
import { WorkflowProvider } from "./WorkflowContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WorkflowProvider>
      <ConfigMenuProvider>{children}</ConfigMenuProvider>
    </WorkflowProvider>
  );
}
