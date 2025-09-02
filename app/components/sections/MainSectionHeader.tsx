import BackIcon from "@/app/assets/icons/chevron-left.svg";
import ClearPipelineBtn from "../buttons/ClearPipelineBtn";

const MainSectionHeader = () => {
  return (
    <div className="flex w-full items-center justify-between rounded-t-lg border-b border-neutral-n30 bg-neutral-n0 p-3 relative z-10">
      <div className="flex w-fit items-center gap-3">
        <BackIcon className="h-6 w-6 cursor-pointer rounded-sm p-0.5 text-neutral-n500 hover:bg-neutral-n20"></BackIcon>
        <h1 className="title-02">Agentic Workflow</h1>
      </div>
      <ClearPipelineBtn></ClearPipelineBtn>

    </div>
  );
};

export default MainSectionHeader;
