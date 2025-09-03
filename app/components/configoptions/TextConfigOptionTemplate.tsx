import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect, useMemo } from "react";
import { Label } from "@/components/ui/label";
import { TextConfigOption } from "@/app/models/ConfigOptionsModel";
import { useConfigMenuContext } from "@/app/contexts/ConfigMenuContext";
import { useWorkflowContext } from "@/app/contexts/WorkflowContext";
import { WorkflowStep } from "@/app/models/WorkflowModel";
import { ConfigOption } from "@/app/models/ConfigOptionsModel";

// check option type
const isTextOption = (opt: ConfigOption) => {
  return opt.type == "text";
};

const TextConfigOptionTemplate: React.FC<TextConfigOption> = ({
  optionName,
  placeholderText,
}) => {
  const [userInput, setUserInput] = useState("");
  const { currStep } = useConfigMenuContext();
  const { updateWorkflowStepConfigs } = useWorkflowContext();

  // find the option in currStep
  const currOption = useMemo(() => {
    const found = currStep?.action.configOptions.find(
      (o) => o.optionName === optionName,
    );
    return found && isTextOption(found) ? found : undefined;
  }, [currStep, optionName]);

  useEffect(() => {
    if (currOption) {
      const textOption = currOption as TextConfigOption;
      setUserInput(textOption.textInput ?? "");
    } else {
      setUserInput("");
    }
  }, [currOption]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserInput(e.target.value);
    if (currStep) {
      const updatedStep: WorkflowStep = {
        ...currStep,
        action: {
          ...currStep.action,
          configOptions: currStep.action.configOptions.map((opt) =>
            opt.optionName === optionName
              ? { ...(opt as TextConfigOption), textInput: e.target.value }
              : opt,
          ),
        },
      };
      updateWorkflowStepConfigs(updatedStep);
    }
  };

  return (
    <div className="flex w-full flex-col gap-3">
      <Label htmlFor="textarea-input">{optionName} </Label>
      <Textarea
        className="h-[6rem] resize-none p-4"
        id="textarea-input"
        value={userInput}
        onChange={(e) => {
          onChangeHandler(e);
        }}
        placeholder={placeholderText}
      ></Textarea>
    </div>
  );
};

export default TextConfigOptionTemplate;
