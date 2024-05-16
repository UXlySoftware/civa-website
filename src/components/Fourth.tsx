import React from "react";
import { Box, Container, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Government from "../assets/Government.svg";
import Community from "../assets/Community.svg";

const Platform = ({ text, imgSrc, altText, customStyles = {} }) => (
  <Box sx={{ ...styles.platform, ...customStyles }}>
    {imgSrc && <img src={imgSrc} alt={altText} style={styles.icon} />}
    {text && (
      <Typography variant="body1" sx={styles.platformText}>
        {text}
      </Typography>
    )}
  </Box>
);

const FourthSection = () => {
  return (
    <Container
      sx={{
        ...styles.container,
        paddingLeft: "0 !important",
        paddingRight: "0 !important",
      }}
    >
      <Typography variant="h4" sx={styles.heading}>
        A NEW APPROACH TO <br /> CIVIC ENGAGEMENT
      </Typography>
      <Box sx={styles.divider} />
      <Box sx={styles.platformSection}>
        <Box sx={{ ...styles.platform, gap: 7 }}>
          <Typography variant="body1" sx={styles.platformText}>
            EXISTING GOVERNMENT
            <br /> ENGAGEMENT PLATFORMS
          </Typography>
          <img src={Government} alt="Government Icon" style={styles.icon} />
        </Box>
        <Box sx={{ ...styles.platform, gap: 7 }}>
          <img src={Community} alt="Community Icon" style={styles.icon} />
          <Typography variant="body1" sx={styles.platformText}>
            EXISTING COMMUNITY <br />
            ENGAGEMENT PLATFORMS
          </Typography>
        </Box>
        <Box sx={styles.plusSignContainer}>
          <AddIcon sx={styles.plusSign} />
        </Box>
      </Box>

      {/* Second Layer */}
      <Box sx={styles.shortenedPlatformSection}>
        {["#74ADC7", "#A4ACB1"].map((bgColor, index) => (
          <Platform
            key={index}
            customStyles={{
              ...styles.shortenedPlatform,
              backgroundColor: bgColor,
            }}
            text={undefined}
            imgSrc={undefined}
            altText={undefined}
          />
        ))}
      </Box>

      {/* Third Layer */}
      <Box sx={styles.shortestPlatformSection}>
        {["#BFD9E5", "#D5D9DB"].map((bgColor, index) => (
          <Platform
            key={index}
            customStyles={{
              ...styles.shortenedPlatform,
              backgroundColor: bgColor,
            }}
            text={undefined}
            imgSrc={undefined}
            altText={undefined}
          />
        ))}
      </Box>
    </Container>
  );
};

const styles = {
  container: {
    minWidth: "100%",
    border: "1px solid white",
    width: "100vw",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 20px 0px 20px",
    backgroundColor: "#000",
    color: "#fff",
  },
  platformSection: {
    display: { xs: "column", sm: "flex" },
    alignItems: "center",
    maxWidth: "100%",
    width: "100%",
    position: "relative",
  },
  shortenedPlatformSection: {
    display: { xs: "none", sm: "flex" },
    alignItems: "center",
    gap: "25%",
    border: "1px solid red",
    maxWidth: "100%",
    width: "100%",
    position: "relative",
  },
  shortestPlatformSection: {
    display: { xs: "none", sm: "flex" },
    alignItems: "center",
    gap: "55%",
    border: "1px solid red",
    maxWidth: "100%",
    width: "100%",
    position: "relative",
  },
  platform: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: "20px",
    height: { xl: "90px", lg: "90px", xs: "100px" },
    maxHeight: "10%",
    backgroundColor: "#2E86AB",
    color: "#fff",
    ":nth-of-type(2)": {
      backgroundColor: "#76848A",
    },
  },
  shortenedPlatform: {
    height: "50px",
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
  },
  heading: {
    fontFamily: "Public Sans",
    fontWeight: "900",
    fontSize: { xl: "52px", xs: "32px", sm: "36px" },
    lineHeight: { xl: "58px", xs: "38px", sm: "42px" },
    marginBottom: "10px",
    color: "#fff",
  },
  plusSignContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFC000",
    width: { xs: "49px", sm: "79px" },
    height: { xs: "49px", sm: "79px" },
    borderRadius: "50%",
    margin: "0 10px",
    left: "47.5%",
    "@media (max-width: 1900px)": {
      left: "47%",
    },
    "@media (max-width: 1024px)": {
      left: "45.5%",
    },
    "@media (max-width: 900px)": {
      left: "44%",
    },
    "@media (max-width: 500px)": {
      left: "42%",
      top: "42%",
    },
  },
  divider: {
    width: "665px",
    maxWidth: "100%",
    height: "16px",
    backgroundColor: "#FFC000",
    marginBottom: { lg: "119px", md: "51px", xs: "45px" },
  },
  icon: {
    fontSize: "30px",
  },
  platformText: {
    fontFamily: "Public Sans",
    fontWeight: "800",
    fontSize: { xs: "15px", sm: "17px", md: "26px", lg: "32px" },
    lineHeight: { xs: "24px", sm: "30px", md: "37.6px" },
    marginTop: "10px",
  },
  plusSign: {
    fontFamily: "Raleway sans-serif",
    fontWeight: "900",
    fontSize: { xl: "50px", xs: "45px" },
    margin: { sm: "12px 12px", xs: "3px 3px" },
    color: "black",
  },
};

export default FourthSection;
