import MenuTemplate from "../configmenu/MenuTemplate";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { useScheduleContext } from "@/app/contexts/ScheduleContext";
import { dateStringFormatConfig } from "@/app/models/ScheduleModel";
import FrequencyConfigSection from "./FrequencyConfigSection";

const ScheduleConfigMenu = () => {
  const { range, updateRange } = useScheduleContext();

  return (
    <div>
      <MenuTemplate menuTitle="Set Workflow Schedule">
        <div className="body-03 flex flex-col items-center gap-2 p-8">
          <div className="flex w-full justify-between px-4">
            <div>
              {range?.from ? (
                <div>
                  <span className="mr-0.5">Starts on </span>
                  <span className="font-semibold">
                    {range.from.toLocaleDateString(
                      "en-GB",
                      dateStringFormatConfig,
                    )}
                  </span>
                </div>
              ) : (
                "Select Start Date"
              )}
            </div>
            <div>
              {range?.to ? (
                <div>
                  <span className="mr-0.5">Ends on </span>
                  <span className="font-semibold">
                    {range.to.toLocaleDateString(
                      "en-GB",
                      dateStringFormatConfig,
                    )}
                  </span>
                </div>
              ) : (
                "Select End Date"
              )}
            </div>
          </div>

          <Calendar
            mode="range"
            selected={range}
            onSelect={updateRange}
            numberOfMonths={2}
            className="rounded-lg border"
          />

          <FrequencyConfigSection></FrequencyConfigSection>
        </div>
      </MenuTemplate>
    </div>
  );
};

export default ScheduleConfigMenu;
