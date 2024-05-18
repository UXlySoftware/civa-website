import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import united from "../assets/united.png";
import mobileApp from "../assets/mobileApp.png";

const HeroSection = () => {
  return (
    <Box sx={styles.heroBox}>
      <Container sx={styles.container}>
        <Box sx={styles.innerBox}>
          <Box sx={styles.sideBorder} />
          <Typography variant="h3" component="h1" sx={styles.mainHeading}>
            CONNECT, EMPOWER, <br /> & TRANSFORM YOUR{" "}
            <span style={{ color: "white" }}>COMMUNITY.</span>
          </Typography>
          <Typography variant="h5" component="p" sx={styles.subHeading}>
            CIVA breaks through bureaucratic barriers — bringing organizations
            and communities together to create sustainable social impact through
            civic engagement.
          </Typography>
          <Button variant="contained" color="secondary" sx={styles.button}>
            Sign Up for Early Access
          </Button>
        </Box>
      </Container>
      <Box
        component="img"
        src={mobileApp}
        alt="mobileApp"
        sx={styles.mobileAppImg}
      />
    </Box>
  );
};

const styles = {
  heroBox: {
    backgroundImage: `url(${united})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    minWidth: "100%",
    height: "100%",
    minHeight: {
      xl: "calc(100vh - 64px)",
      lg: "100vh",
      md: "50vh",
      sm: "50vh",
      xs: "75vh",
    },
    margin: "0 auto",
    "@media (min-width: 1024px)": {
      minWidth: "100%",
    },
    "@media (max-width: 1024px)": {
      minWidth: "100%",
    },
    "@media (max-width: 768px)": {
      minWidth: "100%",
    },
    "@media (max-width: 600px)": {
      minWidth: "100%",
    },
  },
  container: {
    paddingRight: { xs: 2, md: 3, lg: 14, xl: 20 },
    paddingTop: { xs: 10, md: 15, lg: 20, xl: 23 },
    zIndex: 1,
    height: "65vh",
    position: "relative",
    maxWidth: { xs: "100%", sm: "80%", md: "70%", lg: "60%", xl: "50%" },
  },
  innerBox: {
    position: "relative",
    marginTop: { xs: "10px", sm: "100px", md: 0 },
    left: { xl: -25 },
    width: "100%",
  },
  sideBorder: {
    "&::before": {
      content: '""',
      position: "absolute",
      left: {
        xl: "-311px",
        lg: "-311px",
        md: "-180px",
        sm: "-110px",
        xs: "-15px",
      },
      top: "0px",
      height: { xl: "478px", lg: "428px", md: "318px", xs: "399px" },
      width: "16px",
      backgroundColor: "#FFC000",
    },
  },
  mainHeading: {
    letterSpacing: "-0.02em",
    fontWeight: "900",
    color: "#f9a825",
    marginBottom: 0,
    marginTop: { xs: 0, sm: 7, md: 5, lg: 0, xl: 0 },
    marginLeft: { xs: 4, md: 0 },
    fontSize: {
      xs: "40px",
      sm: " 42px",
      md: "52px",
      lg: "72px",
      xl: "72px",
    },
    position: "relative",
  },
  subHeading: {
    color: "#fff",
    marginBottom: 4,
    marginLeft: { xs: 4, md: 0 },
    width: { md: 600, lg: 700 },
    fontSize: {
      xs: "clamp(14px, 4vw, 20px)",
      sm: "clamp(16px, 4vw, 20px)",
      md: "clamp(18px, 4vw, 24px)",
      lg: "clamp(20px, 4vw, 29px)",
    },

    fontFamily: "Inter",
    fontWeight: "700",
  },
  button: {
    padding: { xs: "8px 16px", sm: "10px 20px", md: "12px 24px" },
    fontFamily: "Inter",
    fontSize: {
      xs: "clamp(12px, 3vw, 14px)",
      sm: "clamp(14px, 3vw, 16px)",
      md: "clamp(16px, 3vw, 18px)",
      lg: "clamp(18px, 3vw, 22px)",
    },
    marginLeft: { xs: 4, md: 0 },
    fontWeight: 700,
    borderRadius: "12px",
    textTransform: "none",
    backgroundColor: "#FFC000",
    color: "black",
  },
  mobileAppImg: {
    position: "absolute",
    display: { xs: "none", sm: "none", md: "none", lg: "flex" },
    right: { xs: "10%", md: "10%", lg: "5%", xl: "10%" },
    bottom: { xs: "5%", md: "35%", lg: "0%", xl: "10%" },
    width: {
      xs: "clamp(30%, 20vw, 60%)",
      md: "clamp(30%, 20vw, 40%)",
      lg: "clamp(35%, 20vw, 35%)",
      xl: "clamp(30%, 20vw, 30%)",
    },
  },
};

export default HeroSection;
