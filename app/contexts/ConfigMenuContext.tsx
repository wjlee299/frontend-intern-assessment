"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { ConfigOption } from "../models/ConfigOptionsModel";

type MenuType = "addStep" | "stepConfig";

// Controls the type of menu that opens on the right side of the UI
// if menuType == "stepConfig", UI will render configOptions updated and passed as props
interface ConfigMenuContextType {
  menuType: MenuType;
  configOptions: ConfigOption[];
  openConfigMenu: (configOptions: ConfigOption[]) => void;
  openAddStepMenu: () => void;
}

const ConfigMenuContext = createContext<ConfigMenuContextType | undefined>(
  undefined,
);

export function ConfigMenuProvider({ children }: { children: ReactNode }) {
  const [menuType, setMenuType] = useState<MenuType>("addStep");
  const [configOptions, setConfigOptions] = useState<ConfigOption[]>([]);

  const openConfigMenu = (configOptions: ConfigOption[]) => {
    setConfigOptions(configOptions);
    setMenuType("stepConfig");
  };

  // clear configOptions to empty array
  // changed config options should already be updated to WorkflowContext on change of config
  const openAddStepMenu = () => {
    setConfigOptions([]);
    setMenuType("addStep");
  };

  return (
    <ConfigMenuContext.Provider
      value={{ menuType, configOptions, openConfigMenu, openAddStepMenu }}
    >
      {children}
    </ConfigMenuContext.Provider>
  );
}

export function useConfigMenuContext() {
  const context = useContext(ConfigMenuContext);
  if (!context) {
    throw new Error("useConfigMenuContext must be used within ConfigMenuProvider");
  }
  return context;
}