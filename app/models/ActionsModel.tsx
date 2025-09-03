import ExtractTaskIcon from "@/app/assets/icons/task-extract.svg";
import SummariseTaskIcon from "@/app/assets/icons/task-summarise.svg";
import WriteTaskIcon from "@/app/assets/icons/task-write.svg";
import TaskActionIcon from "@/app/assets/icons/action-task.svg";
import SearchActionIcon from "@/app/assets/icons/action-search.svg";
import {
  ConfigOption,
  TextConfigOption,
  SelectConfigOption,
  CheckboxConfigOption,
  SliderConfigOption,
  ToggleConfigOption,
} from "./ConfigOptionsModel";

// ACTIONS & TASKS CLASSES DECLARATION
export interface Action {
  actionName: string; // string displayed in the pipeline step box
  icon: React.ReactNode;
  configOptions: ConfigOption[];
}

// task itself has no config options
export class TaskAction implements Action {
  constructor(
    public actionName: string = "Tasks",
    public icon: React.ReactNode = <TaskActionIcon />,
    public configOptions: ConfigOption[] = [],
  ) {}
}

export class SearchAction implements Action {
  constructor(
    public actionName: string = "Search from repository or web",
    public icon: React.ReactNode = <SearchActionIcon />,
    public configOptions: ConfigOption[] = [],
  ) {}
}

export class ExtractTask extends TaskAction {
  constructor() {
    super(
      "Extract relevant content",
      <ExtractTaskIcon />,
      [
        {
          optionName: "Prompt",
          textInput: "",
          placeholderText: "Write your prompt here.",
          type: "text",
        } as TextConfigOption,
        {
          optionName: "Output Format",
          selectOptions: ["Plain Text", "Comma-Separated Values (CSV)"],
          selectedOption: "Plain Text",
          type: "select",
        } as SelectConfigOption,
        {
          optionName: "Output Length (Word Count)",
          defaultValue: 150,
          min: 50,
          max: 1500,
          step: 50,
          type: "slider",
        } as SliderConfigOption,
      ],
    );
  }
}

export class SummariseTask extends TaskAction {
  constructor() {
    super(
      "Summarise text content",
      <SummariseTaskIcon />,
      [
        {
          optionName: "Summary Approach",
          selectOptions: ["Abstract", "Extractive", "Hybrid"],
          selectedOption: "Abstract",
          type: "select",
        } as SelectConfigOption,
        {
          optionName: "Tone",
          selectOptions: ["Professional", "Formal", "Casual", "Informative"],
          selectedOption: "Professional",
          type: "select",
        } as SelectConfigOption,
        {
          optionName: "Output Length (Word Count)",
          defaultValue: 150,
          min: 50,
          max: 1500,
          step: 50,
          type: "slider",
        } as SliderConfigOption,
      ],
    );
  }
}

export class WriteTask extends TaskAction {
  constructor() {
    super(
      "Write text content",
      <WriteTaskIcon />,
      [
        {
          optionName: "Prompt",
          textInput: "",
          placeholderText: "Write your prompt here.",
          type: "text",
        } as TextConfigOption,
        {
          optionName: "Tone",
          selectOptions: ["Professional", "Formal", "Casual", "Informative"],
          selectedOption: "Professional",
          type: "select",
        } as SelectConfigOption,
        {
          optionName: "Output Length (Word Count)",
          defaultValue: 150,
          min: 50,
          max: 1500,
          step: 50,
          type: "slider",
        } as SliderConfigOption,
      ],
    );
  }
}
