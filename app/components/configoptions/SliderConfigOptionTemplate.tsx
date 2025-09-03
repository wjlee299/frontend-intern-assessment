import React from 'react'
import { SliderConfigOption } from '@/app/models/ConfigOptionsModel'

interface SliderConfigOptionTemplateProps {
    option: SliderConfigOption
    stepId: string
}

const SliderConfigOptionTemplate:React.FC<SliderConfigOptionTemplateProps> = ({
  option, stepId}) => {
  return (
    <div>SliderConfigOptionTemplate</div>
  )
}

export default SliderConfigOptionTemplate