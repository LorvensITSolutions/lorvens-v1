import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import InnovationSection from "../components/InnovationSection";
import ServicesCarousel from "../components/ServicesCarousel";
import Testimonials from "../components/Testimonials";


const Home = () => (
<div className="min-h-screen bg-[#FFF6E5] pt-10 text-[#1F1F1F]">
  <Navbar/>
  <Hero />
  <InnovationSection />
  <ServicesCarousel/>
  <Testimonials/>
</div>

);

export default Home;
