import PlusIcon from "@/app/assets/icons/plus.svg";

const TriggerScheduleBox = () => {
  return (
    <div className="w-full rounded-lg border border-neutral-n30 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.15)]">
      <div className="border-b border-neutral-n30 px-6 py-2.5">
        <h1 className="title-03 text-neutral-n300">Trigger</h1>
      </div>
      <div className="flex w-full justify-center py-4">
        <button className="flex w-fit cursor-pointer items-center gap-0.5 rounded-sm py-0.5 pr-3 pl-1.5 text-extended-dark-blue-100 hover:bg-software-pale-blue-25">
          <PlusIcon className="h-6 w-6 p-0.5"></PlusIcon>
          <h2 className="title-02">Add Schedule</h2>
        </button>
      </div>
    </div>
  );
};

export default TriggerScheduleBox;
