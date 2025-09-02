import React from "react";
import AddBtn from "../buttons/AddBtn";

const AddStepBox = () => {
  return (
    <div className="w-full rounded-lg border border-neutral-n30 bg-neutral-n0 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.15)]">
      <div className="flex w-full justify-center py-4">
        <AddBtn label="Add Step" action="ADDSTEP" showLabel={true}></AddBtn>
      </div>
    </div>
  );
};

export default AddStepBox;
