import MainSectionHeader from "./components/sections/MainSectionHeader";

export default function Home() {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <div className="flex h-[80%] w-[80%] lg:w-[70%] flex-col rounded-lg border border-neutral-n30">
        <MainSectionHeader></MainSectionHeader>
      </div>
    </main>
  );
}
