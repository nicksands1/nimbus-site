import Hero from "@/src/components/Hero";
import Introduction from "../components/Introduction";
import Pricing from "../components/Pricing";
import UseCases from "../components/UseCases";
import HowItWorks from "../components/HowItWorks";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <main className="relative bg-black flex 
    justify-center items-center flex-col overflow-hidden
    mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Header />
        <Hero />
        <Introduction />
        <HowItWorks />
        <UseCases />
        <Pricing />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
