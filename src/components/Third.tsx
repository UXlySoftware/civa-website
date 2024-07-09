import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import venDiagram from "../assets/venDiagram.png";

const ThirdSection = () => {
  return (
    <Grid container sx={styles.container}
    >
      <Grid item>
        <Box sx={styles.sideBorder} />
        <Typography variant="h4" sx={styles.heading}>
          CIVA CONNECTS
        </Typography>
        <Typography variant="h1" sx={styles.subHeading}>
          Our dynamic, integrated platform brings <br />
          stakeholders together to create <br /> meaningful programs with
          measurable <br /> impact.
        </Typography>
      </Grid>
      <Grid item sx={styles.vennContainer}>
        <img
          src={venDiagram}
          alt="CIVA Venn Diagram"
          style={styles.vennImage}
        />
      
      </Grid >
    </Grid>
  );
}; 

const styles = {
  container: {
    maxWidth: "1440px",
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 10,
  },
  sideBorder: {
    position: "absolute",
    margin: {xl: -21, lg: -17.3, md: -6.9, sm: -4.7, xs: -3},
    height: {
      xl: "298px",
      lg: "298px",
      md: "298px",
      sm: "268px",
      xs: "233px",
    },
    marginTop: { xl: 5, lg: 5, md: 5, sm: 5, xs: 5 },
    width: "16px",
    backgroundColor: "black",
  },
  heading: {
    fontFamily: "Public Sans",
    fontWeight: "900",
    fontSize: { xs: "36px", sm: "44px", md: "52px" },
    lineHeight: { xs: "42px", sm: "58px" },
    paddingTop: 8,
    marginBottom: 5
  },
  subHeading: {
    color: "#010101",
    fontWeight: 700,
    fontSize: { md: "23px", sm: "20px", xs: "18px" },
    lineHeight: "29px",
    fontFamily: "Inter",
  },
  button: {
    width: { md: "70%", xs: "95%" },
    padding: { xs: "8px 16px", sm: "10px 20px", md: "12px 24px" },
    fontFamily: "Inter",
    fontSize: {
      xs: "18px",
      sm: "18px",
      md: "18px",
      lg: "22px",
      xl: "22px",
    },
    lineHeight: { xs: "22px", sm: "22px", md: "22px", lg: "27px", xl: "27px" },
    fontWeight: 700,
    borderRadius: "12px",
    textTransform: "none",
    backgroundColor: "#FFC000",
    color: "black",
    "&:hover": {
      backgroundColor: "#e8ae00",
    },
  },
  vennContainer: {
    display: {xs: "none", sm: "flex"},
    width: "40%"
  },
  circle: {
    position: "absolute",
    width: 140,
    height: 140,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 2,
  },
  vennText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },

  vennImage: {
    height: "auto",
    width: "100%",
  },
};

export default ThirdSection;
