import SubMenuIcon from "@/app/assets/icons/chevron-right.svg";
import { useWorkflowContext } from "@/app/contexts/WorkflowContext";
import { StepTreeNode } from "@/app/models/StepsModel";
import { useStepsTreeContext } from "@/app/contexts/StepsTreeContext";

interface StepItemProps {
  stepNode: StepTreeNode;
}

export const breakLongDesc = (
    inputDesc: string,
    breakPoint: number,
  ): React.ReactNode => {
    const chunks: string[] = [];
    let text = inputDesc;

    while (text.length > breakPoint) {
      let splitIndex = text.lastIndexOf(" ", breakPoint);

      // If no space found before break point, force split at break point
      if (splitIndex === -1) splitIndex = breakPoint;

      chunks.push(text.slice(0, splitIndex));
      text = text.slice(splitIndex).trimStart();
    }

    if (text) chunks.push(text);

    return chunks.map((chunk, idx) => (
      <span key={idx}>
        {chunk}
        {idx < chunks.length - 1 && <br />}
      </span>
    ));
  };

const StepItem: React.FC<StepItemProps> = ({ stepNode }) => {
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
      className="flex w-full cursor-pointer items-center group justify-between pl-5 pr-3 py-5 transition-colors hover:bg-neutral-n10"
    >
      <div className="flex w-fit items-center gap-4">
        <div className="h-[34px] w-[34px] shrink-0 rounded-lg border border-neutral-n500 text-neutral-n500">
          {stepNode.stepIcon}
        </div>
        <div className="flex flex-col">
          <h1 className="title-02">{stepNode.stepName}</h1>
          <p className="body-04">
            {stepNode.hasSubMenu
              ? breakLongDesc(stepNode.stepDesc, 45)
              : breakLongDesc(stepNode.stepDesc, 60)}
          </p>
        </div>
      </div>
      {stepNode.hasSubMenu && (
        <div className="h-6 w-6 text-neutral-n200 group-hover:text-neutral-n400">
          <SubMenuIcon></SubMenuIcon>
        </div>
      )}
    </div>
  );
};

export default StepItem;
