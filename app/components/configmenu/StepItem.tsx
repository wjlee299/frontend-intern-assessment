"use client";
import SubMenuIcon from "@/app/assets/icons/chevron-right.svg";
import { useWorkflowContext } from "@/app/contexts/WorkflowContext";

interface StepItemProps {
  stepName: string;
  stepDesc: string;
  stepIcon: React.ReactNode;
  hasSubMenu: boolean;
  children?: React.ReactNode;
}

const StepItem: React.FC<StepItemProps> = ({
  stepName,
  stepDesc,
  stepIcon,
  hasSubMenu,
  children,
}) => {
  const { addWorkflowStep } = useWorkflowContext();
  const onClickStep = () => {
    if (hasSubMenu) {
    } else {
      addWorkflowStep("Search");
    }
  };

  return (
    <div onClick={onClickStep} className="flex w-full items-center justify-between p-6 transition-colors hover:bg-neutral-n10">
      <div className="flex w-fit items-center gap-4">
        <div className="h-9 w-9 rounded-lg border-2 border-neutral-n500 text-neutral-n500">
          {stepIcon}
        </div>
        <div className="flex flex-col">
          <h1 className="title-02">{stepName}</h1>
          <p className="body-04">{stepDesc}</p>
        </div>
      </div>
      {hasSubMenu && (
        <div className="h-7 w-7">
          <SubMenuIcon></SubMenuIcon>
        </div>
      )}
    </div>
  );
};

export default StepItem;
