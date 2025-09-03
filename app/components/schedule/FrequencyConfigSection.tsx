import React from "react";
import { useScheduleContext } from "@/app/contexts/ScheduleContext";

const FrequencyConfigSection = () => {
  const weekdays: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const { frequency, setFrequency, selectedWeekdays, toggleWeekday } =
    useScheduleContext();
  return (
    <div className="flex w-full flex-col gap-4 px-3">
      <div className="body-03 mt-3 flex w-full justify-between gap-5">
        <button
          onClick={() => {
            setFrequency("daily");
          }}
          className={`schedule-freq-btn ${frequency == "daily" ? "bg-neutral-n700 text-neutral-n0" : "cursor-pointer bg-neutral-n10 text-neutral-n100 hover:text-neutral-n300"}`}
        >
          Daily
        </button>
        <button
          onClick={() => {
            setFrequency("weekly");
          }}
          className={`schedule-freq-btn ${frequency == "weekly" ? "bg-neutral-n700 text-neutral-n0" : "cursor-pointer bg-neutral-n10 text-neutral-n100 hover:text-neutral-n300"}`}
        >
          Weekly
        </button>
        <button
          onClick={() => {
            setFrequency("monthly");
          }}
          className={`schedule-freq-btn ${frequency == "monthly" ? "bg-neutral-n700 text-neutral-n0" : "cursor-pointer bg-neutral-n10 text-neutral-n100 hover:text-neutral-n300"}`}
        >
          Monthly
        </button>
      </div>
      {frequency == "weekly" && (
        <div className="flex w-full justify-between gap-4">
          {weekdays.map((day, index) => (
            <div
              onClick={() => {
                toggleWeekday(index);
              }}
              key={index}
              className={`flex-1 rounded p-2 text-center font-semibold ${selectedWeekdays[index] ? "bg-neutral-n700 text-neutral-n0" : "cursor-pointer bg-neutral-n10 text-neutral-n100 hover:text-neutral-n300"}`}
            >
              {day}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FrequencyConfigSection;
