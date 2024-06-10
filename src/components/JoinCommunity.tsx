import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

const JoinCommunity = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <Box sx={styles.joinCommunitySection}>
      <Typography variant="h4" sx={styles.joinHeading}>
        Join the CIVA Community.
      </Typography>
      <Typography variant="body1" sx={styles.joinText}>
        Transform your organization or community with CIVA’s data-driven
        engagement platform. Schedule a demo today.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={styles.demoButton}
        onClick={handleClick}
      >
        Get a Demo
      </Button>
    </Box>
  );
};

const styles = {
  joinCommunitySection: {
    width: {
      xl: "70%",
      lg: "90%",
      md: "785px",
      sm: "700px",
      xs: "375px",
    },
    maxWidth: "100%",
    top: { xl: "104px", lg: "104px", md: "78px", sm: "40px", xs: "49px" },
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: { xl: "408px", lg: "408px", md: "247px", sm: "300px", xs: "auto" },
    margin: "0 auto -140px auto",
    backgroundColor: "#FFC000",
    textAlign: "center",
    padding: { sm: 0, xs: "30px 0px" },
    marginTop: {
      xl: "-270px",
      lg: "-268px",
      md: "-107px",
      sm: "-20px",
      xs: "-132px",
    },
  },
  joinHeading: {
    fontFamily: "Public Sans",
    fontWeight: 900,
    lineHeight: { xl: "73px", lg: "73px", md: "50px", sm: "50px", xs: "45px" },
    fontSize: { xl: "62px", lg: "62px", md: "42px", sm: "42px" },
    marginBottom: { xl: "24px", lg: "24px", md: "15px", sm: "15px" },
  },
  joinText: {
    fontFamily: "Inter",
    fontWeight: 400,
    padding: {
      xl: "0px 250px",
      lg: "0px 250px",
      md: "0px 140px",
      sm: "0px 120px",
      xs: "0px 22px",
    },
    fontSize: { xl: "24px", lg: "24px", md: "16px", sm: "16px", xs: "16px" },
    lineHeight: { xl: "30px", lg: "30px", md: "30px", sm: "30px", xs: "20px" },
    marginBottom: {
      xl: "36px",
      lg: "36px",
      md: "22px",
      sm: "20px",
      xs: "20px",
    },
  },
  demoButton: {
    backgroundColor: "#000",
    color: "#fff",
    padding: "10px 20px",
    display: "flex",
    width: { xl: "155px", lg: "155px", md: "155px", sm: "155px", xs: "327px" },
    height: { xl: "51px" },
    fontWeight: 700,
    fontSize: "18px",
    borderRadius: "12px",

    textTransform: "none",
    lineHeight: "22px",
    "&:hover": {
      backgroundColor: "#333",
    },
  },
};

export default JoinCommunity;
