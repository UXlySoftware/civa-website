import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";

import OurMission from "../components/OurMission";
import OurTeam from "../components/OurTeam";
import JoinCommunity from "./JoinCommunity";
import CivaStory from "./CivaStory";
import AboutUsHero from "./AboutUsHero";
import Founders from "./Founders";

const AboutUs = () => {
  const theme = useTheme();

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
