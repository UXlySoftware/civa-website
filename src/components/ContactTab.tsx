import React, { useState, FC, ReactNode } from "react";
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

// properties for the FormField component
interface FormFieldProps {
  label: ReactNode;
  placeholder: string;
  isMultiline?: boolean;
  rows?: number;
  order: { xs: number; md: number };
}

const ContactTab = () => {
  // State to track the selected tab
  const [tabValue, setTabValue] = useState("1");

  const handleChange = (newValue: string) => {
    setTabValue(newValue);
  };

  // form fields for demo and support forms
  const formFields: FormFieldProps[] = [
    {
      label: (
        <>
          <Typography component="span" color="red">
            *
          </Typography>{" "}
          First Name
        </>
      ),
      placeholder: "Please enter your first name",
      order: { xs: 1, md: 1 },
    },

    {
      label: (
        <>
          <Typography component="span" color="red">
            *
          </Typography>{" "}
          {""}
          Last Name
        </>
      ),
      placeholder: "Please enter your last name",
      order: { xs: 2, md: 3 },
    },
    {
      label: (
        <>
          <Typography component="span" color="red">
            *{" "}
          </Typography>
          Email
        </>
      ),
      placeholder: "abc@email.com",
      order: { xs: 3, md: 5 },
    },
    {
      label: (
        <>
          <Typography component="span" color="red">
            *{" "}
          </Typography>
          Organization
        </>
      ),
      placeholder: "Please enter your organization",
      order: { xs: 4, md: 2 },
    },
    {
      label: "Title",
      placeholder: "Please enter your title",
      order: { xs: 5, md: 4 },
    },
    {
      label: "* Phone",
      placeholder: "+123 00 000 00",
      order: { xs: 6, md: 6 },
    },
  ];

  return (
    <Box sx={styles.rightSide}>
      {/* Tabs for a demo or get support */}
      <Box sx={styles.tabs}>
        <Box
          onClick={() => handleChange("1")}
          sx={tabValue === "1" ? styles.selectedTabBoxDemo : styles.tabBox}
        >
          <Typography sx={tabValue === "1" ? styles.selectedTab : styles.tab}>
            REQUEST A DEMO
          </Typography>
        </Box>
        <Box
          onClick={() => handleChange("2")}
          sx={tabValue === "2" ? styles.selectedTabBoxSupport : styles.tabBox}
        >
          <Typography sx={tabValue === "2" ? styles.selectedTab : styles.tab}>
            GET SUPPORT
          </Typography>
        </Box>
      </Box>

      {/* Form content based on selected tab */}
      <Box sx={styles.formBox}>
        <TabContext value={tabValue}>
          {/* Request a demo */}
          <TabPanel value="1" sx={styles.tabPanel}>
            <Grid container spacing={2} sx={styles.formContainer}>
              {formFields.map((field, index) => (
                <Grid
                  item
                  xs={12}
                  sm={field.order.md === 12 ? 12 : 6}
                  order={field.order}
                  key={index}
                >
                  <Typography sx={styles.label}>{field.label}</Typography>
                  <TextField
                    placeholder={field.placeholder}
                    variant="outlined"
                    fullWidth
                    sx={styles.textField}
                    multiline={field.isMultiline}
                    rows={field.rows}
                  />
                </Grid>
              ))}
              {/* Notes field */}
              <Grid item xs={12} xl={12} order={{ xs: 7, md: 7 }}>
                <Typography sx={styles.label}>Notes</Typography>
                <TextField
                  placeholder="Tell us about your needs"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  sx={styles.textFieldNotes}
                />
              </Grid>
              {/* Checkbox for signing up for news & updates */}
              <Grid item xs={12} order={{ xs: 8, md: 8 }}>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Sign up for news & updates"
                  sx={styles.checkbox}
                />
              </Grid>
              <Grid item xs={12} order={{ xs: 9, md: 9 }}>
                <Button variant="contained" color="primary" sx={styles.button}>
                  Submit for Demo
                </Button>
              </Grid>
            </Grid>
          </TabPanel>

          {/* Get support  */}
          <TabPanel value="2" sx={styles.tabSupportPanel}>
            <Grid container spacing={2} sx={styles.formContainer}>
              {formFields.map((field, index) => (
                <Grid
                  item
                  xs={12}
                  sm={field.order.md === 12 ? 12 : 6}
                  order={field.order}
                  key={index}
                >
                  <Typography sx={styles.label}>{field.label}</Typography>
                  <TextField
                    placeholder={field.placeholder}
                    variant="outlined"
                    fullWidth
                    sx={styles.textField}
                    multiline={field.isMultiline}
                    rows={field.rows}
                  />
                </Grid>
              ))}
              {/* Notes field */}
              <Grid item xs={12} order={{ xs: 7, md: 7 }}>
                <Typography sx={styles.label}>Notes</Typography>
                <TextField
                  placeholder="Tell us about your needs"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  sx={styles.textFieldNotes}
                />
              </Grid>
              <Grid item xs={12} order={{ xs: 8, md: 8 }}>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Sign up for news & updates"
                  sx={styles.checkbox}
                />
              </Grid>
              <Grid item xs={12} order={{ xs: 9, md: 9 }}>
                <Button variant="contained" color="primary" sx={styles.button}>
                  Submit for Support
                </Button>
              </Grid>
            </Grid>
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
};
const styles = {
  rightSide: {
    position: "relative",
    top: "0px",
    display: "flex",
    flexDirection: "column",
    // width: { xl: "1924px", lg: "784px", md: "100%", sm: "100%", xs: "100%" },
    width: { xl: "784px", lg: "784px", md: "702px", xs: "370px" },
    // maxWidth: "100%",
    marginLeft: { xl: "0px", lg: "0px", md: "271px", sm: "0px", xs: "-15px" },
    marginBottom: "-184px",
    minHeight: "auto",
    // padding: { xl: "20px", lg: "20px", md: "20px", sm: "10px", xs: "10px" },
    boxSizing: "border-box",
    zIndex: 1,
  },
  tabs: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    maxWidth: "100%",
    width: { xl: "784px", lg: "784px", md: "702px" },
  },
  tabBox: {
    flex: 1,
    height: { xl: "70px", lg: "70px", md: "63px", sm: "39px", xs: "39px" },
    background: "#fff",
    color: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
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
    boxSizing: "border-box",
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
    boxSizing: "border-box",
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
    // paddingTop: "60px",
    backgroundColor: "#FFCC33",
    // width: "100%",
  },
  formBox: {
    width: { xl: "784px", lg: "784px", md: "702px", xs: "370px" },
    maxWidth: { xl: "100%", lg: "100%", md: "100%", sm: "100%", xs: "100%" },
    height: "auto",
    borderBottomLeftRadius: "12px",
    borderBottomRightRadius: "12px",
    overflow: "hidden",
    boxSizing: "border-box",
  },
  formSupportBox: {
    width: "884px",
    height: "auto",
    backgroundColor: "#74ADC7",
    borderBottomLeftRadius: "12px",
    borderBottomRightRadius: "12px",
    overflow: "hidden",
  },
  tabSupportPanel: {
    // padding: "30px",
    backgroundColor: "#74ADC7",
    // width: "100%",
  },
  formContainer: {
    width: "100%",
    boxSizing: "border-box",
    marginTop: "10px",
  },
  textField: {
    width: "100%",
    backgroundColor: "#fff",
    border: "none",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "transparent",
      },
      "&:hover fieldset": {
        borderColor: "#010101",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#010101",
      },
    },
  },
  textFieldNotes: {
    width: "100%",
    backgroundColor: "#fff",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "transparent",
      },
      "&:hover fieldset": {
        borderColor: "#010101",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#010101",
      },
    },
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
    width: { xl: "50%", lg: "50%", md: "50%", sm: "100%", xs: "100%" },
    padding: "12px 24px",
    fontFamily: "Inter",
    fontWeight: 700,
    fontSize: "22px",
    color: "#fff",
    borderRadius: "12px",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#E8AE00",
    },
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

export default ContactTab;
