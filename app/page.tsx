import MainSectionHeader from "./components/sections/MainSectionHeader";
import MenuSection from "./components/sections/MenuSection";
import WorkflowSection from "./components/sections/WorkflowSection";

export default function Home() {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <div className="flex h-[80%] w-[80%] flex-col rounded-lg border border-neutral-n30 lg:w-[70%]">
        <MainSectionHeader></MainSectionHeader>
        <div className="flex justify-center overflow-y-scroll rounded-b-lg bg-neutral-n5 p-8">
          <WorkflowSection></WorkflowSection>
          <MenuSection></MenuSection>
        </div>
      </div>
    </main>
  );
}
