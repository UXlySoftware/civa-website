import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import venDiagram from "../assets/venDiagram.png";

const ThirdSection = () => {
  return (
    <Container
      sx={{
        ...styles.container,
        paddingLeft: "0 !important",
      }}
    >
      <Box sx={styles.textContainer}>
        <Box sx={styles.sideBorder} />
        <Typography variant="h4" sx={styles.heading}>
          CONNECT. COLLABORATE. COMMUNITY.
        </Typography>
        <Typography variant="h6" sx={styles.subHeading}>
          CIVA brings government, organizations, and communities together to
          create meaningful and measurable programs.
        </Typography>
        <Button variant="contained" sx={styles.button}>
          Get Demo
        </Button>
      </Box>
      <Box sx={styles.vennContainer}>
        <img
          src={venDiagram}
          alt="CIVA Venn Diagram"
          style={styles.vennImage}
        />
      </Box>
    </Container>
  );
};

const styles = {
  container: {
    textAlign: "center",
    display: "flex",
    justfiyContent: "center",
    justifyItems: "center",
    flexDirection: { xs: "column-reverse", md: "row" },
    justifyContent: "space-between",
    alignItems: "center",
    // gap: 15,
    // marginTop: { xl: 19, xs: 7 },
    marginBottom: 5,
    // marginLeft: { xl: 51, lg: 20 },
  },
  textContainer: {
    justifyContent: "center",
    textAlign: "left",
    maxWidth: { xl: "50%", lg: "50%", md: "50%", sm: "75%", xs: "100%" },
    // width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: { sm: "34px", xs: "22px" },
    marginRight: { xl: 10 },
    // maxWidth: { xs: "100%", md: "50%" },
    paddingLeft: { xl: 0, lg: 0, md: 5, xs: 5 },
  },
  sideBorder: {
    "&::before": {
      content: '""',
      position: "absolute",
      left: {
        xl: "230px",
        lg: "0px",
        md: "0px",
        sm: "0px",
        xs: "0px",
      },
      height: {
        xl: "418px",
        lg: "418px",
        md: "418px",
        sm: "360px",
        xs: "355px",
      },
      marginTop: { xl: 4, lg: 4, md: 3, sm: 2, xs: 2 },
      width: "16px",
      backgroundColor: "black",
    },
  },
  heading: {
    fontFamily: "Public Sans",
    fontWeight: "900",
    fontSize: { xs: "36px", sm: "52px" },
    lineHeight: { xs: "42px", sm: "58px" },
    marginBottom: 2,
  },
  subHeading: {
    color: "#010101",
    fontWeight: 700,
    fontSize: { sm: "24px", xs: "18px" },
    lineHeight: "29px",
    fontFamily: "Inter",
  },
  button: {
    width: { md: "100%", xs: "95%" },
    padding: { xs: "8px 16px", sm: "10px 20px", md: "12px 24px" },
    fontFamily: "Inter",
    fontSize: {
      xs: "clamp(12px, 3vw, 14px)",
      sm: "clamp(14px, 3vw, 16px)",
      md: "clamp(16px, 3vw, 18px)",
      lg: "clamp(18px, 3vw, 22px)",
    },
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
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: { xs: 4, md: 0 },
    paddingLeft: { xl: 0, lg: 0, md: 5, xs: 5 },
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
    maxWidth: "100%",
    height: "auto",
    width: "100%",
  },
};

export default ThirdSection;
