"use client"
import { useConfigMenuContext } from "@/app/contexts/ConfigMenuContext";

const MenuSection = () => {
  const { menuType, configOptions } = useConfigMenuContext();
  return (
    <div className="w-[45%] bg-amber-200">
      <h1>Menu Type: {menuType}</h1>{" "}
      <h2>
        Config Options:{" "}
        {configOptions.map((item, index) => (
          <li key={index}>{item.optionName}</li>
        ))}
      </h2>
    </div>
  );
};

export default MenuSection;
