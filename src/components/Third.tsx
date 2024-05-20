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
      <Box sx={styles.vennContainer}>
        <img
          src={venDiagram}
          alt="CIVA Venn Diagram"
          style={styles.vennImage}
        />
      </Box>
      <Box sx={styles.sideBorder} />
      <Box sx={styles.textContainer}>
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
    </Container>
  );
};

const styles = {
  container: {
    textAlign: "center",
    display: "flex",
    justfiyContent: "center",
    justifyItems: "center",
    flexDirection: { xs: "column", md: "row-reverse" },
    justifyContent: "space-between",
    alignItems: "center",
    gap: { xs: 12 },

    marginTop: { xl: 19, xs: 7 },
    marginBottom: 4,
    marginLeft: { xl: 51, lg: 20 },
  },
  textContainer: {
    textAlign: "left",
    // width: "500px",
    display: "flex",
    flexDirection: "column",
    gap: { sm: "34px", xs: "22px" },
    maxWidth: { xs: "100%", md: "45%" },
    paddingLeft: { lg: 0, md: 5, xs: 5 },
  },
  sideBorder: {
    "&::before": {
      content: '""',
      position: "absolute",
      left: {
        xl: "168px",
        lg: "0px",
        md: "0px",
        sm: "0px",
        xs: "0px",
      },
      "@media (max-width: 2900px)": {
        height: "448px",
        bottom: "-113%",
      },
      "@media (max-width: 1900px)": {
        height: "478px",
        bottom: "-125%",
      },
      "@media (max-width: 1024px)": {
        height: "438px",
        bottom: "-32%",
      },
      "@media (max-width: 900px)": {
        height: "388px",
        bottom: "-80%",
      },
      "@media (max-width: 820px)": {
        height: "328px",
        bottom: "-60%",
      },
      "@media (max-width: 430px)": {
        height: "315px",
        bottom: "-83%",
      },
      "@media (max-width: 375px)": {
        height: "345px",
        bottom: "-123%",
      },
      width: "16px",
      backgroundColor: "#010101",
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
  },
  vennContainer: {
    position: "relative",
    // width: { xs: "10%", md: "40%" },
    // height: 350,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // marginTop: { xs: 4, md: 0 },
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
    maxWidth: "100%", // Ensure the image doesn't exceed the container's width
    height: "auto", // Maintain aspect ratio
    width: "100%", // Make the image responsive
  },
};

export default ThirdSection;
