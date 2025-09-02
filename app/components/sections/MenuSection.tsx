"use client";
import { useConfigMenuContext } from "@/app/contexts/ConfigMenuContext";
import AddStepMenu from "../configmenu/AddStepMenu";
import StepConfigMenu from "../configmenu/StepConfigMenu";
import ScheduleConfigMenu from "../configmenu/ScheduleConfigMenu";

const MenuSection = () => {
  const { menuType, isOpen } = useConfigMenuContext();
  return (
    <div className={`config-menu ${isOpen ? "open ml-8" : "ml-0"} relative z-10 h-fit`}>
      {menuType == "addStep" && <AddStepMenu></AddStepMenu>}
      {menuType == "stepConfig" && <StepConfigMenu></StepConfigMenu>}
      {menuType == "scheduleConfig" && (
        <ScheduleConfigMenu></ScheduleConfigMenu>
      )}
    </div>
  );
};

export default MenuSection;
