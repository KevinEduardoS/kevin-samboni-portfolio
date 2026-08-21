import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import EducationTimeline from "./components/EducationTimeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CursorGlow from "./components/CursorGlow";

export default function App() {
  return (
    <div className="bg-white dark:bg-[#0d0d0d] text-gray-800 dark:text-gray-200 min-h-screen font-sans transition-colors duration-300">
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <EducationTimeline />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
