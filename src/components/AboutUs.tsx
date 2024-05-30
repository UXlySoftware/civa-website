import React from "react";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import heroBanner from "../assets/aboutHero.png";
import heroBannerMobile from "../assets/aboutHeroMobile.png";
import storyImage from "../assets/storyImage.png";
import OurMission from "../components/OurMission";
import OurTeam from "../components/OurTeam";
import JoinCommunity from "./JoinCommunity";

const AboutUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={styles.container}>
      {/* Hero */}
      <Box
        sx={{
          ...styles.heroWrapper,
          backgroundImage: `url(${isMobile ? heroBannerMobile : heroBanner})`,
        }}
      >
        <Box sx={styles.textOverlay}>
          <Box sx={styles.sideBorder} />
          <Typography variant="h4" sx={styles.heading}>
            COLLABORATION{" "}
            <span style={{ color: "white" }}>
              {" "}
              <br />
              CREATES IMPACT.
            </span>
          </Typography>

          <Typography variant="body1" sx={styles.description}>
            We believe innovation can strengthen civic <br />
            engagement by activating its potential as a<br /> collaborative
            ecosystem.
          </Typography>
          <Button variant="contained" color="warning" sx={styles.button}>
            Get a Demo{" "}
          </Button>
        </Box>
      </Box>
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
              Ackeem Evans and Jermaine Hartsfield first met during their
              service in Peace Corps Albania. Working alongside foreign leaders,
              government officials, and NGOs, they saw firsthand the critical
              role civil society plays in maintaining trust and reciprocity
              within communities. <br />
              <br />
              With their combined expertise and a passion for effecting
              meaningful change, they envisioned a civic engagement solution to
              enable communication and collaboration between citizens and
              government — and CIVA was born.
              <br />
              <br />
              Their dedication and unwavering commitment to making the world a
              better place is at the core of CIVA’s mission.
            </Typography>
          </Box>
        </Box>
      </Box>
      <OurMission />
      <OurTeam />
      <JoinCommunity />
    </Box>
  );
};

const styles = {
  container: {
    height: "auto",
    marginBottom: { xl: "0px", sm: "0px", xs: "0px" },
  },
  heroWrapper: {
    position: "relative",
    height: "38em",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textOverlay: {
    width: { xl: "40%", lg: "60%" },
    position: "absolute",
    top: { xl: "15%", lg: "8%", md: "0%", sm: "0%", xs: "20%" },
    left: { xl: "12%", lg: "0%", md: "0%", sm: "0%", xs: "0%" },
    textAlign: "left",
    color: "#fff",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    gap: { xl: "32px", lg: "32px", md: "24px", xs: "25px" },
  },
  heading: {
    fontFamily: "Public Sans",
    fontWeight: 900,
    color: "#FFC000",
    fontSize: {
      xs: "39px",
      sm: "42px",
      md: "52px",
      lg: "72px",
      xl: "72px",
    },
    lineHeight: {
      xl: "85px",
      lg: "85px",
      md: "85px",
      sm: "50px",
      xs: "50px",
    },
    marginLeft: { xl: "57px", lg: "57px", md: "57px", sm: "10px", xs: "30px" },
  },
  description: {
    fontFamily: "Inter",
    fontWeight: 700,
    color: "#fff",
    fontSize: {
      xs: "16px",
      sm: "16px",
      md: "16px",
      xl: "24px",
    },
    lineHeight: "29px",
    marginLeft: { xl: "57px", lg: "57px", md: "57px", sm: "10px", xs: "30px" },
  },
  button: {
    marginLeft: { xl: "57px", lg: "57px", md: "57px", sm: "10px", xs: "30px" },
    fontSize: { xl: "22px", lg: "22px" },
    lineHeight: { xl: "26px", lg: "26px" },
    width: { xl: "50%", lg: "50%", md: "50%", sm: "0%", xs: "90%" },
    fontFamily: "Inter",
    fontWeight: 700,
    color: "#010101",
    background: "#FFC000",
    borderRadius: "12px",
    padding: "12px 24px",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#e8ae00",
    },
  },
  sideBorder: {
    "&::before": {
      content: '""',
      position: "absolute",
      left: {
        xl: "0px",
        lg: "0px",
        md: "0px",
        xs: "0px",
      },
      height: {
        xl: "420px",
        lg: "420px",
        md: "318px",
        xs: "283px",
      },
      marginTop: { xl: "18px", lg: "13px", md: "20px", xs: "30px" },
      width: "16px",
      backgroundColor: "#FFC000",
    },
  },
  contentBox: {
    my: 4,
  },
  titleContainer: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    margin: "0 auto 68px auto",
  },
  titleBorder: {
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
    flexDirection: { xs: "column", md: "row" },
    alignItems: "center",
    position: "relative",
    margin: "10px 10px",
  },
  storyImage: {
    width: { xs: "85%", md: "495px" },
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
    backgroundColor: "#2987AC",
    color: "#fff",
    padding: {
      xl: "85px",
      lg: "85px",
      md: "35px 25px",
      sm: "21px 21px",
      xs: "160px 21px",
    },
    width: { xs: "95%", md: "802px", sm: "338px" },
    height: {
      xl: "483px",
      lg: "483px",
      md: "364px",
      sm: "529px",
      xs: "700px",
    },
    marginTop: { xs: "200px", md: "0px" }, // Move up on mobile screens
    position: { xs: "absolute", md: "static" },
    top: { xs: "50px", md: "auto" },
    zIndex: { xs: 0, md: 0 },
    boxSizing: "border-box",
  },
  storyText: {
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: {
      xl: "20px",
      lg: "20px",
      md: "16px",
      sm: "16px",
      xs: "16px",
    },
    lineHeight: { xl: "25px", lg: "25px", md: "20px" },
  },
};

export default AboutUs;
