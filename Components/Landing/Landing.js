import Image from "next/image";
import About from "./About/About";
import FAQ from "./FAQ/Faq";
import Hero from "./Hero/HeroSection";
import HowWorks from "./Howitworks/HowWorks";
import Navbar from "./layout/navbar";
import Footer from "./layout/footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-[15vh]">
        <Hero />
        <About />
        <HowWorks />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}
