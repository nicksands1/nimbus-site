import Hero from "@/src/components/Hero";
import Introduction from "../components/Introduction";
import Pricing from "../components/Pricing";
import UseCases from "../components/UseCases";

export default function Home() {
  return (
    <main className="relative bg-black flex 
    justify-center items-center flex-col overflow-hidden
    mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Introduction />
        <UseCases />
        <Pricing />
      </div>
    </main>
  );
}
