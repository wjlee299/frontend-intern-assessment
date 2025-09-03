import React from "react";
import { ToggleConfigOption } from "@/app/models/ConfigOptionsModel";

interface ToggleConfigOptionTemplateProps {
    option: ToggleConfigOption
    stepId: string
}

const ToggleConfigOptionTemplate: React.FC<ToggleConfigOptionTemplateProps> = ({
  option, stepId
}) => {
  return <div>ToggleConfigOptionTemplate</div>;
};

export default ToggleConfigOptionTemplate;
