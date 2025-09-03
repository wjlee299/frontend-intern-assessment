import AddBtn from "../buttons/AddBtn";
import { useScheduleContext } from "@/app/contexts/ScheduleContext";
import { dateStringFormatConfig } from "@/app/models/ScheduleModel";
import { useConfigMenuContext } from "@/app/contexts/ConfigMenuContext";

const TriggerScheduleBox = () => {
  const { range } = useScheduleContext();
  const {openScheduleConfigMenu} = useConfigMenuContext()

  return (
    <div className="card-shadow mb-6 w-full rounded-lg bg-neutral-n0">
      <div className="rounded-t-lg border-b border-neutral-n30 bg-neutral-n5 px-6 py-2.5">
        <h1 className="title-03 text-neutral-n300">Trigger</h1>
      </div>
      {range?.from && range?.to && (
        <div onClick={openScheduleConfigMenu} className="body-02 w-full p-8 rounded-b-lg cursor-pointer">
          <h1>
            from{" "}
            <span className="font-semibold">
              {range.from.toLocaleDateString("en-GB", dateStringFormatConfig)}
            </span>{" "}
            to{" "}
            <span className="font-semibold">
              {range.to.toLocaleDateString("en-GB", dateStringFormatConfig)}
            </span>
          </h1>
        </div>
      )}
      {!range?.from ||
        (!range?.to && (
          <div className="flex w-full justify-center rounded-lg py-4">
            <AddBtn label="Add Schedule" action="ADDSCHEDULE"></AddBtn>
          </div>
        ))}
    </div>
  );
};

export default TriggerScheduleBox;
