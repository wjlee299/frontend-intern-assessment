import { Action } from "./ActionsModel";

// WORKFLOW TYPES DECLARATION
export interface WorkflowStep {
    id: string;
    index: number;
    action: Action;
}