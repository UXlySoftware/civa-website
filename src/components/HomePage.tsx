// src/components/HomePage.tsx
import React from "react";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import JoinCommunity from "./JoinCommunity";
import Partners from "./Partners";
import Second from "./Second";
import Fourth from "./Fourth";
import ThirdSection from "./Third";

const HomePage = () => {
  return (
    <>
      {/* Hero */}
      <Hero />
      {/* Second Section */}
      <Second />
      {/* Third Section düzenleniyor açıklama çevrildi */}
      <ThirdSection />
      {/* How it works section */}
      <Fourth />
      <HowItWorks />
      {/* Partners */}
      <Partners />
      <JoinCommunity />
    </>
  );
};

export default HomePage;
