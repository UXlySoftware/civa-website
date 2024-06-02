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
        <Box sx={styles.topRightRectangle} />
        <Box sx={styles.bottomLeftRectangle}>
          <Box sx={styles.textBox}>
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
    px: 2,
    minHeight: {
      xl: "100vh",
      lg: "100vh",
      md: "60vh",
      sm: "60vh",
      xs: "100vh",
    },
    backgroundColor: "#374957",
    paddingTop: "6px",
    paddingBottom: { xl: 30, lg: 45, md: 1.2, sm: 1, xs: 0 },
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
    marginTop: 9,
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
    textAlign: "center",
    minHeight: "100%", // Ensure it expands with content
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
    top: { xl: "-30px", lg: "-47px", md: "0px" },
    right: { xl: "293px", lg: "55px", md: "100px", sm: "45px", xs: "-8px" },
    width: { xl: "613px", lg: "613px", md: "269px", sm: "269px", xs: "226px" },
    height: { xl: "318px", lg: "318px", md: "185px", sm: "185px", xs: "185px" },
    backgroundColor: "#2E86AB",
  },
  bottomLeftRectangle: {
    position: "absolute",
    top: { xl: "190px", lg: "350px", md: "230px", sm: "130px", xs: "205px" },
    right: {
      xl: "595px",
      lg: "350px",
      md: "240px",
      sm: "140px",
      xs: "-5px",
    },
    width: {
      xl: "1003px",
      lg: "1003px",
      md: "662px",
      sm: "602px",
      xs: "370px",
    },
    height: { xl: "133px", lg: "133px", md: "150px", sm: "100px", xs: "40%" },
    paddingTop: {
      xl: "386px",
      lg: "220px",
      md: "150px",
      sm: "205px",
      xs: "76px",
    },
    backgroundColor: "#FFC000",
  },
  textBox: {
    paddingLeft: { xl: "48px", sm: "38px", xs: "22px" },
    paddingBottom: { sm: "56px", xs: "25px" },
    backgroundColor: "#FFC000",
  },
  text: {
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: { xl: "32px", lg: "32px", md: "20px", sm: "20px", xs: "20px" },
    textAlign: "left",
    lineHeight: { xl: "41px", lg: "41px", xs: "28px" },
    color: "#000",
    marginTop: "20px",
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
};

export default MissionAndBios;
