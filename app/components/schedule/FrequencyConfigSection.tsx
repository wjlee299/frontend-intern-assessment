import React from 'react'
import { useScheduleContext } from '@/app/contexts/ScheduleContext'

const FrequencyConfigSection = () => {
    const {frequency, setFrequency, selectedWeekdays, toggleWeekday} = useScheduleContext()
  return (
    <div className="flex w-full justify-between gap-5 mt-3 px-3 body-03  ">
            <button onClick={() => {setFrequency("daily")}} className={`schedule-freq-btn ${frequency == "daily"? "bg-neutral-n700 text-neutral-n0 " : "bg-neutral-n10 text-neutral-n100"}`}>Daily</button>
            <button onClick={() => {setFrequency("weekly")}}className={`schedule-freq-btn ${frequency == "weekly"? "bg-neutral-n700 text-neutral-n0 " : "bg-neutral-n10 text-neutral-n100"}`}>Weekly</button>
            <button onClick={() => {setFrequency("monthly")}}className={`schedule-freq-btn ${frequency == "monthly"? "bg-neutral-n700 text-neutral-n0 " : "bg-neutral-n10 text-neutral-n100"}`}>Monthly</button>
          </div>
  )
}

export default FrequencyConfigSection