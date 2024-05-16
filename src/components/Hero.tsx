import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import united from "../assets/united.png";
import mobileApp from "../assets/mobileApp.png";

const HeroSection = () => {
  return (
    <Box sx={styles.heroBox}>
      <Container sx={styles.container}>
        <Box sx={styles.innerBox}>
          <Typography variant="h3" component="h1" sx={styles.mainHeading}>
            CONNECT, EMPOWER, <br /> & TRANSFORM YOUR{" "}
            <span style={{ color: "white" }}>COMMUNITY.</span>
          </Typography>
          <Box sx={{ height: "87px" }}>
            <Typography variant="h5" component="p" sx={styles.subHeading}>
              CIVA breaks through bureaucratic barriers — bringing organizations
              and communities together to create sustainable social impact
              through civic engagement.
            </Typography>
            <Button variant="contained" color="secondary" sx={styles.button}>
              Sign Up for Early Access
            </Button>
          </Box>
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
    height: { xs: "63vh", md: "100vh" },
    maxWidth: "100%", // Maximum width for xl screens
    margin: "0 auto", // Center the box
  },
  container: {
    paddingRight: { xs: 2, md: 3, lg: 14, xl: 20 },
    paddingTop: { xs: 2, md: 3, lg: 20, xl: 30 },
    zIndex: 1,
    position: "relative",
    maxWidth: { xs: "100%", sm: "80%", md: "70%", lg: "60%", xl: "50%" },
  },
  innerBox: {
    position: "relative",
    left: { xl: -50 },
    "&::before": {
      content: '""',
      position: "absolute",
      left: { lg: "-311px", md: "-290px", sm: "-110px", xs: "-15px" },
      height: "120%",
      width: { xs: "12px", md: "16px" },
      backgroundColor: "#FFC000",
    },
  },
  mainHeading: {
    letterSpacing: "-1.44px",
    fontWeight: "900",
    color: "#f9a825",
    marginBottom: 4,
    marginTop: { xs: 7, md: 15, lg: 0, xl: 0 },
    marginLeft: { xs: 4, md: 0 },
    fontSize: {
      xs: "clamp(24px, 5vw, 24px)",
      sm: "clamp(24px, 5vw, 36px)",
      md: "clamp(32px, 5vw, 32px)",
      lg: "clamp(30px, 5vw, 45px)",
      xl: "clamp(48px, 5vw, 72px)",
    },
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
    display: { xs: "none", sm: "none", md: "flex" },
    right: { xs: "10%", md: "10%", lg: "5%", xl: "10%" },
    bottom: { xs: "5%", md: "35%", lg: "5%", xl: "5%" },
    width: {
      xs: "clamp(30%, 20vw, 60%)",
      md: "clamp(30%, 20vw, 40%)",
      lg: "clamp(30%, 20vw, 35%)",
      xl: "clamp(30%, 20vw, 30%)",
    },
  },
};

export default HeroSection;
