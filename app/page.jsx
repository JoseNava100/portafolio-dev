import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Proyect from "@/components/Proyect";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <Skills />
      <Proyect />
      <AboutMe />
      <Footer />
    </div>
  );
}