import React, { useState, SyntheticEvent } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import contactBg from "../assets/contactBg.png";

const ContactUs = () => {
  const [tabValue, setTabValue] = useState("1");

  const handleChange = (newValue: string) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={styles.container}>
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
      </Box>
    </Box>
  );
};

const styles = {
  sideBorder: {
    "&::before": {
      content: '""',
      position: "absolute",
      left: {
        xl: "227px",
        lg: "0px",
        md: "0px",
      },
      height: {
        xl: "318px",
        lg: "478px",
        md: "438px",
        xs: "410px",
      },
      width: "16px",
      backgroundColor: "#FFC000",
    },
  },
  container: {
    backgroundImage: `url(${contactBg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    zIndex: -1,
    backgroundColor: "blue",
    color: "#fff",
    width: "100%",
    height: "941px",
  },
  wrapper: {
    maxWidth: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    paddingTop: "172px",
    paddingLeft: "311px",
    gap: "120px",
    zIndex: 1,
  },
  leftSide: {
    height: "500px",
    maxWidth: "100%",
  },
  heading: {
    fontFamily: "Inter",
    fontWeight: 900,
    fontSize: { xl: "72px", lg: "0px", md: "0px", sm: "0px", xs: "0px" },
    lineHeight: { xl: "87px", lg: "46px", md: "36px", sm: "32px", xs: "28px" },
    color: "#FDFCFB",
    marginBottom: "28px",
  },
  subHeading: {
    fontSize: "24px",
    lineHeight: "29px",
    fontWeight: 700,
    fontFamily: "Inter",
  },
  rightSide: {
    width: "784px",
    height: "auto",
    backgroundColor: "#FFCC33",
    borderRadius: "12px",
    overflow: "hidden",
  },
  tabListContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // borderBottom: 1,
    // borderColor: "divider",
    background: "red !important",
  },
  tabBox: {
    flex: 1,
    height: "80px",
    background: "#fff",
    color: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "10px",
  },
  selectedTabBox: {
    flex: 1,
    height: "90px", // Slightly taller height for the selected tab
    background: "#FFCC33",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "2px solid black",
  },
  tab: {
    fontFamily: "Inter",
    fontWeight: 900,
    fontSize: "28px",
    color: "#000000 !important",
  },
  selectedTab: {
    fontFamily: "Inter",
    fontWeight: 900,
    fontSize: "36px",
    color: "#000000 !important",
    borderBottom: "2px solid black",
  },
  tabPanel: {
    padding: "30px",
  },
  formContainer: {
    width: "100%",
  },
  textField: {
    marginBottom: "20px",
    backgroundColor: "#fff",
  },
  checkbox: {
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#000",
    color: "#FFC000",
    padding: "12px 24px",
    "&:hover": {
      backgroundColor: "#333",
    },
  },
};

export default ContactUs;
