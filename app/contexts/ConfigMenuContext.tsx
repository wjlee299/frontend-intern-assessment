"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { WorkflowStep } from "../models/WorkflowModel";

type MenuType = "addStep" | "stepConfig" | "scheduleConfig";

// Controls the type of menu that opens on the right side of the UI
// if menuType == "stepConfig", UI will render configOptions updated and passed as props
interface ConfigMenuContextType {
  isOpen: boolean;
  menuType: MenuType;
  currStep: WorkflowStep | null;
  openConfigMenu: (step: WorkflowStep) => void;
  openAddStepMenu: () => void;
  openScheduleConfigMenu: () => void;
  closeMenu: () => void;
}

const ConfigMenuContext = createContext<ConfigMenuContextType | undefined>(
  undefined,
);

export function ConfigMenuProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [menuType, setMenuType] = useState<MenuType>("addStep");
  const [currStep, setCurrStep] = useState<WorkflowStep | null>(null);

  const openConfigMenu = (step: WorkflowStep) => {
    setIsOpen(true);
    setCurrStep(step);
    setMenuType("stepConfig");
  };

  // clear configOptions to empty array
  // changed config options should already be updated to WorkflowContext on change of config
  const openAddStepMenu = () => {
    setIsOpen(true);
    setCurrStep(null);
    setMenuType("addStep");
  };

  const openScheduleConfigMenu = () => {
    setIsOpen(true);
    setCurrStep(null);
    setMenuType("scheduleConfig");
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <ConfigMenuContext.Provider
      value={{
        isOpen,
        menuType,
        currStep,
        openConfigMenu,
        openAddStepMenu,
        openScheduleConfigMenu,
        closeMenu,
      }}
    >
      {children}
    </ConfigMenuContext.Provider>
  );
}

export function useConfigMenuContext() {
  const context = useContext(ConfigMenuContext);
  if (!context) {
    throw new Error(
      "useConfigMenuContext must be used within ConfigMenuProvider",
    );
  }
  return context;
}
