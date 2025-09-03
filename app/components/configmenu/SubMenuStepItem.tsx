import SubMenuIcon from "@/app/assets/icons/chevron-right.svg";
import { useWorkflowContext } from "@/app/contexts/WorkflowContext";
import { StepTreeNode } from "@/app/models/StepsModel";
import { useStepsTreeContext } from "@/app/contexts/StepsTreeContext";
import { breakLongDesc } from "./StepItem";

interface StepItemProps {
  stepNode: StepTreeNode;
}

const SubMenuStepItem: React.FC<StepItemProps> = ({ stepNode }) => {
  const { openSubMenu } = useStepsTreeContext();
  const { addWorkflowStep } = useWorkflowContext();

  const onClickStep = () => {
    if (stepNode.hasSubMenu) {
      openSubMenu(stepNode);
    } else {
      addWorkflowStep(stepNode.stepName);
    }
  };

  return (
    <div
      onClick={onClickStep}
      className="flex w-full cursor-pointer items-center justify-between px-5 py-4 transition-colors hover:bg-neutral-n10"
    >
      <div className="flex w-fit items-center gap-4">
        <div className="h-8 w-8 shrink-0 rounded-lg border-2 border-neutral-n30 text-neutral-n500">
          {stepNode.stepIcon}
        </div>
        <div className="flex flex-col">
          <h1 className="body-03">{stepNode.stepName}</h1>
          <p className="body-04 text-neutral-n200">
            {stepNode.hasSubMenu
              ? breakLongDesc(stepNode.stepDesc, 45)
              : breakLongDesc(stepNode.stepDesc, 60)}
          </p>
        </div>
      </div>
      {stepNode.hasSubMenu && (
        <div className="h-7 w-7">
          <SubMenuIcon></SubMenuIcon>
        </div>
      )}
    </div>
  );
};

export default SubMenuStepItem;
