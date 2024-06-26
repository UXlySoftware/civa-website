import React from "react";
import { Box, Typography } from "@mui/material";
import united from "../../assets/united.png";
import GetDemoButton from "../GetDemoButton";

const HeroSection = () => {
  // Split words for color change loop
  // const words = ["CONNECT.", "COMMUNICATE.", "COLLABORATE."];
  // const [currentWord, setCurrentWord] = useState(0);
  // // Interval
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentWord((prevWord) => (prevWord + 1) % words.length);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // });
  return (
    <Box sx={styles.heroBox}>
      <Box component="img" src={united} sx={styles.heroBackground} />
      <Box sx={styles.innerBox}>
        <Box sx={styles.sideBorder} />
        <Box sx={styles.innerLeft}>
          <Typography variant="h3" component="h1" sx={styles.mainHeading}>
            CONNECT. <br />
            COMMUNICATE.
            <br />
            <span style={{ color: "white" }}> COLLABORATE.</span>
          </Typography>
          <Typography variant="h5" component="p" sx={styles.subHeading}>
            Empower your community through <br /> engagement and insights.
          </Typography>
          <Box
            sx={{
              width: { xl: "50%", lg: "50%", md: "50%", sm: "50%", xs: "100%" },
            }}
          >
            <GetDemoButton />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  heroBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: { xl: "100%", lg: "100%", md: "50%", sm: "50%", xs: "80%" },
    objectFit: "cover",
    zIndex: -1,
  },
  heroBox: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    width: "100%",
    minWidth: "100%",
    height: "100%",
    minHeight: {
      xl: "100vh",
      lg: "100vh",
      md: "50vh",
      sm: "50vh",
      xs: "80vh",
    },
    overflow: "hidden",
  },
  innerBox: {
    display: "flex",
    width: { xl: "100%", lg: "100%", md: "100%", sm: "100%" },
    margin: {
      xl: "0px 300px",
      lg: "0px 80px",
      md: "0px 80px",
      sm: "0px 50px",
      xs: "0px 50px",
    },
  },
  innerLeft: {
    marginTop: { xs: "-60px", sm: 0, md: -10, lg: 0, xl: 0 },
    width: { xl: "100%", lg: "100%", md: "100%", sm: "100%" },
    alignItems: "left",
  },

  sideBorder: {
    "&::before": {
      content: '""',
      position: "absolute",
      left: {
        xl: "230px",
        lg: "0px",
        md: "0px",
        xs: "0px",
      },
      height: {
        xl: "428px",
        lg: "478px",
        md: "368px",
        sm: "320px",
        xs: "300px",
      },
      marginTop: { xl: "8px", lg: "0px", md: -10, sm: 0, xs: "-65px" },
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
    letterSpacing: "-0.02em",
    marginBottom: 4,
  },
  subHeading: {
    lineHeight: {
      xl: "29px",
      lg: "29px",
      md: "19.5px",
      sm: "19.5px",
      xs: "19.5px",
    },
    fontFamily: "Inter",
    fontWeight: "700",
    color: "#fff",
    marginBottom: { xl: 4, lg: 4, md: 4, sm: 4, xs: 3 },

    fontSize: {
      xs: "16px",
      sm: "16px",
      md: "16px",
      lg: "24px",
      xl: "24px",
    },
  },
  button: {
    padding: { xs: "8px 16px", sm: "10px 20px", md: "12px 24px" },
    fontFamily: "Inter",
    fontSize: {
      xs: "18px",
      sm: "18px",
      md: "18px",
      lg: "22px",
      xl: "22px",
    },
    lineHeight: {
      xl: "27px",
      lg: "27px",
      md: "22px",
      sm: "22px",
      xs: "22px",
    },
    fontWeight: 700,
    borderRadius: "12px",
    textTransform: "none",
    backgroundColor: "#FFC000",
    width: { xl: "50%", sm: "50%", xs: "95%" },
    color: "black",
    "&:hover": {
      backgroundColor: "#e8ae00",
    },
  },
};

export default HeroSection;
