import MainSectionHeader from "./components/sections/MainSectionHeader";
import MenuCloserSection from "./components/sections/MenuCloserSection";
import MenuSection from "./components/sections/MenuSection";
import WorkflowSection from "./components/sections/WorkflowSection";

export default function Home() {
  return (
    <main className="no-select flex h-screen w-screen items-center justify-center">
      <div className="relative flex h-[80%] w-[90%]  lg:w-[80%] xl:w-[75%] flex-col rounded-lg border border-neutral-n30 2xl:w-[70%]">
        <MenuCloserSection></MenuCloserSection>
        <MainSectionHeader></MainSectionHeader>
        <div className="flex justify-center overflow-y-scroll rounded-b-lg p-8">
          <WorkflowSection></WorkflowSection>
          <MenuSection></MenuSection>
        </div>
      </div>
    </main>
  );
}
