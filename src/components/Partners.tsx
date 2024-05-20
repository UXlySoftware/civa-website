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
          margin: "2px 10px",
        }}
      >
        <img src={ctsiLogo} alt="CTSI" style={styles.logo} />
      </Grid>
      <Grid item xs={12} md={6}>
        <img src={mhirLogo} alt="MaineHealth" style={styles.logo} />
      </Grid>
      <Grid item xs={6} md={3}>
        <img
          src={resurgensLogo}
          alt="Institute for Research"
          style={styles.logo}
        />
      </Grid>
      <Grid item xs={6} md={3}>
        <img src={mtiLogo} alt="MTI" style={styles.logo} />
      </Grid>
      <Grid item xs={6} md={3}>
        <img src={atlantaLogo} alt="Atlanta" style={styles.logo} />
      </Grid>
      <Grid item xs={6} md={3}>
        <img src={urbanLeagueLogo} alt="urbanLeague" style={styles.logo} />
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
    width: { xl: "20%", xs: "90%" },
    height: "16px",
    backgroundColor: "#FFC000",
    margin: "0 auto 40px auto",
  },
  logosContainer: {
    width: { xl: "50%", lg: "100%", md: "50%" },
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
    margin: "0px 0px",
  },
};

export default PartnersSection;
