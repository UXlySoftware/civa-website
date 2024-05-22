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
        }}
      >
        <img src={ctsiLogo} alt="CTSI" style={styles.logo} />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ margin: { xl: "0px 0px", lg: "0px 0px", md: "0px 10px" } }}
      >
        <img src={mhirLogo} alt="MaineHealth" style={styles.logo} />
      </Grid>
      <Grid
        item
        xs={6}
        md={3}
        sx={{
          margin: {
            xl: "0px -70px",
            lg: "0px -70px",
            md: "0px 0px 0px -20px",
            xs: "0px 0px ",
          },
          paddingRight: { xs: "30px", md: 0 },
        }}
      >
        <img
          src={resurgensLogo}
          alt="Institute for Research"
          style={styles.logo}
        />
      </Grid>
      <Grid
        item
        xs={6}
        md={3}
        sx={{ marginRight: { xl: "0px", lg: "-55px", md: "30px" } }}
      >
        <img src={mtiLogo} alt="MTI" style={styles.logo} />
      </Grid>
      <Grid
        item
        xs={6}
        md={3}
        sx={{
          marginRight: { xl: "0px", lg: "0px", md: "30px" },
          paddingRight: { xs: "30px", md: 0 },
        }}
      >
        <img src={atlantaLogo} alt="Atlanta" style={styles.logo} />
      </Grid>
      <Grid
        item
        xs={6}
        md={3}
        sx={{ marginRight: { xl: "-55px", lg: "-55px", md: "-45px" } }}
      >
        <img
          src={urbanLeagueLogo}
          alt="urbanLeague"
          style={{ ...styles.logo, marginRight: "55px" }}
        />
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
    width: { xl: "20%", lg: "25%", md: "30%", xs: "90%" },
    height: "16px",
    backgroundColor: "#FFC000",
    margin: "0 auto 40px auto",
  },
  logosContainer: {
    width: { xl: "60%", lg: "100%", md: "70%", xs: "90%" },
    padding: { sm: "0px", xs: "10px" },
    display: "flex",
    flexWrap: "wrap",
    margin: "0 auto 0px auto",
    justifyContent: "center",
    alignItems: "center",
  },
  logoWrapper: {
    flexBasis: "60%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    maxWidth: "100%",
    margin: "15px 0px",
  },
};

export default PartnersSection;
