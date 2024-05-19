import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import phoneImage from "../assets/phone.png"; // Update the path accordingly

const HowItWorks = () => {
  return (
    <Container sx={styles.container}>
      {/* Text */}
      <Typography variant="h4" sx={styles.heading}>
        HOW IT WORKS
      </Typography>
      <Box sx={styles.divider} />
      <Box sx={styles.contentBox}>
        <Box sx={styles.listBox}>
          <Box sx={styles.listItem}>
            <Typography variant="h5" sx={styles.listNumber}>
              1.
            </Typography>
            <Typography variant="body1" sx={styles.listText}>
              Organization and community members join CIVA.
            </Typography>
          </Box>
          <Box sx={styles.listItem}>
            <Typography variant="h5" sx={styles.listNumber}>
              2.
            </Typography>
            <Typography variant="body1" sx={styles.listText}>
              Organization and community members discover government resources.
            </Typography>
          </Box>
          <Box sx={styles.listItem}>
            <Typography variant="h5" sx={styles.listNumber}>
              3.
            </Typography>
            <Typography variant="body1" sx={styles.listText}>
              Organizations and communities find each other.
            </Typography>
          </Box>
          <Box sx={styles.listItem}>
            <Typography variant="h5" sx={styles.listNumber}>
              4.
            </Typography>
            <Typography variant="body1" sx={styles.listText}>
              Organizations and community members communicate and collaborate
              through CIVA.
            </Typography>
          </Box>
          <Box sx={styles.listItem}>
            <Typography variant="h5" sx={styles.listNumber}>
              5.
            </Typography>
            <Typography variant="body1" sx={styles.listText}>
              Organization receives analytics, metrics, and insights based on
              community feedback to make programs effective.
            </Typography>
          </Box>
          <Box sx={styles.listItem}>
            <Typography variant="h5" sx={styles.listNumber}>
              6.
            </Typography>
            <Typography variant="body1" sx={styles.listText}>
              Community members have a stronger voice and greater influence.
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ ...styles.button, display: { xs: "none", md: "flex" } }}
          >
            Learn More
          </Button>
          {/* Image */}
        </Box>
        <Box sx={styles.imageBox}>
          <img
            src={phoneImage}
            alt="Phone showing CIVA app"
            style={styles.image}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{
              ...styles.button,
              display: { xs: "flex", md: "none" },
              position: "relative",
              bottom: "50px",
              width: "100%",
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

const styles = {
  container: {
    padding: "142px 0px",
    minWidth: "100%",
    paddingLeft: "0px !important",
  },
  heading: {
    fontFamily: "Public Sans",
    fontWeight: "900",
    fontSize: { xl: "52px", lg: "52px", md: "42px", sm: "36px", xs: "36px" },
    lineHeight: { xl: "58px", lg: "58px", md: "46px", sm: "42px", xs: "42px" },
    marginBottom: "12px",
    marginLeft: { xl: "300px", lg: "70px", md: "26px", sm: "0px" },
    textAlign: {
      xl: "left",
      lg: "left",
      md: "left",
      sm: "center",
      xs: "center",
    },
  },
  divider: {
    margin: { xl: "0px", lg: "0px", md: "0px", sm: "0px 25px", xs: "0px 25px" },
    maxWidth: { xl: "704px", lg: "475px", md: "360px", sm: "380px" },
    background: "#FFC000",
    height: "16px",
  },
  contentBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: { xs: "column", md: "row" },
  },
  listBox: {
    width: { xs: "90%", md: "40%", lg: "35%", xl: "27%" },
    padding: "0 20px",
    marginLeft: { xl: 35, lg: 7 },
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "37px",
  },
  listNumber: {
    fontWeight: "700",
    color: "#2E86AB",
    marginRight: "20px",
    fontSize: { xl: "64px", lg: "64px", md: "52px", sm: "52px", xs: "52px" },
    lineHeight: { xl: "75px", lg: "75px", md: "61px", sm: "61px" },
  },
  listText: {
    fontFamily: "Inter",
    fontSize: { xl: "20px", lg: "20px", md: "18px", sm: "18px", xs: "18px" },
    lineHeight: "24.2px",
    fontWeight: 700,
  },
  button: {
    fontFamily: "Inter",
    fontWeight: 700,
    borderRadius: "12px",
    fontSize: "18px",
    backgroundColor: "#FFC000",
    color: "#000",
    padding: "24px 12px",
    width: "170px",
    height: "51px",
    textTransform: "none",
  },
  imageBox: {
    width: { xs: "90%", md: "40%" },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    flexDirection: { xs: "column", md: "column-reverse" },
  },
  image: {
    maxWidth: "100%",
    height: "auto",
  },
};

export default HowItWorks;
