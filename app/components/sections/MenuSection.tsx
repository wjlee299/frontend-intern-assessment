"use client";
import { useConfigMenuContext } from "@/app/contexts/ConfigMenuContext";
import StepConfigMenu from "../configmenu/StepConfigMenu";
import ScheduleConfigMenu from "../schedule/ScheduleConfigMenu";
import StepsTreeMenu from "../configmenu/StepsTreeMenu";

const MenuSection = () => {
  const { menuType, isOpen } = useConfigMenuContext();
  return (
    <div
      className={`config-menu ${isOpen ? "open ml-8" : "ml-0"} card-shadow relative z-10 h-fit`}
    >
      {menuType == "addStep" && <StepsTreeMenu></StepsTreeMenu>}
      {menuType == "stepConfig" && <StepConfigMenu></StepConfigMenu>}
      {menuType == "scheduleConfig" && (
        <ScheduleConfigMenu></ScheduleConfigMenu>
      )}
    </div>
  );
};

export default MenuSection;
