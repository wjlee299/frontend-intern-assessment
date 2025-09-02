import React from "react";
import CrossIcon from "@/app/assets/icons/x.svg";
import { useConfigMenuContext } from "@/app/contexts/ConfigMenuContext";

interface MenuTemplateProps {
  menuTitle: string;
}

const MenuTemplate: React.FC<MenuTemplateProps> = ({ menuTitle }) => {
  const { closeMenu } = useConfigMenuContext();

  return (
    <div className="w-full rounded-lg border border-neutral-n30 whitespace-nowrap shadow-[0_2px_10px_-4px_rgba(0,0,0,0.15)]">
      <div className="flex items-center justify-between border-b border-neutral-n30 px-6 py-4">
        <h1 className="title-02 text-neutral-n700">{menuTitle}</h1>
        <button onClick={closeMenu} className="cursor-pointer">
          <CrossIcon className="h-6 w-6 rounded-sm p-0.5 text-neutral-n500 hover:bg-neutral-n30 transition-colors"></CrossIcon>
        </button>
      </div>
      <div className="flex w-full justify-center py-4"></div>
    </div>
  );
};

export default MenuTemplate;
