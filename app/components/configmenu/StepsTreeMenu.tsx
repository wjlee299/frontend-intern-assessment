import React from "react";
import MenuTemplate from "./MenuTemplate";
import StepItem from "./StepItem";
import SubMenuStepItem from "./SubMenuStepItem";
import { useStepsTreeContext } from "@/app/contexts/StepsTreeContext";
import SearchBar from "./SearchBar";

const StepsTreeMenu = ({}) => {
  const { currNode, isAtRoot, searchResultList } = useStepsTreeContext();
  return (
    <div>
      <MenuTemplate menuTitle={currNode.stepName} showBackBtn={!isAtRoot}>
        <SearchBar></SearchBar>
        {isAtRoot
          ? searchResultList.map((step) => (
              <StepItem stepNode={step} key={step.stepName}></StepItem>
            ))
          : searchResultList.map((step) => (
              <SubMenuStepItem stepNode={step} key={step.stepName}></SubMenuStepItem>
            ))}
      </MenuTemplate>
    </div>
  );
};

export default StepsTreeMenu;
