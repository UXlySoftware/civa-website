import React from "react";
import { Box, Container, Typography } from "@mui/material";
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
          CIVA CONNECTS
        </Typography>
        <Typography variant="h1" sx={styles.subHeading}>
          Our dynamic, integrated platform brings <br />
          stakeholders together to create <br /> meaningful programs with
          measurable <br /> impact.
        </Typography>
      </Box>
      <Box sx={styles.vennContainer}>
        {/* <img
          src={venDiagram}
          alt="CIVA Venn Diagram"
          style={styles.vennImage}
        /> */}
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
    flexDirection: { xs: "column-reverse", sm: "row", md: "row" },
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: { xs: 30, sm: 40   },
  },
  textContainer: {

    justifyContent: "center",
    textAlign: "left",
    maxWidth: { xl: "40%", lg: "50%", md: "50%", sm: "50%", xs: "356px" },
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: { xl: "32px", lg: "32px", md: "22px", sm: "22px", xs: "22px" },

    marginTop: {
      xl: "-20px",
      lg: "-20px",
      md: "-20px",
      sm: "20px",
      xs: "80px",
    },
    marginLeft: { xl: "3%" },

    paddingLeft: { xl: 0, lg: 0, md: 5, sm: 7, xs: 5 },
  },
  sideBorder: {
    "&::before": {
      content: '""',
      position: "absolute",
      left: {
        xl: "12%",
        lg: "0px",
        md: "0px",
        sm: "0px",
        xs: "0px",
      },
      height: {
        xl: "298px",
        lg: "298px",
        md: "298px",
        sm: "268px",
        xs: "233px",
      },
      marginTop: { xl: 0, lg: 0, md: 0, sm: 0, xs: 0 },
      width: "16px",
      backgroundColor: "black",
    },
  },
  heading: {
    fontFamily: "Public Sans",
    fontWeight: "900",
    fontSize: { xs: "36px", sm: "44px", md: "52px" },
    lineHeight: { xs: "42px", sm: "58px" },
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
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: { xs: 4, sm: 0, md: 0 },
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
