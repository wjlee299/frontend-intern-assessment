import AddBtn from "../buttons/AddBtn";

const TriggerScheduleBox = () => {
  return (
    <div className="w-full rounded-lg bg-neutral-n0 border border-neutral-n30 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.15)] mb-6">
      <div className="border-b border-neutral-n30 px-6 py-2.5 bg-neutral-n5 rounded-t-lg">
        <h1 className="title-03 text-neutral-n300">Trigger</h1>
      </div>
      <div className="flex w-full justify-center py-4 rounded-lg  ">
        <AddBtn label="Add Schedule" action="ADDSCHEDULE"></AddBtn>
      </div>
    </div>
  );
};

export default TriggerScheduleBox;
