import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

import { Montserrat_Alternates } from "next/font/google";

const amatic_sc = Montserrat_Alternates({
  subsets: ['cyrillic'],
  weight: "400",
})

export default function Home() {
  return (
      <main className={`${amatic_sc.className} flex min-h-screen flex-col bg-gray-100 dark:bg-gray-900`}>
        <Navbar/>
        <div className="mt-24 mx-20 px-12 py-12">
          <HeroSection/>
          <AboutSection/>
          <ProjectSection/>
          <EmailSection/>
        </div>
        <Footer/>
      </main>
  );
}
