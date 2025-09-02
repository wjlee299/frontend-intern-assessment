import { ConfigOption } from "./ConfigOptionsModel";

// WORKFLOW TYPES DECLARATION
export type WorkflowStep = {
  index: number;
  actionName: string;
  configOptions: ConfigOption[]; // this will be passed to ConfigPanelContextType
};