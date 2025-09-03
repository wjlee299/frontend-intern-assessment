"use client";
import TextConfigOptionTemplate from "../configoptions/TextConfigOptionTemplate";
import SelectConfigOptionTemplate from "../configoptions/SelectConfigOptionTemplate";
import SliderConfigOptionTemplate from "../configoptions/SliderConfigOptionTemplate";
import ToggleConfigOptionTemplate from "../configoptions/ToggleConfigOptionTemplate";
import CheckboxConfigOptionTemplate from "../configoptions/CheckboxConfigOptionTemplate";
import {
  SelectConfigOption,
  TextConfigOption,
  CheckboxConfigOption,
  SliderConfigOption,
  ToggleConfigOption,
} from "@/app/models/ConfigOptionsModel";
import MenuTemplate from "./MenuTemplate";
import { useConfigMenuContext } from "@/app/contexts/ConfigMenuContext";

const StepConfigMenu = () => {
  const { currStep } = useConfigMenuContext();

  return (
    <div>
      <MenuTemplate menuTitle="Step Configuration">
        <div className="overflow-x-hidden p-5 flex flex-col gap-5 text-nowrap whitespace-nowrap">
          {currStep &&
            currStep.action.configOptions.map((option) => {
              switch (option.type) {
                case "select":
                  const selectOption = option as SelectConfigOption;
                  return (
                    <SelectConfigOptionTemplate
                      key={selectOption.optionName}
                      {...selectOption}
                    ></SelectConfigOptionTemplate>
                  );
                case "text":
                  const textOption = option as TextConfigOption;
                  return (
                    <TextConfigOptionTemplate
                      key={textOption.optionName}
                      {...textOption}
                    ></TextConfigOptionTemplate>
                  );
                // case "checkbox":
                //   const checkboxOption = option as CheckboxConfigOption;
                //   return (
                //     <CheckboxConfigOptionTemplate
                //       key={checkboxOption.optionName}
                //       {...checkboxOption}
                //     ></CheckboxConfigOptionTemplate>
                //   );
                // case "toggle":
                //   const toggleOption = option as ToggleConfigOption;
                //   return (
                //     <ToggleConfigOptionTemplate
                //       key={toggleOption.optionName}
                //       {...toggleOption}
                //     ></ToggleConfigOptionTemplate>
                //   );
                case "slider":
                  const sliderOption = option as SliderConfigOption;
                  return (
                    <SliderConfigOptionTemplate
                      key={sliderOption.optionName}
                      {...sliderOption}
                    ></SliderConfigOptionTemplate>
                  );

                default:
                  return <div key={option.optionName}></div>;
              }
            })}
        </div>
      </MenuTemplate>
    </div>
  );
};

export default StepConfigMenu;
