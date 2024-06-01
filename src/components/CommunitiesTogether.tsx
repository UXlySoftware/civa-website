import React from "react";
import { Box, Typography } from "@mui/material";

const CommunitySection = () => {
  return (
    <Box sx={styles.container}>
      <Typography variant="h4" sx={styles.text}>
        CIVA BRINGS <br />
        COMMUNITIES TOGETHER
      </Typography>
      <Box sx={styles.underline} />
    </Box>
  );
};

const styles = {
  container: {
    marginTop: "-64px",
    backgroundColor: "#599DBC", // Match the blue background color
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: {
      xl: "50px 0",
      lg: "50px 0",
      md: "50px 0",
      sm: "40px 0",
      xs: "40px 3px",
    },
  },
  text: {
    fontFamily: "Public Sans",
    fontWeight: 900,
    color: "#FFFFFF", // White text color
    textAlign: "center",
    fontSize: {
      xl: "52px",
      lg: "52px",
      md: "42px",
      sm: "42px",
      xs: "26px",
    },
  },
  underline: {
    width: { xl: "700px", lg: "700px", md: "580px", sm: "580px", xs: "350px" },
    height: "16px",
    backgroundColor: "#FFC000", // Yellow underline
    marginTop: "10px",
  },
};

export default CommunitySection;
