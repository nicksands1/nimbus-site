import Footer from "@/src/components/Footer";
import Hero from "@/src/components/Hero";
import Roadmap from "@/src/components/Roadmap";
import { Features } from "@/src/components/ui/Features";
import { FaHome } from "react-icons/fa";
import Grid from "../components/Grid";


export default function Home() {
  return (
    <main className="relative bg-black flex 
    justify-center items-center flex-col overflow-hidden
    mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid />
        <Features />
        <Roadmap />
        <Footer />
      </div>
    </main>
  );
}
