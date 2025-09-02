import { Action } from "./ActionsModel";

// WORKFLOW TYPES DECLARATION
export interface WorkflowStep {
    index: number;
    action: Action;
}