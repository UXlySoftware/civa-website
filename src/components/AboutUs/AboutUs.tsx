import React from "react";
import { Box } from "@mui/material";

import OurMission from "../AboutUs/OurMission";
import OurTeam from "../AboutUs/OurTeam";
import JoinCommunity from "../../components/JoinCommunity";
import CivaStory from "./CivaStory";
import AboutUsHero from "./AboutUsHero";
import Founders from "./Founders";

const AboutUs = () => {
  return (
    <Box sx={styles.container}>
      <AboutUsHero />
      <CivaStory />
      <OurMission />
      <Founders />
      <OurTeam />
      <JoinCommunity />
    </Box>
  );
};

const styles = {
  container: {
    height: "auto",
  },
};

export default AboutUs;
