import React from "react";
import { SliderConfigOption } from "@/app/models/ConfigOptionsModel";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { ConfigOption } from "@/app/models/ConfigOptionsModel";
import { useState, useEffect, useMemo } from "react";
import { useConfigMenuContext } from "@/app/contexts/ConfigMenuContext";
import { useWorkflowContext } from "@/app/contexts/WorkflowContext";
import { WorkflowStep } from "@/app/models/WorkflowModel";

// check option type
const isSliderOption = (opt: ConfigOption) => {
  return opt.type == "slider";
};

const SliderConfigOptionTemplate: React.FC<SliderConfigOption> = ({
  sliderValue,
  min,
  max,
  step,
  optionName,
  type,
}) => {
  const [userInput, setUserInput] = useState(sliderValue);
  const { currStep } = useConfigMenuContext();
  const { updateWorkflowStepConfigs } = useWorkflowContext();

  // find the option in currStep
  const currOption = useMemo(() => {
    const found = currStep?.action.configOptions.find(
      (o) => o.optionName === optionName,
    );
    return found && isSliderOption(found) ? found : undefined;
  }, [currStep, optionName]);

  useEffect(() => {
    if (currOption) {
      const sliderOption = currOption as SliderConfigOption;
      setUserInput(sliderOption.sliderValue ?? sliderValue);
    } else {
      setUserInput(sliderValue);
    }
  }, [currOption]);

  const onChangeHandler = (sliderVal: number) => {
    setUserInput(sliderVal);
    if (currStep) {
      const updatedStep: WorkflowStep = {
        ...currStep,
        action: {
          ...currStep.action,
          configOptions: currStep.action.configOptions.map((opt) =>
            opt.optionName === optionName
              ? { ...(opt as SliderConfigOption), sliderValue: sliderVal }
              : opt,
          ),
        },
      };
      updateWorkflowStepConfigs(updatedStep);
    }
  };

  return (
    <div className="flex flex-col items-start gap-4 p-2">
      <div className="flex w-full items-center justify-between">
        <Label htmlFor="slider-config">{optionName}</Label>
        <h1 className="body-01">{userInput}</h1>
      </div>
      <Slider
        value={[userInput]}
        onValueChange={(val) => {
          onChangeHandler(val[0]);
        }}
        id="slider-config"
        defaultValue={[sliderValue]}
        max={max}
        step={step}
        min={min}
      />
    </div>
  );
};

export default SliderConfigOptionTemplate;
