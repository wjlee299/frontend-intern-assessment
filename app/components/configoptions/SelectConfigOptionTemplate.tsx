import React from "react";
import { SelectConfigOption } from "@/app/models/ConfigOptionsModel";
import { ConfigOption } from "@/app/models/ConfigOptionsModel";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { WorkflowStep } from "@/app/models/WorkflowModel";
import { useState, useEffect, useMemo } from "react";
import { useConfigMenuContext } from "@/app/contexts/ConfigMenuContext";
import { useWorkflowContext } from "@/app/contexts/WorkflowContext";

// check option type
const isSelectOption = (opt: ConfigOption) => {
  return opt.type == "select";
};

const SelectConfigOptionTemplate: React.FC<SelectConfigOption> = ({
  selectOptions,
  selectedOption,
  optionName,
  type,
}) => {
  const [userInput, setUserInput] = useState(selectedOption);
  const { currStep } = useConfigMenuContext();
  const { updateWorkflowStepConfigs } = useWorkflowContext();

  // find the option in currStep
  const currOption = useMemo(() => {
    const found = currStep?.action.configOptions.find(
      (o) => o.optionName === optionName,
    );
    return found && isSelectOption(found) ? found : undefined;
  }, [currStep, optionName]);

  useEffect(() => {
    if (currOption) {
      const selectOption = currOption as SelectConfigOption;
      setUserInput(selectOption.selectedOption ?? "");
    } else {
      setUserInput("");
    }
  }, [currOption]);

  const onChangeHandler = (value: string) => {
    setUserInput(value);
    if (currStep) {
      const updatedStep: WorkflowStep = {
        ...currStep,
        action: {
          ...currStep.action,
          configOptions: currStep.action.configOptions.map((opt) =>
            opt.optionName === optionName
              ? { ...(opt as SelectConfigOption), selectedOption: value }
              : opt,
          ),
        },
      };
      updateWorkflowStepConfigs(updatedStep);
    }
  };
  return (
    <div>
      <Select value={userInput} onValueChange={(value) => onChangeHandler(value)}>
        <SelectTrigger className="w-full cursor-pointer px-4 py-6">
          <SelectValue placeholder={optionName} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{optionName}</SelectLabel>
            {selectOptions.map((option, index) => (
              <SelectItem key={index} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectConfigOptionTemplate;
