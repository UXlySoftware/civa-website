import React from "react";
import { Box, Typography } from "@mui/material";

import storyImage from "../assets/storyImage.png";

const CivaStory = () => {
  return (
    <Box sx={styles.contentBox}>
      <Box sx={styles.titleContainer}>
        <Box sx={styles.titleBorder}>
          <Typography variant="h4" sx={styles.title}>
            THE CIVA STORY
          </Typography>
        </Box>
      </Box>
      <Box sx={styles.storyContainer}>
        <Box
          component="img"
          src={storyImage}
          alt="Civa Story"
          sx={styles.storyImage}
        />
        <Box sx={styles.storyTextBox}>
          <Typography variant="body1" sx={styles.storyText}>
            Ackeem Evans and Jermaine Hartsfield first met during their service
            in Peace Corps Albania. Working alongside foreign leaders,
            government officials, and NGOs, they saw firsthand the critical role
            civil society plays in maintaining trust and reciprocity within
            communities. <br />
            <br />
            With their combined expertise and a passion for effecting meaningful
            change, they envisioned a civic engagement solution to enable
            communication and collaboration between citizens and government —
            and CIVA was born.
            <br />
            <br />
            Their dedication and unwavering commitment to making the world a
            better place is at the core of CIVA’s mission.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  contentBox: {
    my: 4,
  },
  titleContainer: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    margin: {
      xl: "0 auto 68px auto",
      lg: "0 auto 68px auto",
      md: "0 auto 68px auto",
      sm: "0 auto 0px auto",
      xs: "0 auto 68px auto",
    },
  },
  titleBorder: {
    paddingBottom: "10px",
    borderBottom: "16px solid #FFC000",
    width: {
      xl: "710px",
      lg: "710px",
      md: "563px",
      sm: "364px",
      xs: "364px",
    },
    marginBottom: "8px",
  },
  title: {
    fontFamily: "Public Sans",
    fontSize: {
      xl: "52px",
      lg: "52px",
      md: "42px",
      sm: "28px",
      xs: "28px",
    },
    fontWeight: 900,
    lineHeight: {
      xl: "58px",
      lg: "58px",
      md: "46px",
      sm: "36px",
      xs: "36px",
    },
    marginTop: "16px",
  },
  storyContainer: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row", md: "row" },
    alignItems: "center",
    position: "relative",
    margin: "10px 10px",
  },
  storyImage: {
    width: { xs: "85%", md: "495px", sm: "50%" },
    height: "auto",
    marginLeft: {
      xl: "270px",
      lg: "71px",
      md: "24px",
      sm: "0px",
      xs: "0px",
    },
    zIndex: 1,
  },
  storyTextBox: {
    display: "flex",
    backgroundColor: "#2987AC",
    color: "#fff",
    padding: {
      xl: "85px",
      lg: "85px",
      md: "35px 25px",
      sm: "21px 21px",
      xs: "160px 21px",
    },
    width: { xs: "100%", md: "802px", sm: "388px" },
    height: {
      xl: "483px",
      lg: "483px",
      md: "364px",
      sm: "489px",
      xs: "700px",
    },
    marginTop: { xs: "200px", md: "0px" }, // Move up on mobile screens
    position: { xs: "absolute", md: "relative", sm: "relative" },
    top: { xs: "50px", md: "auto", sm: "-100px" },
    zIndex: { xs: 0, md: 0 },
    boxSizing: "border-box",
  },
  storyText: {
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: {
      xl: "22px",
      lg: "22px",
      md: "16px",
      sm: "16px",
      xs: "16px",
    },
    lineHeight: { xl: "25px", lg: "25px", md: "20px" },
  },
};
export default CivaStory;
