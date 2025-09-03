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
      setUserInput(selectOption.selectedOption ?? selectedOption);
    } else {
      setUserInput(selectedOption);
    }
  }, [currOption]);

  const onChangeHandler = (value: string) => {
    setUserInput(value);
    if (currStep) {
      updateWorkflowStepConfigs(currStep.index, (prev) => ({
        ...prev,
        action: {
          ...prev.action,
          configOptions: prev.action.configOptions.map((opt) =>
            opt.optionName === optionName
              ? { ...(opt as SelectConfigOption), selectedOption: value }
              : opt,
          ),
        },
      }));
    }
  };
  return (
    <div>
      <Select
        value={userInput}
        onValueChange={(value) => onChangeHandler(value)}
      >
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
