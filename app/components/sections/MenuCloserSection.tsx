"use client";
import { useConfigMenuContext } from "@/app/contexts/ConfigMenuContext";

const MenuCloserSection = () => {
  const { closeMenu } = useConfigMenuContext();
  return (
    <div
      className="absolute top-0 z-0 h-full w-full rounded-lg bg-neutral-n5"
      onClick={closeMenu}
    ></div>
  );
};

export default MenuCloserSection;
