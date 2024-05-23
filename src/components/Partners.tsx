import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import ctsiLogo from "../assets/ctsiLogo.png";
import mhirLogo from "../assets/mhirLogo.png";
import mtiLogo from "../assets/mtiLogo.png";
import resurgensLogo from "../assets/resurgensLogo.png";
import urbanLeagueLogo from "../assets/urbanLeague.png";
import atlantaLogo from "../assets/atlantaLogo.png";
import JoinCommunity from "./JoinCommunity";

const PartnersSection = () => (
  <Box sx={styles.partnersSection}>
    <Typography variant="h4" sx={styles.partnersHeading}>
      PARTNERS
    </Typography>
    <Box sx={styles.divider} />
    <Grid container sx={styles.logosContainer} rowSpacing={1}>
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          margin: { xl: "0px 90px", lg: "0px 90px", md: "0px 30px" },
          maxWidth: "100%",
        }}
      >
        <Box sx={styles.logoWrapper}>
          <img src={ctsiLogo} alt="CTSI" style={styles.logo} />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          margin: { xl: "0px 0px", lg: "0px 0px", md: "0px 10px" },
        }}
      >
        <Box sx={styles.logoWrapper}>
          <img src={mhirLogo} alt="MaineHealth" style={styles.logo} />
        </Box>
      </Grid>
      <Grid
        item
        xs={6}
        md={3}
        sx={{
          margin: {
            xl: "0px -70px",
            lg: "0px -70px",
            md: "0px -25px 0px -50px",
            xs: "0px 0px",
          },
          paddingRight: { xs: "30px", md: 0 },
        }}
      >
        <Box sx={styles.logoWrapper}>
          <img
            src={resurgensLogo}
            alt="Institute for Research"
            style={styles.logo}
          />
        </Box>
      </Grid>
      <Grid
        item
        xs={6}
        md={3}
        sx={{ marginRight: { xl: "0px", lg: "-55px", md: "0px" } }}
      >
        <Box sx={styles.logoWrapper}>
          <img src={mtiLogo} alt="MTI" style={styles.logo} />
        </Box>
      </Grid>
      <Grid
        item
        xs={6}
        md={3}
        sx={{
          marginRight: { xl: "0px", lg: "0px", md: "0px" },
          paddingRight: { xs: "30px", md: 0 },
        }}
      >
        <Box sx={styles.logoWrapper}>
          <img src={atlantaLogo} alt="Atlanta" style={styles.logo} />
        </Box>
      </Grid>
      <Grid
        item
        xs={6}
        md={3}
        sx={{
          marginRight: { xl: "-55px", lg: "-55px", md: "-40px" },
        }}
      >
        <Box sx={styles.logoWrapper}>
          <img src={urbanLeagueLogo} alt="urbanLeague" style={styles.logo} />
        </Box>
      </Grid>
    </Grid>
    <JoinCommunity />
  </Box>
);

const styles = {
  partnersSection: {
    width: "100%",
    textAlign: "center",
    backgroundColor: "#fff",
  },
  partnersHeading: {
    fontFamily: "Public Sans",
    fontWeight: 900,
    fontSize: { xl: "52px", lg: "52px", md: "42px" },
    lineHeight: { xl: "58px", lg: "58px", md: "46px" },
    marginBottom: "16px",
  },
  divider: {
    width: { xl: "26%", lg: "26%", md: "35%", xs: "90%" },
    height: "16px",
    backgroundColor: "#FFC000",
    margin: {
      xl: "0 auto 79px auto",
      lg: "0 auto 79px auto",
      md: "0 auto 45px auto",
      sm: "0 auto 0px auto",
      xs: "0 auto 0px auto",
    },
  },
  logosContainer: {
    width: { xl: "60%", lg: "100%", md: "90%", xs: "90%" },
    padding: { sm: "0px", xs: "10px" },
    display: "flex",
    flexWrap: "wrap",
    margin: "0 auto 0px auto",
    justifyContent: "center",
    alignItems: "center",
  },
  logoWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "100%",
  },
  logo: {
    maxWidth: "100%",
    margin: "15px 0px",
  },
};

export default PartnersSection;
