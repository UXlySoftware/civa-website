import React from "react";
import OurMission from "../AboutUs/OurMission";
import JoinCommunity from "../../components/JoinCommunity";
import CivaStory from "./CivaStory";
import AboutUsHero from "./AboutUsHero";
import Founders from "./Founders";

const AboutUs = () => {
  return (
    <>
      <AboutUsHero />
      <CivaStory />
      <OurMission />
      <Founders />
      {/* <OurTeam /> */}
      <JoinCommunity />
    </>
  );
};

export default AboutUs;
