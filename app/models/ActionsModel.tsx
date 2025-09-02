import ExtractTaskIcon from "@/app/assets/icons/task-extract.svg";
import SummariseTaskIcon from "@/app/assets/icons/task-summarise.svg";
import WriteTaskIcon from "@/app/assets/icons/task-write.svg";
import TaskActionIcon from "@/app/assets/icons/action-task.svg";
import SearchActionIcon from "@/app/assets/icons/action-search.svg";
import { ConfigOption } from "./ConfigOptionsModel";

// ACTIONS & TASKS CLASSES DECLARATION
interface Action {
  actionName: string;
  actionDesc: string;
  icon: React.ReactNode;
}

// task itself has no config options
export class TaskAction implements Action {
  constructor(
    public actionName: string = "Tasks",
    public actionDesc: string = "Add smart automations like extracting and summarising",
    public icon: React.ReactNode = TaskActionIcon,
    public configOptions: ConfigOption[] = [],
  ) {}
}

export class SearchAction implements Action {
  constructor(
    public actionName: string = "Search",
    public actionDesc: string = "Get text or data from uploaded repository or web",
    public icon: React.ReactNode = SearchActionIcon,
    public configOptions: ConfigOption[] = [],
  ) {}
}

export class ExtractTask extends TaskAction {
  constructor() {
    super(
      "Extract",
      "Get data from Word, PDF or PPT files",
      ExtractTaskIcon,
      [],
    );
  }
}

export class SummariseTask extends TaskAction {
  constructor() {
    super(
      "Summarise",
      "Condense text to your preferred length",
      SummariseTaskIcon,
      [],
    );
  }
}

export class WriteTask extends TaskAction {
  constructor() {
    super(
      "Write",
      "Draft sentences, paragraphs or sections",
      WriteTaskIcon,
      [],
    );
  }
}
