// CONFIG OPTIONS INTERFACES DECLARATION
// base config option interface
export interface ConfigOption {
  optionName: string;
}

// the different kinds of config menu options
export interface TextConfigOption extends ConfigOption {
    textInput: string;
    placeholderText: string;
}

export interface SelectConfigOption extends ConfigOption {
  selectOptions: string[];
  selectedOption: string;
}

export interface ToggleConfigOption extends ConfigOption {
  isTrue: boolean;
}

export interface SliderConfigOption extends ConfigOption {
  defaultValue: number;
  min: number;
  max: number;
  step: number;
}

export interface CheckboxConfigOption extends ConfigOption {
  defaultValue: number;
  min: number;
  max: number;
  step: number;
}

export const ScheduleConfigOptions = []
