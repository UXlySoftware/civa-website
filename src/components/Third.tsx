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
    flexDirection: { xs: "column", md: "row-reverse" },
    justifyContent: "space-between",
    alignItems: "center",
    gap: { xs: 13 },
    marginTop: { xl: 19, xs: 5 },
    marginBottom: 4,
    marginLeft: { xl: 51, lg: 20 },
  },
  textContainer: {
    textAlign: "left",
    width: "500px",
    display: "flex",
    flexDirection: "column",
    gap: "32px",
    maxWidth: { xs: "100%", md: "45%" },
    paddingLeft: { lg: 0, md: 5, xs: 3 },
    "&::before": {
      content: '""',
      position: "absolute",
      left: {
        xl: "142px",
        lg: "0px",
        md: "-190px",
        sm: "-110px",
        xs: "-15px",
      },
      height: "435px",
      width: { xs: "12px", md: "18px" },
      backgroundColor: "#010101",
    },
  },
  heading: {
    fontFamily: "Public Sans",
    fontWeight: "900",
    fontSize: { xs: "46px", sm: "52px" },
    lineHeight: "58px",
    marginBottom: 2,
  },
  subHeading: {
    color: "#010101",
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "29px",
    marginBottom: 3,
  },
  button: {
    width: { md: "50%", xs: "100" },
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
    marginTop: { xs: 4, md: 0 },
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
