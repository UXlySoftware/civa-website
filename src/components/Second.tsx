import React from "react";
import { Box, Container, Typography } from "@mui/material";

const SecondSection = () => {
  return (
    <Container sx={styles.container}>
      <Box sx={styles.circleContainer}>
        <Box sx={{ ...styles.circle, borderColor: "#FFC000", zIndex: 3 }}>
          <Box sx={{ ...styles.innerCircle, background: "#FFC000" }}>
            <Typography sx={styles.circleText}>
              COMMUNITY ASSOCIATION
            </Typography>
          </Box>
        </Box>
        <Box sx={{ ...styles.circle, borderColor: "#2887AC", zIndex: 2 }}>
          <Box sx={{ ...styles.innerCircle, background: "#2887AC" }}>
            <Typography sx={styles.circleText}>GOVERNMENT </Typography>
          </Box>
        </Box>
        <Box sx={{ ...styles.circle, borderColor: "#76848A", zIndex: 1 }}>
          <Box sx={{ ...styles.innerCircle, background: "#76848A" }}>
            <Typography sx={styles.circleText}>
              AFFINITY ORGANIZATION
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

const styles = {
  container: {
    display: { xs: "none", md: "block" },
    textAlign: "center",
    marginTop: 9,
    marginBottom: 4,
    marginLeft: { xl: 51, lg: 20 },
  },
  circleContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
  },
  circle: {
    width: { xl: 410, lg: 350, md: 279 },
    height: { xl: 410, lg: 350, md: 279 },
    borderRadius: "50%",
    border: "5px dashed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginLeft: { xl: -2, lg: -3, md: -4 },
    marginRight: -5,
  },
  circleText: {
    fontSize: { xl: 24, lg: 24, md: 16 },
    fontWeight: 900,
    textAlign: "center",
    lineHeight: { xl: "28px", lg: "28px", md: "19px" },
    color: "#fff",
    fontFamily: "Public Sans",
  },
  innerCircle: {
    width: { xl: 253, lg: 253, md: 173 },
    height: { xl: 253, lg: 253, md: 173 },
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginLeft: -20,
    marginRight: -20,
    zIndex: 3,
  },
  textContainer: {
    textAlign: "center",
    marginBottom: 4,
  },
  heading: {
    fontWeight: "bold",
    marginBottom: 2,
  },
  subHeading: {
    color: "#555",
    marginBottom: 3,
  },
  button: {
    backgroundColor: "#FFC000",
    color: "black",
    "&:hover": {
      backgroundColor: "#e6ac00",
    },
  },
};

export default SecondSection;
