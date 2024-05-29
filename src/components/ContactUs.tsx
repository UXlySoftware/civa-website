import React from "react";
import { Box, Typography } from "@mui/material";
import contactBg from "../assets/contactBg.png";
import ContactTab from "../components/ContactTab";

const ContactUs = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.leftSide}>
        <Box sx={styles.sideBorder} />
        <Typography variant="h3" sx={styles.heading}>
          CONTACT US
        </Typography>
        <Typography variant="h6" sx={styles.subHeading}>
          CIVA's here to help.
        </Typography>
      </Box>
      <ContactTab />
    </Box>
  );
};

const styles = {
  wrapper: {
    backgroundImage: `url(${contactBg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    zIndex: 0,
    width: "100%",
    display: "flex",
    flexDirection: {
      xl: "row",
      lg: "row",
      md: "column",
      sm: "column",
      xs: "column",
    },
    paddingTop: {
      xl: "187px",
      lg: "172px",
      md: "106px",
      sm: "78px",
      xs: "78px",
    },
    paddingLeft: {
      xl: "311px",
      lg: "50px",
      md: "48px",
      sm: "42px",
      xs: "24px",
    },
    gap: { xl: "65px", lg: "120px", md: "67px", xs: "64px" },
    height: "auto",
    boxSizing: "border-box",
  },
  leftSide: {
    width: "100%",
    maxWidth: {
      xl: "35%",
      lg: "35%",
      md: "100%",
      sm: "100%",
      xs: "100%",
    },
  },
  sideBorder: {
    "&::before": {
      content: '""',
      position: "absolute",
      left: {
        xl: "227px",
        lg: "0px",
        md: "0px",
        sm: "0px",
        xs: "0px",
      },
      height: {
        xl: "318px",
        lg: "478px",
        md: "318px",
        xs: "116px",
      },
      width: "16px",
      backgroundColor: "#FFC000",
    },
  },
  heading: {
    fontFamily: "Inter",
    fontWeight: 900,
    fontSize: { xl: "72px", lg: "72px", md: "52px", sm: "42px", xs: "42px" },
    lineHeight: { xl: "87px", lg: "46px", md: "62px", sm: "50px", xs: "50px" },
    color: "#FDFCFB",
    marginBottom: {
      xl: "32px",
      lg: "32px",
      md: "32px",
      sm: "24px",
      xs: "24px",
    },
  },
  subHeading: {
    fontSize: { xl: "24px", lg: "24px", md: "16px", sm: "16px", xs: "16px" },
    lineHeight: { xl: "29px", lg: "29px" },
    fontWeight: 700,
    fontFamily: "Inter",
    color: "#fff",
  },
};

export default ContactUs;
