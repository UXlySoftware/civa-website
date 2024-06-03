import React, { useState, ReactNode, ChangeEvent, FormEvent } from "react";
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
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

// Properties for the FormField
interface FormFieldProps {
  label: ReactNode;
  name: string;
  placeholder: string;
  isMultiline?: boolean;
  rows?: number;
  order: { xs: number; md: number };
}

const ContactTab = () => {
  // States
  const [tabValue, setTabValue] = useState("1");
  // Form data state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    title: "",
    phone: "",
    notes: "",
    // subscribe: false,
    createdAt: new Date(),
  });

  const handleChange = (newValue: string) => {
    setTabValue(newValue);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setFormData({ ...formData, subscribe: e.target.checked });
  // };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Check if required fields are empty
    const { firstName, lastName, email, organization, phone } = formData;
    if (!firstName || !lastName || !email || !organization || !phone) {
      alert("Please fill in all required fields.");
      return;
    }

    // email check regex
    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailCheck.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // phone number check regex 1231231234
    const phoneCheck = /^\+?\d{1,3}?\s?\d{3}?\s?\d{3}?\s?\d{4}$/;
    if (!phoneCheck.test(phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    try {
      formData.createdAt = new Date();
      const docRef = await addDoc(
        collection(db, tabValue === "1" ? "request-a-demo" : "get-support"),
        formData
      );
      console.log("Document written with ID: ", docRef.id);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error submitting form.");
    }
  };

  // Form fields for demo and support forms
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
      name: "firstName",
      placeholder: "Please enter your first name",
      order: { xs: 1, md: 1 },
    },
    {
      label: (
        <>
          <Typography component="span" color="red">
            *
          </Typography>{" "}
          Last Name
        </>
      ),
      name: "lastName",
      placeholder: "Please enter your last name",
      order: { xs: 2, md: 3 },
    },
    {
      label: (
        <>
          <Typography component="span" color="red">
            *
          </Typography>{" "}
          Email
        </>
      ),
      name: "email",
      placeholder: "abc@email.com",
      order: { xs: 3, md: 5 },
    },
    {
      label: (
        <>
          <Typography component="span" color="red">
            *
          </Typography>{" "}
          Organization
        </>
      ),
      name: "organization",
      placeholder: "Please enter your organization",
      order: { xs: 4, md: 2 },
    },
    {
      label: "Title",
      name: "title",
      placeholder: "Please enter your title",
      order: { xs: 5, md: 4 },
    },
    {
      label: (
        <>
          <Typography component="span" color="red">
            *
          </Typography>{" "}
          Phone
        </>
      ),
      name: "phone",
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
            <form onSubmit={handleSubmit}>
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
                      name={field.name}
                      placeholder={field.placeholder}
                      variant="outlined"
                      fullWidth
                      sx={styles.textField}
                      multiline={field.isMultiline}
                      rows={field.rows}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleInputChange}
                    />
                  </Grid>
                ))}
                {/* Notes field */}
                <Grid item xs={12} xl={12} order={{ xs: 7, md: 7 }}>
                  <Typography sx={styles.label}>Comments</Typography>
                  <TextField
                    name="notes"
                    placeholder="Tell us about your needs"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    sx={styles.textFieldNotes}
                    value={formData.notes}
                    onChange={handleInputChange}
                  />
                </Grid>
                {/* Checkbox for signing up for news & updates */}
                <Grid item xs={12} order={{ xs: 8, md: 8 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                        sx={{
                          "&.Mui-checked": {
                            color: "#000",
                          },
                        }}
                        // checked={formData.subscribe}
                        // onChange={handleCheckboxChange}
                      />
                    }
                    label="Sign up for news & updates"
                    sx={styles.checkbox}
                  />
                </Grid>
                <Grid item xs={12} order={{ xs: 9, md: 9 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={styles.button}
                  >
                    Submit for Demo
                  </Button>
                </Grid>
              </Grid>
            </form>
          </TabPanel>

          {/* Get support  */}
          <TabPanel value="2" sx={styles.tabSupportPanel}>
            <form onSubmit={handleSubmit}>
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
                      name={field.name}
                      placeholder={field.placeholder}
                      variant="outlined"
                      fullWidth
                      sx={styles.textField}
                      multiline={field.isMultiline}
                      rows={field.rows}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleInputChange}
                    />
                  </Grid>
                ))}
                {/* Notes field */}
                <Grid item xs={12} order={{ xs: 7, md: 7 }}>
                  <Typography sx={styles.label}>Comments</Typography>
                  <TextField
                    name="notes"
                    placeholder="Tell us about your needs"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    sx={styles.textFieldNotes}
                    value={formData.notes}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} order={{ xs: 8, md: 8 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                        // checked={formData.subscribe}
                        // onChange={handleCheckboxChange}
                        sx={{
                          "&.Mui-checked": {
                            color: "#000",
                          },
                        }}
                      />
                    }
                    label="Sign up for news & updates"
                    sx={styles.checkbox}
                  />
                </Grid>
                <Grid item xs={12} order={{ xs: 9, md: 9 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={styles.button}
                  >
                    Submit for Support
                  </Button>
                </Grid>
              </Grid>
            </form>
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
};

const styles = {
  rightSide: {
    // position: "relative",
    top: "0px",
    display: "flex",
    flexDirection: "column",
    // width: { xl: "784px", lg: "784px", md: "702px", sm: "570px", xs: "370px" },
    marginLeft: { xl: "0px", lg: "0px", md: "271px", sm: "210px", xs: "-15px" },
    marginBottom: "-184px",
    minHeight: "auto",
    boxSizing: "border-box",
    zIndex: 1,
  },
  tabs: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    maxWidth: "100%",
    width: { xl: "784px", lg: "644px", md: "702px", sm: "570px", xs: "370px" },
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
    cursor: "pointer",
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
    cursor: "pointer",
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
    cursor: "pointer",
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
    fontSize: { xl: "36px", lg: "34px", md: "32px", sm: "19px", xs: "19px" },
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
    backgroundColor: "#FFCC33",
  },
  formBox: {
    width: { xl: "784px", lg: "644px", md: "702px", sm: "570px", xs: "370px" },
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
    backgroundColor: "#74ADC7",
  },
  formContainer: {
    width: "100%",
    boxSizing: "border-box",
    marginTop: "10px",
  },
  textField: {
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
      backgroundColor: "#e8ae00",
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
