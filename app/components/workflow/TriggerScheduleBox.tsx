import AddBtn from "../buttons/AddBtn";
import { useScheduleContext } from "@/app/contexts/ScheduleContext";
import { dateStringFormatConfig } from "@/app/models/ScheduleModel";
import { useConfigMenuContext } from "@/app/contexts/ConfigMenuContext";

const TriggerScheduleBox = () => {
  const { range, frequency } = useScheduleContext();
  const { openScheduleConfigMenu, menuType, isOpen } = useConfigMenuContext();

  return (
    <div
      className={`mb-6 w-full rounded-lg border bg-neutral-n0 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.15)] transition-all duration-300 ${isOpen && menuType == "scheduleConfig" ? "border-extended-dark-blue-25" : "border-neutral-n30"}`}
    >
      <div className="rounded-t-lg border-b border-neutral-n30 bg-neutral-n5 px-6 py-2.5">
        <h1 className="title-03 text-neutral-n300">Trigger</h1>
      </div>

      {range?.from && range?.to && (
        <div
          onClick={openScheduleConfigMenu}
          className="body-02 flex w-full cursor-pointer flex-col gap-2 rounded-b-lg p-6"
        >
          <div>
            Workflow will run every
            <span className="font-semibold">
              {(() => {
                switch (frequency) {
                  case "daily":
                    return " day ";
                  case "weekly":
                    return " week ";
                  case "monthly":
                    return " month ";
                  default:
                    return null;
                }
              })()}
            </span>
          </div>
          <div>
            from{" "}
            <span className="font-semibold">
              {range.from.toLocaleDateString("en-GB", dateStringFormatConfig)}
            </span>{" "}
            to{" "}
            <span className="font-semibold">
              {range.to.toLocaleDateString("en-GB", dateStringFormatConfig)}
            </span>
          </div>
        </div>
      )}
      {!range?.to  && (
          <div className="flex w-full justify-center rounded-lg py-4">
            <AddBtn label="Add Schedule" action="ADDSCHEDULE"></AddBtn>
          </div>
        )}
    </div>
  );
};

export default TriggerScheduleBox;
