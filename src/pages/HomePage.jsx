import React from "react";
import FeatureSection from "../components/sections/FeatureSection";
import HeroSection from "../components/sections/ HeroSection";
import DiscussSection from "../components/sections/DiscussSection";
import ContactSection from "../components/sections/ContactSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <DiscussSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
