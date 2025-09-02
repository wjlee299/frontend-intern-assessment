"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import {
  ConfigOption,
  ScheduleConfigOptions,
} from "../models/ConfigOptionsModel";

type MenuType = "addStep" | "stepConfig" | "scheduleConfig";

// Controls the type of menu that opens on the right side of the UI
// if menuType == "stepConfig", UI will render configOptions updated and passed as props
interface ConfigMenuContextType {
  isOpen: boolean;
  menuType: MenuType;
  configOptions: ConfigOption[];
  openConfigMenu: (configOptions: ConfigOption[]) => void;
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
  const [configOptions, setConfigOptions] = useState<ConfigOption[]>([]);

  const openConfigMenu = (configOptions: ConfigOption[]) => {
    setIsOpen(true);
    setConfigOptions(configOptions);
    setMenuType("stepConfig");
  };

  // clear configOptions to empty array
  // changed config options should already be updated to WorkflowContext on change of config
  const openAddStepMenu = () => {
    setIsOpen(true);
    setConfigOptions([]);
    setMenuType("addStep");
  };

  const openScheduleConfigMenu = () => {
    setIsOpen(true);
    setConfigOptions(ScheduleConfigOptions);
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
        configOptions,
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
