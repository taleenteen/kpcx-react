// Home.js
import React from "react";
import Navbar from "./components/Navbar";
import Showcase from "./components/SectionFive/Showcase";
import Carousel from "./components/SectionFour/Carousel";
import Map from "./components/SectionFour/Map.tsx";
import ServiceMap from "./components/SectionFour/ServiceMap.tsx";
import Hero from "./components/Hero.tsx";
import Foot from "./components/Foot.tsx";
import Services from "./components/SectionThree/Services.tsx";
import Accordion from "./components/SectionSix/Accordion.tsx";
import Contact from "./components/SectionSeven/Contact.tsx";
import ShowClients from "./components/ShowClients.tsx";
import Info from "./components/SectionTwo/Info.tsx";

function Home() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <section className="p-4 mt-24">
        <div className="flex items-center justify-center">
          <Hero />
        </div>
      </section>
      <section>
        <ShowClients />
      </section>

      <section id="About">
        <Info />
      </section>
      <section id="Services" className="bg-blue2">
        <Services />
      </section>

      <section>
        <ServiceMap />
      </section>
      <section className="block sm:hidden">
        <Carousel />
      </section>
      <section>
        <Map></Map>
      </section>

      <section>
        <Showcase />
      </section>

      <section id="Faq" className="bg-blue2">
        <Accordion />
      </section>

      <section>
        <Contact />
      </section>
    </div>
  );
}

export default Home;
