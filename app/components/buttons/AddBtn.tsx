"use client";
import React from "react";
import { useConfigMenuContext } from "@/app/contexts/ConfigMenuContext";
import PlusIcon from "@/app/assets/icons/plus.svg";

interface AddBtnProps {
  label: string;
  showLabel: boolean;
  action: string;
}

const AddBtn: React.FC<AddBtnProps> = ({ label, showLabel, action }) => {
  const { openAddStepMenu, openScheduleConfigMenu } = useConfigMenuContext();

  const onClickBtn = () => {
    if (action == "ADDSTEP") {
      openAddStepMenu();
    } else if (action == "ADDSCHEDULE") {
      openScheduleConfigMenu();
    }
  };

  return (
    <button onClick={onClickBtn} className="flex w-fit cursor-pointer items-center gap-0.5 rounded-sm py-0.5 pr-3 pl-1.5 text-extended-dark-blue-100 hover:bg-software-pale-blue-25 transition-colors">
      <PlusIcon className="h-6 w-6 p-0.5"></PlusIcon>
      <h2 className="title-02">{label}</h2>
    </button>
  );
};

export default AddBtn;
