import ExtractTaskIcon from "@/app/assets/icons/task-extract.svg";
import SummariseTaskIcon from "@/app/assets/icons/task-summarise.svg";
import WriteTaskIcon from "@/app/assets/icons/task-write.svg";
import TaskActionIcon from "@/app/assets/icons/action-task.svg";
import SearchActionIcon from "@/app/assets/icons/action-search.svg";


export interface StepTreeNode {
  stepName: string;
  stepDesc: string;
  stepIcon: React.ReactNode;
  hasSubMenu: boolean;
  menuName: string | null;
  subMenuItems: StepTreeNode[];
}


export const StepsTree: StepTreeNode = {
  stepName: "Add a step",
  stepDesc: "",
  stepIcon: null,
  hasSubMenu: true,
  menuName: "actions",
  subMenuItems: [
    {
      stepName: "Tasks",
      stepDesc: "Add smart automations like extracting and summarising",
      stepIcon: <TaskActionIcon />,
      hasSubMenu: true,
      menuName: "tasks",
      subMenuItems: [
        {
          stepName: "Extract",
          stepDesc: "Get data from Word, PDF or PPT files",
          stepIcon: <ExtractTaskIcon />,
          hasSubMenu: false,
          menuName: null,
          subMenuItems: [],
        },
        {
          stepName: "Summarise",
          stepDesc: "Condense text to your preferred length",
          stepIcon: <SummariseTaskIcon />,
          hasSubMenu: false,
          menuName: null,
          subMenuItems: [],
        },
        {
          stepName: "Write",
          stepDesc: "Draft sentences, paragraphs or sections",
          stepIcon: <WriteTaskIcon />,
          hasSubMenu: false,
          menuName: null,
          subMenuItems: [],
        },
      ],
    },
    {
      stepName: "Search",
      stepDesc: "Get text or data from uploaded repository or web",
      stepIcon: <SearchActionIcon />,
      hasSubMenu: false,
      menuName: null,
      subMenuItems: [],
    },
  ],
};
