import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import missionImage from "../../assets/missionImage.png";
import missionImageMobil from "../../assets/missionImageMobil.png";

const MissionAndBios = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={styles.missionAndBiosContainer}>
      <Box sx={styles.missionTitleBox}>
        <Typography variant="h4" sx={styles.missionTitle}>
          OUR MISSION{" "}
        </Typography>
      </Box>

      <Box sx={styles.missionContentBox}>
        <Box sx={styles.relativeContainer}>
          <Box sx={styles.topRightRectangle} />
          <Box sx={styles.bottomLeftRectangle}>
            <Typography variant="body1" sx={styles.text}>
              To connect and empower organizations, communities, and individuals
              to take informed action, access funding, and{" "}
              <Typography sx={styles.spanBold}>
                create sustainable social impact.
              </Typography>
            </Typography>
          </Box>
        </Box>
        <Box
          component="img"
          src={isMobile ? missionImageMobil : missionImage}
          alt="Mission"
          sx={styles.missionImage}
        />
      </Box>
    </Box>
  );
};

const styles = {
  missionAndBiosContainer: {
    position: "relative",
    mt: { xl: 10, lg: 10, md: 7, sm: 13, xs: 75 },
    // px: 2,
    minHeight: {
      xl: "100vh",
      lg: "100vh",
      md: "60vh",
      sm: "60vh",
      xs: "100vh",
    },
    backgroundColor: "#374957",
    paddingTop: "6px",
    paddingBottom: { xl: 30, lg: 45, md: 30, sm: 30, xs: 0 },
    border: "1px solid #374957",
  },
  missionTitleBox: {
    borderBottom: "16px solid #FFC000",
    width: {
      xl: "500px",
      lg: "500px",
      md: "500px",
      sm: "300px",
      xs: "300px",
    },
    margin: {
      xl: "0 auto 109px auto",
      lg: "0 auto 109px auto",
      md: "0 auto 49px auto",
      sm: "0 auto 45px auto",
      xs: "0 auto 45px auto",
    },
    textAlign: "center",
  },
  missionTitle: {
    marginTop: { xl: 9, lg: 9, md: 9, sm: 9, xs: 6 },
    fontFamily: "Public Sans",
    fontWeight: 900,
    fontSize: {
      xl: "52px",
      lg: "52px",
      md: "42px",
      sm: "28px",
      xs: "28px",
    },
    lineHeight: {
      xl: "58px",
      lg: "58px",
      md: "46px",
      sm: "36px",
      xs: "36px",
    },
    color: "#fff",
    marginBottom: 1,
  },
  missionContentBox: {
    position: "relative",
    width: "100%",
    maxWidth: {
      xl: "1209px",
      lg: "1209px",
      md: "736px",
      sm: "640px",
      xs: "340px",
    },
    margin: "0 auto",
    // position: "relative",
    textAlign: "center",
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  missionImage: {
    width: "100%",
    maxWidth: {
      xl: "1209px",
      lg: "1209px",
      md: "736px",
      sm: "640px",
      xs: "340px",
    },
    mt: "25px",
    zIndex: 2,
    position: "relative",
  },
  topRightRectangle: {
    position: "absolute",
    zIndex: 1,
    top: { xl: "-20px", lg: "-17px", md: "-5px", sm: "-5px" },
    right: { xl: "-40px", lg: "-40px", md: "-34px", sm: "-34px", xs: "-20px" },
    width: { xl: "613px", lg: "613px", md: "269px", sm: "269px", xs: "226px" },
    height: { xl: "318px", lg: "318px", md: "205px", sm: "190px", xs: "145px" },
    backgroundColor: "#2E86AB",
  },
  bottomLeftRectangle: {
    position: "absolute",
    top: { xl: "240px", lg: "240px", md: "150px", sm: "150px", xs: "225px" },
    right: {
      xl: "255px",
      lg: "240px",
      md: "150px",
      sm: "50px",
      xs: "-20px",
    },
    width: {
      xl: "1003px",
      lg: "1003px",
      md: "622px",
      sm: "622px",
      xs: "380px",
    },
    height: { xl: "200px", lg: "163px", md: "220px", sm: "180px", xs: "230px" },
    paddingTop: {
      xl: "386px",
      lg: "386px",
      md: "150px",
      sm: "150px",
      xs: "50px",
    },
    backgroundColor: "#FFC000",
  },

  text: {
    position: "absolute",
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: { xl: "32px", lg: "32px", md: "20px", sm: "20px", xs: "20px" },
    textAlign: "left",
    lineHeight: { xl: "41px", lg: "41px", xs: "28px" },
    color: "#000",
    marginTop: {
      xl: "-10px",
      lg: "-20px",
      md: "80px",
      sm: "40px",
      xs: "20px",
    },
    marginLeft: { xl: "50px", lg: "35px", md: "35px", sm: "35px", xs: "20px" },
  },
  spanBold: {
    fontFamily: "Public Sans",
    fontWeight: 900,
    fontSize: { xl: "32px", lg: "32px", md: "20px", sm: "20px", xs: "20px" },
    display: "inline",
  },
  divider: {
    width: { xl: "100%", lg: "100%", md: "100%", sm: "100%", xs: "100%" },
    maxWidth: "100%",
    height: "16px",
    backgroundColor: "#FFC000",
    marginTop: "-5px",
  },
  relativeContainer: {
    position: "relative",
    width: "100%",
    maxWidth: {
      xl: "1209px",
      lg: "1209px",
      md: "736px",
      sm: "640px",
      xs: "340px",
    },
  },
};

export default MissionAndBios;
