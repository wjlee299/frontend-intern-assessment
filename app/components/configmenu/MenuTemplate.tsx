import React from "react";
import CrossIcon from "@/app/assets/icons/x.svg";
import BackIcon from "@/app/assets/icons/chevron-left.svg";
import { useConfigMenuContext } from "@/app/contexts/ConfigMenuContext";
import { useStepsTreeContext } from "@/app/contexts/StepsTreeContext";

interface MenuTemplateProps {
  menuTitle: string;
  children?: React.ReactNode;
  showBackBtn?: boolean;
}

const MenuTemplate: React.FC<MenuTemplateProps> = ({
  menuTitle,
  children,
  showBackBtn = false,
}) => {
  const { closeMenu } = useConfigMenuContext();
  const { closeSubMenu } = useStepsTreeContext();

  return (
    <div className="w-full rounded-lg border border-neutral-n30 bg-neutral-n0 whitespace-nowrap shadow-[0_2px_10px_-4px_rgba(0,0,0,0.15)]">
      <div className="flex items-center justify-between border-b border-neutral-n30 px-4 py-4">
        <div className="flex w-fit items-center gap-3">
          {showBackBtn && (
            <button onClick={closeSubMenu} className="cursor-pointer">
              <BackIcon className="h-6 w-6 text-neutral-n300 transition-colors hover:text-neutral-n700"></BackIcon>
            </button>
          )}
          <h1 className={`title-01 text-neutral-n700 ${showBackBtn ? "" : "ml-1"}`}>{menuTitle}</h1>
        </div>
        <button onClick={closeMenu} className="cursor-pointer">
          <CrossIcon className="h-6 w-6 rounded-sm p-0.5 text-neutral-n500 transition-colors hover:bg-neutral-n30"></CrossIcon>
        </button>
      </div>
      <div className="flex w-full flex-col justify-center">{children}</div>
    </div>
  );
};

export default MenuTemplate;
