import React from "react";
import { Box, Typography, Button } from "@mui/material";
import united from "../assets/united.png";
import mobileApp from "../assets/mobileApp.png";

const HeroSection = () => {
  return (
    <Box sx={styles.heroBox}>
      <Box sx={styles.innerBox}>
        <Box sx={styles.sideBorder} />
        <Box sx={styles.innerLeft}>
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
        <Box
          sx={{
            // border: "1px solid orange",
            // display: "flex",
            justifyContent: "right",
            // width: "100%",
          }}
        >
          <Box
            component="img"
            src={mobileApp}
            alt="mobileApp"
            sx={styles.mobileAppImg}
          />
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  heroBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
      xs: "80vh",
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
    maxWidth: { xs: "100%", sm: "80%", md: "70%", lg: "70%", xl: "50%" },
  },
  innerBox: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    margin: {
      xl: "0px 300px",
      lg: "0px 100px",
      md: "0px 0px",
      sm: "0px 90px",
    },
  },
  innerLeft: {
    width: { xl: "80%", lg: "75%", md: "75%", sm: "83%" },
    alignItems: "right",
    marginLeft: { xl: "50px", lg: "0px", md: "0px", sm: "0px", xs: "32px" },
  },
  mobileAppImg: {
    padding: "0 !important",
    minWidth: "100%",
    maxWidth: "100%",
    width: { xl: "600px", lg: "500px", md: "500px" },
    display: { xs: "none", sm: "none", md: "none", lg: "flex" },
  },
  sideBorder: {
    "&::before": {
      content: '""',
      position: "absolute",
      left: {
        xl: "230px",
        lg: "0px",
        md: "0px",
      },

      height: {
        xl: "478px",
        lg: "478px",
        md: "438px",
        xs: "410px",
      },
      marginTop: { xl: "8px", xs: "0px" },
      width: "16px",
      backgroundColor: "#FFC000",
    },
  },
  mainHeading: {
    fontFamily: "Public Sans",
    fontWeight: 900,
    color: "#FFC000",
    fontSize: {
      xs: "40px",
      sm: " 42px",
      md: "52px",
      lg: "72px",
      xl: "72px",
    },

    // maxWidth: "100%",
    letterSpacing: "-0.02em",
    marginBottom: 4,
    marginTop: { xs: 0, sm: 2, md: 5, lg: 0, xl: 0 },
    // marginLeft: { xs: 4, md: 0 },
  },
  subHeading: {
    lineHeight: { xl: "36px", lg: "36px", md: "29px", sm: "29px", xs: "23px" },
    fontFamily: "Inter",
    fontWeight: "700",
    color: "#fff",
    marginBottom: { xl: 4, lg: 4, md: 4, sm: 4, xs: 3 },
    // marginLeft: { xs: 4, md: 0 },
    fontSize: {
      xs: "clamp(16px, 4vw, 16px)",
      sm: "clamp(16px, 4vw, 20px)",
      md: "clamp(18px, 4vw, 24px)",
      lg: "clamp(20px, 4vw, 29px)",
    },
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
    fontWeight: 700,
    borderRadius: "12px",
    textTransform: "none",
    backgroundColor: "#FFC000",
    width: { xl: "50%", xs: "95%" },
    color: "black",
    "&:hover": {
      backgroundColor: "#e8ae00",
    },
  },
};

export default HeroSection;
