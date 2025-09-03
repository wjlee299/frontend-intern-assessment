import React from "react";
import MenuTemplate from "./MenuTemplate";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import type { DateRange } from "react-day-picker";

const ScheduleConfigMenu = () => {
  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: undefined,
  });

  return (
    <div>
      <MenuTemplate menuTitle="Set Workflow Schedule">
        <div className="flex flex-col items-center p-8 gap-2 body-03">
          <div className="flex justify-between w-full px-4">
            <h1>
               {range?.from ? "Starts on " + range.from.toDateString() : "Select Start Date"}
            </h1>
            <h1>{range?.to ? "Ends on " +  range.to.toDateString() :"Select End Date"}</h1>
          </div>

          <Calendar
            mode="range"
            selected={range}
            onSelect={setRange}
            numberOfMonths={2}
            className="rounded-lg border"
          />
        </div>
      </MenuTemplate>
    </div>
  );
};

export default ScheduleConfigMenu;
