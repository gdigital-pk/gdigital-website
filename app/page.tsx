import Navbar from "../component/layout/Navbar";
import Footer from "../component/layout/Footer";
import Hero from "../component/sections/Hero";
import Services from "../component/sections/Services";
import About from "../component/sections/About";
import Portfolio from "../component/sections/Portfolio";
import Hosting from "../component/sections/Hosting";
import Contact from "../component/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      {/* <Hero /> */}
      <Services />
      {/* <About />
      <Portfolio />
      <Hosting />
      <Contact />
      <Footer /> */}
    </main>
  );
}
