import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Partner from "./components/Partner";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Steps from "./components/Steps";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      <Hero />
      <About />
      <Services />
      <Steps />
      <Partner />
      <Gallery />
      <Contact />
      <footer className="text-center text-sm py-4 text-gray-500">
        © 2025 Castor. Все права защищены.
      </footer>
    </div>
  );
}
