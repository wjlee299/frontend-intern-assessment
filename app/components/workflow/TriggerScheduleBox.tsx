import AddBtn from "../buttons/AddBtn";

const TriggerScheduleBox = () => {
  return (
    <div className="card-shadow mb-6 w-full rounded-lg bg-neutral-n0">
      <div className="rounded-t-lg border-b border-neutral-n30 bg-neutral-n5 px-6 py-2.5">
        <h1 className="title-03 text-neutral-n300">Trigger</h1>
      </div>
      <div className="flex w-full justify-center rounded-lg py-4">
        <AddBtn label="Add Schedule" action=""></AddBtn>
      </div>
    </div>
  );
};

export default TriggerScheduleBox;
