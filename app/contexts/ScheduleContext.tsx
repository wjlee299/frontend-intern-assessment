"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import type { DateRange } from "react-day-picker";
import { SelectedWeekdays } from "../models/ScheduleModel";

interface ScheduleContextType {
  range: DateRange | undefined;
  updateRange: (newRange: DateRange | undefined) => void;
  frequency: "daily" | "weekly" | "monthly";
  setFrequency: (freq: "daily" | "weekly" | "monthly") => void;
  selectedWeekdays: boolean[]; // array of size 7: index 0 is monday, index 1 is tues...etc
  toggleWeekday: (idx: number) => void;
}

const ScheduleContext = createContext<ScheduleContextType | undefined>(
  undefined,
);

export function ScheduleProvider({ children }: { children: ReactNode }) {
  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: undefined,
  });
  const updateRange = (newRange: DateRange | undefined) => {
    setRange(newRange);
  };
  const [frequency, setFrequency] = useState<"daily" | "weekly" | "monthly">(
    "daily",
  );

  const [selectedWeekdays, setSelectedWeekDays] = useState<boolean[]>(
    [true, false, false, false, false, false, false],
  );

  const toggleWeekday = (idx: number) => {
    setSelectedWeekDays((prev) => {
      const updatedWeekdays = [...prev];
      updatedWeekdays[idx] = !updatedWeekdays[idx];
      return updatedWeekdays;
    });
  };

  return (
    <ScheduleContext.Provider
      value={{ range, updateRange, frequency, setFrequency, selectedWeekdays, toggleWeekday }}
    >
      {children}
    </ScheduleContext.Provider>
  );
}

export function useScheduleContext() {
  const context = useContext(ScheduleContext);
  if (!context) {
    throw new Error("useScheduleContext must be used within ScheduleProvider");
  }
  return context;
}
