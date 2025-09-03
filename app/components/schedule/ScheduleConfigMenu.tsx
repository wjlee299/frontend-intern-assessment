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
        <div className="body-02 flex flex-col items-center gap-4 p-6 ">
          <div className="flex w-full flex-col justify-start gap-2 mb-2">
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
                <span className="text-extended-red-100">Select Start Date</span>
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
                <span className="text-extended-red-100">Select End Date</span>
              )}
            </div>
          </div>

          <Calendar
            mode="range"
            selected={range}
            onSelect={updateRange}
            className="rounded-lg border"
          />

          <FrequencyConfigSection></FrequencyConfigSection>
        </div>
      </MenuTemplate>
    </div>
  );
};

export default ScheduleConfigMenu;
