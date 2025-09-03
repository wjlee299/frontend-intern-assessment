"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { StepTreeNode } from "../models/StepsModel";
import { StepsTree } from "../models/StepsModel";

interface StepsTreeContextType {
  currNode: StepTreeNode;
  parentsStack: StepTreeNode[];
  currMenuNodeList: StepTreeNode[];
  isAtRoot: boolean;
  openSubMenu: (subMenuRootNode: StepTreeNode) => void;
  closeSubMenu: () => void;
  resetToRoot: () => void;
}

const StepsTreeContext = createContext<StepsTreeContextType | undefined>(
  undefined,
);

export function StepsTreeProvider({ children }: { children: ReactNode }) {
  const [currNode, setCurrNode] = useState<StepTreeNode>(StepsTree);
  const [parentsStack, setParentsStack] = useState<StepTreeNode[]>([]);
  const [isAtRoot, setIsAtRoot] = useState(true);
  const [currMenuNodeList, setCurrMenuNodeList] = useState<StepTreeNode[]>(
    StepsTree.subMenuItems,
  );

  const openSubMenu = (subMenuRootNode: StepTreeNode) => {
    if (
      !subMenuRootNode.hasSubMenu ||
      subMenuRootNode.subMenuItems.length == 0
    ) {
      throw new Error("No submenu list.");
    }
    setParentsStack((prev) => [...prev, currNode]);
    setCurrNode(subMenuRootNode);
    setCurrMenuNodeList(subMenuRootNode.subMenuItems);
    setIsAtRoot(false);
  };

  const closeSubMenu = () => {
    if (parentsStack.length == 0) {
      throw new Error("No submenu to close.");
    } else if (parentsStack.length == 1) {
      // return to root
      setParentsStack([]);
      setCurrNode(StepsTree);
      setCurrMenuNodeList(StepsTree.subMenuItems);
      setIsAtRoot(true);
      return;
    } else {
      const node: StepTreeNode = parentsStack[-1];
      setCurrNode(node);
      setCurrMenuNodeList(node.subMenuItems);
      setParentsStack((prevStack) => prevStack.slice(0, -1));
    }
  };
  const resetToRoot = () => {
    setCurrNode(StepsTree);
    setParentsStack([]);
    setCurrMenuNodeList(StepsTree.subMenuItems);
    setIsAtRoot(true);
  };

  return (
    <StepsTreeContext.Provider
      value={{
        currNode,
        parentsStack,
        currMenuNodeList,
        isAtRoot,
        openSubMenu,
        closeSubMenu,
        resetToRoot,
      }}
    >
      {children}
    </StepsTreeContext.Provider>
  );
}

export function useStepsTreeContext() {
  const context = useContext(StepsTreeContext);
  if (!context) {
    throw new Error(
      "useStepsTreeContext must be used within StepsTreeProvider",
    );
  }
  return context;
}
