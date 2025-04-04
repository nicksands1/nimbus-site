import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Roadmap from "@/components/Roadmap";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";


export default function Home() {
  return (
    <main className="relative bg-black flex 
    justify-center items-center flex-col overflow-hidden
    mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {name: 'Home', link: '/', icon: <FaHome />}
        ]}/>
        <Hero />
        <Grid />
        <Roadmap />
        <Footer />
      </div>
    </main>
  );
}
