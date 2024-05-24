import React, { useState } from "react";
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
        {/* Tab menu starts */}
        <Box sx={styles.rightSide}>
          <Box sx={styles.tabs}>
            <Box
              onClick={() => handleChange("1")}
              sx={tabValue === "1" ? styles.selectedTabBoxDemo : styles.tabBox}
            >
              <Typography
                sx={tabValue === "1" ? styles.selectedTab : styles.tab}
              >
                REQUEST A DEMO
              </Typography>
            </Box>
            <Box
              onClick={() => handleChange("2")}
              sx={
                tabValue === "2" ? styles.selectedTabBoxSupport : styles.tabBox
              }
            >
              <Typography
                sx={tabValue === "2" ? styles.selectedTab : styles.tab}
              >
                GET SUPPORT
              </Typography>
            </Box>
          </Box>
          <Box sx={styles.formBox}>
            <TabContext value={tabValue}>
              <TabPanel value="1" sx={styles.tabPanel}>
                <Grid container spacing={2} sx={styles.formContainer}>
                  <Grid item xs={12} sm={6}>
                    <Typography sx={styles.label}>* First Name</Typography>
                    <TextField
                      placeholder="Please enter your first name"
                      variant="outlined"
                      fullWidth
                      sx={styles.textField}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography sx={styles.label}>* Organization</Typography>
                    <TextField
                      placeholder="Please enter your organization"
                      variant="outlined"
                      fullWidth
                      sx={styles.textField}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography sx={styles.label}>* Last Name</Typography>
                    <TextField
                      placeholder="Please enter your last name"
                      variant="outlined"
                      fullWidth
                      sx={styles.textField}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography sx={styles.label}>Title</Typography>
                    <TextField
                      placeholder="Please enter your title"
                      variant="outlined"
                      fullWidth
                      sx={styles.textField}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography sx={styles.label}>* Email</Typography>
                    <TextField
                      placeholder="abc@email.com"
                      variant="outlined"
                      fullWidth
                      sx={styles.textField}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography sx={styles.label}>* Phone</Typography>
                    <TextField
                      placeholder="+123 00 000 00"
                      variant="outlined"
                      fullWidth
                      sx={styles.textField}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography sx={styles.label}>Notes</Typography>
                    <TextField
                      placeholder="Tell us about your needs"
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={4}
                      sx={styles.textField}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox color="primary" />}
                      label="Sign up for news & updates"
                      sx={styles.checkbox}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={styles.button}
                    >
                      Submit for Demo
                    </Button>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value="2" sx={styles.tabSupportPanel}>
                <Grid container spacing={2} sx={styles.formContainer}>
                  <Grid item xs={12} sm={6}>
                    <Typography sx={styles.label}>* First Name</Typography>
                    <TextField
                      placeholder="Please enter your first name"
                      variant="outlined"
                      fullWidth
                      sx={styles.textField}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography sx={styles.label}>* Organization</Typography>
                    <TextField
                      placeholder="Please enter your organization"
                      variant="outlined"
                      fullWidth
                      sx={styles.textField}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography sx={styles.label}>* Last Name</Typography>
                    <TextField
                      placeholder="Please enter your last name"
                      variant="outlined"
                      fullWidth
                      sx={styles.textField}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography sx={styles.label}>Title</Typography>
                    <TextField
                      placeholder="Please enter your title"
                      variant="outlined"
                      fullWidth
                      sx={styles.textField}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography sx={styles.label}>* Email</Typography>
                    <TextField
                      placeholder="abc@email.com"
                      variant="outlined"
                      fullWidth
                      sx={styles.textField}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography sx={styles.label}>* Phone</Typography>
                    <TextField
                      placeholder="+123 00 000 00"
                      variant="outlined"
                      fullWidth
                      sx={styles.textField}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography sx={styles.label}>Notes</Typography>
                    <TextField
                      placeholder="Tell us about your needs"
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={4}
                      sx={styles.textField}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={styles.button}
                    >
                      Submit for Support
                    </Button>
                  </Grid>
                </Grid>
              </TabPanel>
            </TabContext>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",

    color: "#000",
    width: {
      xl: "100vw",
      lg: "100vw",
      md: "1163px",
      sm: "1089px",
      xs: "1089px",
    },
    maxWidth: "100%",
    minWidth: "315px",
    height: {
      // xl: "924px",
      // lg: "50vh",
      // md: "auto",
      // sm: "610px",
      // xs: "auto",
    },
  },
  wrapper: {
    backgroundImage: `url(${contactBg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    zIndex: 0,

    maxWidth: "100%",
    height: { xl: "60vh", lg: "80vh", md: "746px", sm: "610px", xs: "1270px" },
    maxHeight: "100%",
    display: "flex",
    flexDirection: {
      xl: "row",
      lg: "row",
      md: "column",
      sm: "column",
      xs: "column",
    },
    paddingTop: {
      xl: "172px",
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
    gap: "120px",
    width: "100%",
  },
  leftSide: {
    height: { xl: "35%", lg: "35%", md: "35%", sm: "20%", xs: "20%" },
    maxWidth: "100%",
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
  rightSide: {
    position: {
      xl: "absolute",
      lg: "absolute",
      md: "relative",
      xs: "relative",
    },
    left: { xl: "1000px", lg: "600px", md: "390px" },
    top: { xl: "220px", lg: "220px", md: "-130px", sm: "300px", xs: "0px" }, // locate the tab menu
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    width: { xl: "784px", lg: "784px", md: "701px", sm: "380px", xs: "380px" },
    marginLeft: { xl: 0, lg: 0, md: "-115px", sm: "-15px", xs: "-15px" },
    maxWidth: "100%",
  },
  tabs: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  tabBox: {
    flex: 1,
    height: { xl: "70px", lg: "70px", md: "63px", sm: "39px", xs: "39px" },
    background: "#fff",
    // borderTopRightRadius: "12px",
    // borderTopLeftRadius: "12px",
    color: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedTabBoxDemo: {
    flex: 1,
    height: { xl: "85px", lg: "85px", md: "75px", sm: "47px", xs: "47px" },
    background: "#FFCC33",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: "12px",
    borderTopLeftRadius: "12px",
  },
  selectedTabBoxSupport: {
    flex: 1,
    height: { xl: "85px", lg: "85px", md: "75px", sm: "47px", xs: "47px" },
    background: "#74ADC7",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: "12px",
    borderTopLeftRadius: "12px",
  },
  tab: {
    fontFamily: "Inter",
    fontWeight: 900,
    fontSize: { xl: "28px", lg: "28px", md: "25px", sm: "15px", xs: "15px" },
    color: "#000000 !important",
  },
  selectedTab: {
    fontFamily: "Inter",
    fontWeight: 900,
    fontSize: { xl: "36px", lg: "36px", md: "32px", sm: "19px", xs: "19px" },
    color: "#000000 !important",
    borderBottom: {
      xl: "7px solid black",
      lg: "7px solid black",
      md: "7px solid black",
      sm: "4px solid black",
      xs: "4px solid black",
    },
  },
  tabPanel: {
    padding: "30px",
    backgroundColor: "#FFCC33",
  },
  formBox: {
    width: { xl: "784px", lg: "784px", md: "702px", sm: "380px", xs: "380px" },
    maxWidth: "100%",
    height: "auto",
    // backgroundColor: "#FFCC33",
    borderBottomLeftRadius: "12px",
    borderBottomRightRadius: "12px",
    overflow: "hidden",
    // marginBottom: { xl: 0, xs: 46 },
  },
  formSupportBox: {
    width: "784px",
    height: "auto",
    backgroundColor: "#74ADC7",
    borderBottomLeftRadius: "12px",
    borderBottomRightRadius: "12px",
    overflow: "hidden",
  },
  tabSupportPanel: {
    padding: "30px",
    backgroundColor: "#74ADC7",
  },
  formContainer: {
    width: "100%",
  },
  textField: {
    marginBottom: "22px",
    backgroundColor: "#fff",
  },
  checkbox: {
    marginBottom: "44px",
    fontFamily: "Public Sans",
    fontWeight: 500,
    fontSize: "20px",
    lineHeight: "23px",
    color: "#000",
  },
  button: {
    backgroundColor: "#000",
    padding: "12px 24px",
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize: "22px",
    color: "#fff",
    borderRadius: "12px",
  },
  label: {
    fontFamily: "Public Sans",
    fontWeight: 700,
    fontSize: "18px",
    lineHeight: "22px",
    marginBottom: "8px",
    color: "#010101",
  },
};

export default ContactUs;
