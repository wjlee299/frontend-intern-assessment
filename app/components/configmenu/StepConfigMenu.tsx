"use client";
import MenuTemplate from "./MenuTemplate";
import { useConfigMenuContext } from "@/app/contexts/ConfigMenuContext";

const StepConfigMenu = () => {
  const { configOptions } = useConfigMenuContext();

  return (
    <div>
      <MenuTemplate menuTitle="Step Configuration">
        <ul>
          {configOptions.map((configOption, index) => (
            <li key={index}>{JSON.stringify(configOption)}</li>
          ))}
        </ul>
      </MenuTemplate>
    </div>
  );
};

export default StepConfigMenu;
