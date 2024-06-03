import React, { SyntheticEvent, useState } from "react";
import { Box, Typography, Grid, Tab, Tabs } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import { iPhoneImg } from "../../assets/product";

const firstTabList = [
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

const secondTabList = [
  {
    id: 1,
    title: "Associations join CIVA.",
  },
  {
    id: 2,
    title: "Discover and link to relevant government resources.",
  },
  {
    id: 3,
    title:
      "Find and partner with affinity organizations based on shared interests.",
  },
  {
    id: 4,
    title:
      "Communicate with members: get feedback and suggestions, answer questions, etc.",
  },
  {
    id: 5,
    title: "Advocate directly with relevant government officials.",
  },
  {
    id: 6,
    title:
      "Community associations gain a stronger voice, influence, and metrics to ensure effective, sustainable programs.",
  },
];

const thirdTabList = [
  {
    id: 1,
    title: "Individuals download the CIVA mobile app.",
  },
  {
    id: 2,
    title:
      "Discover community associations and organizations based on interests.",
  },
  {
    id: 3,
    title: "Discover appropriate government-funded programs in the community.",
  },
  {
    id: 4,
    title:
      "Discover, communicate and advocate with relevant elected officials.",
  },
  {
    id: 5,
    title:
      "Provide feedback, ask questions, and suggest improvements to organizations and community associations.",
  },
  {
    id: 6,
    title:
      "Communicate and collaborate with other like-minded citizens — build profile and become civic influencer.",
  },
];
const ProductTab = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={styles.container}>
      <Tabs
        value={value}
        onChange={handleChange}
        sx={styles.tabs}
        variant="fullWidth"
      >
        <Tab
          label={
            <Typography
              sx={value === "1" ? styles.selectedTabText : styles.tabText}
            >
              AFFINITY <br /> ORGANIZATIONS
            </Typography>
          }
          value="1"
          sx={{
            ...styles.tab,
            ...styles.tab1,
            ...(value === "1" && styles.selectedTab),
          }}
        />
        <Tab
          label={
            <Typography
              sx={value === "2" ? styles.selectedTabText : styles.tabText}
            >
              COMMUNITY
              <br />
              ASSOCIATIONS
            </Typography>
          }
          value="2"
          sx={{
            ...styles.tab,
            ...styles.tab2,
            ...(value === "2" && styles.selectedTab),
          }}
        />
        <Tab
          // label="INDIVIDUALS"
          label={
            <Typography
              sx={value === "3" ? styles.selectedTabText : styles.tabText}
            >
              INDIVIDUALS
            </Typography>
          }
          value="3"
          sx={{
            ...styles.tab,
            ...styles.tab3,
            ...(value === "3" && styles.selectedTab),
          }}
        />
      </Tabs>
      <TabContext value={value}>
        <Box sx={styles.formBox}>
          <TabPanel value="1" sx={styles.tabPanel}>
            <Grid container spacing={2} sx={styles.formContainer}>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Typography sx={styles.label}>
                  Examples of Affinity Organizations include: Clinical
                  Translational Science Institutes and Awardees, Nonprofits and
                  Foundations, Universities, and more
                </Typography>
                <Box
                  sx={{
                    marginTop: "50px",
                  }}
                >
                  {firstTabList.map((item) => (
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
              <Grid item xs={12} sm={6} md={6} lg={6}>
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
          <TabPanel value="2" sx={styles.tabPanel}>
            <Grid container spacing={2} sx={styles.formContainer}>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Typography sx={styles.label}>
                  Examples of Community Associations include: Neighborhood
                  Associations/HOAS, Business/
                  <br />
                  Special Improvement Districts, Chambers of Commerce, Historic
                  Preservation Commissions, Environmental Advisory Boards,
                  Community Development Corporations, and more
                </Typography>
                <Box sx={{ marginTop: "50px" }}>
                  {secondTabList.map((item) => (
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
              <Grid item xs={12} sm={6} md={6} lg={6}>
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
          <TabPanel value="3" sx={styles.tabPanel}>
            <Grid container spacing={2} sx={styles.formContainer}>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Typography sx={styles.label}>
                  For citizens who want to get involved and make a difference
                </Typography>
                <Box sx={{ marginTop: "50px" }}>
                  {thirdTabList.map((item) => (
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
              <Grid item xs={12} sm={6} md={6} lg={6}>
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
        </Box>
      </TabContext>
    </Box>
  );
};

const styles = {
  tabText: {
    textAlign: "center",
    fontFamily: "Inter",
    fontWeight: 900,
    fontSize: { xl: "24px", lg: "24px", md: "24px", sm: "24px", xs: "12px" },
  },
  container: {
    marginTop: {
      xl: "100px",
      lg: "100px",
      md: "90px",
      sm: "90px",
      xs: "70px",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: { xl: 45, lg: 45, md: 25, sm: 20, xs: 25 },
  },
  selectedTabText: {
    textAlign: "center",
    fontFamily: "Inter",
    fontWeight: 900,
    fontSize: { xl: "24px", lg: "24px", md: "24px", sm: "24px", xs: "12px" },
    position: "relative",
    width: { xl: "80%", lg: "80%", md: "80%", sm: "80%" },
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: -10,
      left: 0,
      right: 0,
      height: "7px",
      backgroundColor: "black",
    },
  },
  tabs: {
    display: "flex",
    alignItems: "flex-end",
    width: {
      xl: "1296px",
      lg: "1296px",
      md: "976px",
      sm: "786px",
      xs: "380px",
    },
    maxWidth: { xl: "100%", lg: "100%", md: "100%", sm: "100%", xs: "100%" },
    ".MuiTabs-flexContainer": {
      alignItems: "end",
    },
    ".MuiTabs-indicator": {
      display: "none",
    },
  },
  formBox: {
    width: {
      xl: "1296px",
      lg: "1296px",
      md: "976px",
      sm: "786px",
      xs: "380px",
    },
    maxWidth: { xl: "100%", lg: "100%", md: "100%", sm: "100%", xs: "100%" },
    height: "auto",
    borderBottomLeftRadius: "12px",
    borderBottomRightRadius: "12px",
    overflow: "hidden",
    boxSizing: "border-box",
  },
  formContainer: {
    boxSizing: "border-box",
    marginTop: "10px",
    padding: { xl: "20px", lg: "20px", md: "20px", sm: "0px", xs: "4px" },
  },
  tab: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "1",
    height: { xl: "80px", lg: "80px", md: "70px", sm: "60px", xs: "60px" },
    color: "black",
    display: "flex",
    borderRadius: "12px 12px 0 0",
    fontFamily: "Inter",
    fontWeight: 900,
    fontSize: { xl: "24px", lg: "24px", md: "24px", sm: "26px", xs: "14px" },
  },
  tab1: {
    height: { xl: "110px", lg: "110px", md: "94px", sm: "94px", xs: "74px" },
    background: "#FFE28A",
  },
  tab2: {
    height: { xl: "94px", lg: "94px", md: "80px", sm: "94px", xs: "64px" },
    background: "#BFD9E5",
  },
  tab3: {
    height: { xl: "64px", lg: "64px", md: "68px", sm: "74px", xs: "54px" },
    background: "#A3ABB2",
  },
  selectedTab: {
    height: { xl: "115px", lg: "115px", md: "115px", sm: "115px", xs: "74px" },
    background: "#FFFFFF !important",
    borderBottom: "none",
    minHeight: "94px",
    display: "flex",
    color: "#000 !important",
  },
  tabPanel: {
    backgroundColor: "#F9FCFF",
    paddingTop: -10,
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
    width: { xl: "782px", lg: "762px", md: "762px", xs: "282px" },
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: { xl: "16px", lg: "16px", md: "16px", xs: "12px" },
    lineHeight: "20px",
    marginBottom: "8px",
    color: "#010101",
    fontStyle: "italic",
  },
  itemID: {
    fontFamily: "Public Sans",
    width: { xl: "60px", lg: "60px", md: "30px", sm: "40px", xs: "30px" },
    fontWeight: 700,
    fontSize: {
      xl: "64px",
      lg: "64px",
      md: "40px",
      sm: "38px",
      xs: "38px",
    },
    lineHeight: { xl: "75px", lg: "75px", md: "75px", xs: "15px" },
    color: "#2E86AB",
    marginRight: "20px",
  },
  itemTitle: {
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: {
      xl: "20px",
      lg: "20px",
      md: "16px",
      sm: "15px",
      xs: "12px",
    },
    lineHeight: { xl: "21px", lg: "21px", md: "21px", sm: "26px", xs: "21px" },
    color: "#000",
  },
};

export default ProductTab;
