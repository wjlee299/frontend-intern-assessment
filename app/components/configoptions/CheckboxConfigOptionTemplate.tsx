import React from "react";
import { CheckboxConfigOption } from "@/app/models/ConfigOptionsModel";

interface CheckboxConfigOptionTemplateProps {
    option: CheckboxConfigOption
    stepId: string
}

const CheckboxConfigOptionTemplate: React.FC<CheckboxConfigOptionTemplateProps> = ({
  option, stepId
}) => {
  return <div>CheckboxConfigOptionTemplate</div>;
};

export default CheckboxConfigOptionTemplate;
