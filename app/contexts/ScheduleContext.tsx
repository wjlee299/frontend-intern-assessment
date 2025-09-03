"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface ScheduleContextType {}

const ScheduleContext = createContext<ScheduleContextType | undefined>(
  undefined,
);

export function ScheduleProvider({ children }: { children: ReactNode }) {
  return (
    <ScheduleContext.Provider value={{}}>{children}</ScheduleContext.Provider>
  );
}

export function useScheduleContext() {
  const context = useContext(ScheduleContext);
  if (!context) {
    throw new Error("useScheduleContext must be used within ScheduleProvider");
  }
  return context;
}
