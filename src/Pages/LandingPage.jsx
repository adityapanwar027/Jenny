import React from "react";
import Navbar from "../Components/GlobalComponents/Navbar";
import Hero from "../Components/LandingComponents/Hero";
import Myservice from "../Components/LandingComponents/MyService";
import Mywork from "../Components/LandingComponents/Mywork";
import Hireme from "../Components/LandingComponents/Hireme";
import Havelook from "../Components/LandingComponents/Havelook";
import Testimonial from "../Components/LandingComponents/Testimonial";
import Discuss from "../Components/LandingComponents/Discuss";
import Slider from "../Components/LandingComponents/Slider";
import Blog from "../Components/LandingComponents/Blog";
import Footer from '../Components/GlobalComponents/Footer';



function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Myservice />
      <Mywork />
      <Hireme />
      <Havelook/>
       <Testimonial/>
      <Discuss />
      <Slider />
      <Blog/>
      <Footer/> 
      
       
    </div>
  );
}

export default LandingPage;
