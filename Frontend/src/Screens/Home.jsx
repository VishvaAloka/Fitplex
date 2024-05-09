import React from "react";
import Hero from "../components/Hero/Hero";
import Programs from "../components/Programs/Programs";
import Reasons from "../components/Reasons/Reasons";
import Plans from "../components/Plans/Plans";
import Footer from "../components/Footer/Footer";

export default function Home() {
  
  return (
    <div className="bg-[#3e3e3e]">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Footer/>
    </div>
    
  );
  
}
