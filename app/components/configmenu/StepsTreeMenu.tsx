import React from "react";
import MenuTemplate from "./MenuTemplate";
import SearchIcon from "@/app/assets/icons/search.svg";
import StepItem from "./StepItem";
import SubMenuStepItem from "./SubMenuStepItem";
import { useStepsTreeContext } from "@/app/contexts/StepsTreeContext";

const StepsTreeMenu = ({}) => {
  const { currNode, currMenuNodeList, isAtRoot } = useStepsTreeContext();
  return (
    <div>
      <MenuTemplate menuTitle={currNode.stepName} showBackBtn={!isAtRoot}>
        <div className="flex gap-3 border-b border-neutral-n30 p-5 text-neutral-n50">
          <SearchIcon className="h-5 w-5"></SearchIcon>
          <input
            type="text"
            placeholder={`Search ${currNode.menuName}`}
            className="body-02 placeholder-opacity-100 text-neutral-n300 placeholder-neutral-n50 focus:outline-0 active:outline-0"
          ></input>
        </div>
        {isAtRoot
          ? currMenuNodeList.map((step) => (
              <StepItem stepNode={step} key={step.stepName}></StepItem>
            ))
          : currMenuNodeList.map((step) => (
              <SubMenuStepItem stepNode={step} key={step.stepName}></SubMenuStepItem>
            ))}
      </MenuTemplate>
    </div>
  );
};

export default StepsTreeMenu;
