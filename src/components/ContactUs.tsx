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
        {/* Tab menu starts */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // gap: "10px",
            justifyContent: "space-between",
          }}
        >
          {/* Tabs */}
          <Box
            sx={{
              display: "flex",
              flexdirection: "row",
              alignItems: "flex-end",
            }}
          >
            <Box
              onClick={() => handleChange("1")}
              sx={tabValue === "1" ? styles.selectedTabBox : styles.tabBox}
            >
              <Typography
                sx={tabValue === "1" ? styles.selectedTab : styles.tab}
              >
                REQUEST A DEMO
              </Typography>
            </Box>
            <Box
              // onClick={() => handleChange("2")}
              sx={tabValue === "2" ? styles.selectedTabBox : styles.tabBox}
            >
              <Typography
                sx={tabValue === "2" ? styles.selectedTab : styles.tab}
              >
                GET SUPPORT
              </Typography>
            </Box>
          </Box>
          {/* form */}
          <Box sx={styles.form}>
            <TabContext value={tabValue}>
              <TabPanel value="1" sx={styles.tabPanel}>
                <Grid container spacing={2} sx={styles.formContainer}>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      sx={{
                        fontFamily: "Public Sans",
                        fontWeight: 700,
                        fontSize: "18px",
                        lineHeight: "22px",
                        marginBottom: "8px",
                        color: "#010101",
                      }}
                    >
                      * First Name
                    </Typography>
                    <TextField
                      label="Please enter your first name"
                      variant="outlined"
                      fullWidth
                      sx={styles.textField}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      sx={{
                        fontFamily: "Public Sans",
                        fontWeight: 700,
                        fontSize: "18px",
                        lineHeight: "22px",
                        marginBottom: "8px",
                        color: "#010101",
                      }}
                    >
                      * Organization
                    </Typography>
                    <TextField
                      label="Please enter your organization"
                      variant="outlined"
                      fullWidth
                      sx={styles.textField}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      sx={{
                        fontFamily: "Public Sans",
                        fontWeight: 700,
                        fontSize: "18px",
                        lineHeight: "22px",
                        marginBottom: "8px",
                        color: "#010101",
                      }}
                    >
                      * Last Name
                    </Typography>
                    <TextField
                      label="Please enter your last name"
                      variant="outlined"
                      fullWidth
                      sx={styles.textField}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      sx={{
                        fontFamily: "Public Sans",
                        fontWeight: 700,
                        fontSize: "18px",
                        lineHeight: "22px",
                        marginBottom: "8px",
                        color: "#010101",
                      }}
                    >
                      Title
                    </Typography>
                    <TextField
                      label="Please enter your title"
                      variant="outlined"
                      fullWidth
                      sx={styles.textField}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      sx={{
                        fontFamily: "Public Sans",
                        fontWeight: 700,
                        fontSize: "18px",
                        lineHeight: "22px",
                        marginBottom: "8px",
                        color: "#010101",
                      }}
                    >
                      * Email
                    </Typography>
                    <TextField
                      label="abc@email.com"
                      variant="outlined"
                      fullWidth
                      sx={styles.textField}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      sx={{
                        fontFamily: "Public Sans",
                        fontWeight: 700,
                        fontSize: "18px",
                        lineHeight: "22px",
                        marginBottom: "8px",
                        color: "#010101",
                      }}
                    >
                      * Phone
                    </Typography>
                    <TextField
                      label="+123 00 000 00"
                      variant="outlined"
                      fullWidth
                      sx={styles.textField}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      label="Notes"
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
              <TabPanel value="2" sx={styles.tabPanel}>
                <Grid container spacing={2} sx={styles.formContainer}>
                  {/* <Grid item xs={12} sm={6}>
                    <TextField
                      label="Organization"
                      variant="outlined"
                      fullWidth
                      sx={styles.textField}
                    />
                  </Grid> */}
                  {/* <Grid item xs={12} sm={6}>
                    <TextField
                      label="Title"
                      variant="outlined"
                      fullWidth
                      sx={styles.textField}
                    />
                  </Grid> */}
                  {/* <Grid item xs={12} sm={6}>
                    <TextField
                      label="Email"
                      variant="outlined"
                      fullWidth
                      sx={styles.textField}
                    />
                  </Grid> */}
                  {/* <Grid item xs={12} sm={6}>
                    <TextField
                      label="Phone"
                      variant="outlined"
                      fullWidth
                      sx={styles.textField}
                    />
                  </Grid> */}
                  {/* <Grid item xs={12}>
                    <TextField
                      label="Description"
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
                  </Grid> */}
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
  form: {
    width: "784px",
    height: "auto",
    backgroundColor: "#FFCC33",
    borderBottomLeftRadius: "12px",
    borderBottomRightRadius: "12px",
    overflow: "hidden",
  },
  tabListContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "red !important",
  },
  tabBox: {
    flex: 1,
    height: "70px",
    background: "#fff",
    color: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "10px",
  },
  selectedTabBox: {
    flex: 1,
    height: "85px",
    background: "#FFCC33",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: "12px",
    borderTopLeftRadius: "12px",
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
    borderBottom: "7px solid black",
  },
  tabPanel: {
    padding: "30px",
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
};

export default ContactUs;
