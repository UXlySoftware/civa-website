import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import { iPhoneImg } from "../assets/product";

const tempData = [
  {
    id: 1,
    title: "Organizations join CIVA.",
  },
  {
    id: 2,
    title: "Discover and link to relevant government resources.",
  },
  {
    id: 3,
    title:
      "Find and partner with communities and individuals based on shared interests.",
  },
  {
    id: 4,
    title:
      "Communicate with communities and individuals — conduct polls and surveys, answer questions, get feedback, etc.",
  },
  {
    id: 5,
    title: "Receive analytics, metrics and insights.",
  },
  {
    id: 6,
    title:
      "Organization uses substantial metrics and data to procure future government funding and ensure success.",
  },
];

const ProductTab = () => {
  return (
    <Box sx={styles.container}>
      {/* Tabs for a demo or get support */}
      <Box sx={styles.tabs}>
        {/* AFFINITY ORGANIZATIONS */}
        <Box sx={styles.tabBox1}>
          <Typography sx={styles.selectedTab1}>
            AFFINITY ORGANIZATIONS
          </Typography>
        </Box>

        {/* COMMUNITY ASSOCIATIONS */}
        <Box sx={styles.tabBox2}>
          <Typography sx={styles.selectedTab2}>
            COMMUNITY ASSOCIATIONS
          </Typography>
        </Box>

        {/* INDIVIDUALS */}
        <Box sx={styles.tabBox3}>
          <Typography sx={styles.selectedTab3}>INDIVIDUALS</Typography>
        </Box>
      </Box>

      {/* Form content based on selected tab */}
      <Box sx={styles.formBox}>
        <TabContext value="1">
          {/* Request a demo */}
          <TabPanel value="1" sx={styles.tabPanel}>
            <Grid container spacing={2} sx={styles.formContainer}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Typography sx={styles.label}>
                  Examples of Affinity Organizations include: Clinical
                  Translational Science Institutes and Awardees, Nonprofits and
                  Foundations, Universities, and more
                </Typography>

                {/* Add your content here */}
                <Box
                  sx={{
                    marginTop: "50px",
                  }}
                >
                  {tempData.map((item) => (
                    <Box
                      key={item.id}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        padding: "10px 0",
                      }}
                    >
                      <Typography sx={styles.itemID}>{item.id}.</Typography>
                      <Typography sx={styles.itemTitle}>
                        {item.title}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Grid>

              {/* Add more content here */}
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    marginTop: {
                      xl: "30px",
                      lg: "30px",
                      md: "30px",
                      sm: "10px",
                      xs: "10px",
                    },
                  }}
                >
                  <img src={iPhoneImg} alt="iPhone" />
                </Box>
              </Grid>
            </Grid>
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
};
const styles = {
  container: {
    marginTop: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  tabs: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    maxWidth: "100%",
    width: {
      xl: "1100px",
      lg: "1100px",
      md: "900px",
      sm: "500px",
      xs: "500px",
    },
  },
  tabBox1: {
    flex: 1,
    height: {
      xl: "80px",
      lg: "80px",
      md: "70px",
      sm: "60px",
      xs: "60px",
    },
    background: "#fff",
    color: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    borderRadius: "12px 12px 0 0",
  },
  tabBox2: {
    flex: 1,
    height: { xl: "65px", lg: "65px", md: "55px", sm: "50px", xs: "50px" },
    color: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    backgroundColor: "#BFD9E5",
    borderRadius: "12px 12px 0 0",
  },
  tabBox3: {
    flex: 1,
    height: { xl: "50px", lg: "50px", md: "45px", sm: "40px", xs: "40px" },
    background: "#A3ABB2",
    color: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    borderRadius: "12px 12px 0 0",
  },
  selectedTab1: {
    fontFamily: "Inter",
    fontWeight: 900,
    fontSize: { xl: "26px", lg: "26px", md: "18px", sm: "14px", xs: "14px" },
    color: "#000000 !important",
    textAlign: "center",
    margin: "0 20px",
    borderBottom: {
      xl: "7px solid black",
      lg: "7px solid black",
      md: "7px solid black",
      sm: "3px solid black",
      xs: "3px solid black",
    },
  },
  selectedTab2: {
    fontFamily: "Inter",
    fontWeight: 900,
    fontSize: { xl: "18px", lg: "18px", md: "16px", sm: "13px", xs: "13px" },
    color: "#000000 !important",
    textAlign: "center",
  },
  selectedTab3: {
    fontFamily: "Inter",
    fontWeight: 900,
    fontSize: { xl: "17px", lg: "17px", md: "16px", sm: "13px", xs: "13px" },
    color: "#000000 !important",
    textAlign: "center",
  },
  tabPanel: {
    backgroundColor: "#F9FCFF",
  },
  formBox: {
    width: {
      xl: "1100px",
      lg: "1100px",
      md: "900px",
      sm: "500px",
      xs: "500px",
    },
    maxWidth: { xl: "100%", lg: "100%", md: "100%", sm: "100%", xs: "100%" },
    height: "auto",
    borderBottomLeftRadius: "12px",
    borderBottomRightRadius: "12px",
    overflow: "hidden",
    boxSizing: "border-box",
  },
  formContainer: {
    width: "100%",
    boxSizing: "border-box",
    marginTop: "10px",
  },
  textField: {
    width: "100%",
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
  label: {
    fontFamily: "Public Sans",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "15px",
    marginBottom: "8px",
    color: "#010101",
    fontStyle: "italic",
  },
  itemID: {
    fontFamily: "Public Sans",
    fontWeight: 600,
    fontSize: {
      xl: "50px",
      lg: "50px",
      md: "40px",
      sm: "30px",
      xs: "30px",
    },
    lineHeight: "55px",
    color: "#2E86AB",
    marginRight: "20px",
  },
  itemTitle: {
    fontFamily: "Public Sans",
    fontWeight: 600,
    fontSize: {
      xl: "20px",
      lg: "20px",
      md: "16px",
      sm: "15px",
      xs: "15px",
    },
    lineHeight: "21px",
    color: "#000",
  },
};

export default ProductTab;
