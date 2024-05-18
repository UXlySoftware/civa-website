import React from "react";
import { Box, Container, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import Government from "../assets/Government.svg";
import Community from "../assets/Community.svg";
import eclipse from "../assets/eclipse.png";
import social from "../assets/social.png";
import socialMobile from "../assets/socialMobile.png";

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
  const secondLayerColors = ["#74ADC7", "#A4ACB1"];
  const thirdLayerColors = ["#BFD9E5", "#D5D9DB"];

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
        <Box sx={{ ...styles.platform, gap: 7, background: "#2E86AB" }}>
          <Typography variant="body1" sx={styles.platformText}>
            EXISTING GOVERNMENT
            <br /> ENGAGEMENT PLATFORMS
          </Typography>
          <img src={Government} alt="Government Icon" style={styles.icon} />
        </Box>
        <Box sx={{ ...styles.platform, gap: 7, background: "#76848A" }}>
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

      <Box sx={styles.backgroundSection}>
        <Box sx={styles.dragHandleSignContainer}>
          <DragHandleIcon sx={styles.DragHandleIcon} />
        </Box>

        <Box sx={styles.shortenedPlatformSection}>
          {secondLayerColors.map((bgColor, index) => (
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

        <Box sx={styles.shortestPlatformSection}>
          {thirdLayerColors.map((bgColor, index) => (
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
        <Box
          sx={{
            marginTop: { xl: 10, xs: 15 },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={eclipse} alt="Eclipse" />
        </Box>
        <Box sx={styles.outerContainer}>
          <Box sx={styles.topRightRectangle} />
          <Box sx={styles.topRightRectangle1}>
            <Box sx={styles.textBox}>
              <Typography variant="body1" sx={styles.text}>
                CIVA offers both <b>government and community engagement —</b>
                <br />
                plus advanced communication tools, integration with local
                resources, expert guidance, and more —
                <b> in a single integrated platform</b>.
              </Typography>
            </Box>
          </Box>

          {/* <Box sx={styles.bottomLeftRectangle} /> */}
          <Box sx={styles.imageContainer}>
            <Box
              component="img"
              sx={{
                ...styles.image,
                display: { xs: "none", sm: "block" },
              }}
              src={social}
              alt="Group Discussion"
            />
            <Box
              component="img"
              sx={{
                ...styles.image,
                display: { xs: "block", sm: "none" },
              }}
              src={socialMobile}
              alt="Group Discussion"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

const styles = {
  outerContainer: {
    minHeight: "400px",
    position: "relative",
    width: "100%",
    maxWidth: { xl: "1210px", md: "1210px", xs: "342px" },
    maxWith: "100%",
    marginBottom: "40px",
    marginLeft: { xl: "20%", md: "10%", xs: "9%" },
    marginTop: { sm: "141px", xs: "60px" },
  },
  topRightRectangle: {
    position: "absolute",
    top: { sm: "-30px", xs: "-15px" },
    right: { sm: "-20px", xs: "-15px" },
    width: "250px",
    height: "150px",
    backgroundColor: "#4ABDAC",
  },
  topRightRectangle1: {
    position: "absolute",
    top: "210px",
    right: { xl: "251px", lg: "251px", md: "251px", xs: "-15px" },
    width: { xl: "1002px", lg: "1002px", md: "1002px", xs: "370px" },
    height: { xl: "0%", xs: "40%" },
    paddingTop: { xl: "386px", xs: "86px" },
    backgroundColor: "#FFC000",
  },
  bottomLeftRectangle: {
    position: "absolute",
    bottom: "-155px",
    left: "-30px",
    width: "150px",
    height: "540px",
    display: { xs: "none", sm: "flex" },
    backgroundColor: "#FFC000",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
  },
  image: {
    width: "100%",
    height: "auto",
    display: "flex",
  },
  textBox: {
    // position: "relative",
    // top: "-10px",
    // left: "-24px",
    // maxWidth: "1002px",
    // minHeight: "580px",
    // marginTop: 44,
    paddingLeft: { sm: "38px", xs: "16px" },
    paddingBottom: { sm: "56px", xs: "25px" },
    backgroundColor: "#FFC000",
  },
  text: {
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: { xl: "28px", xs: "20px" },
    textAlign: "left",
    lineHeight: { xl: "41px", xs: "28px" },
    // marginTop: 48,
    color: "#000",
  },
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
  backgroundSection: {
    width: "100%",
    minHeight: "400vh",
    background: "#374957",
  },
  shortenedPlatformSection: {
    alignItems: "center",
    gap: "25%",
    maxWidth: "100%",
    width: "100%",
    position: "relative",
    display: { xs: "none", sm: "flex" },
  },
  shortestPlatformSection: {
    alignItems: "center",
    gap: "55%",
    maxWidth: "100%",
    width: "100%",
    position: "relative",
    display: { xs: "none", sm: "flex" },
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
    color: "#fff",
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
    "@media (max-width: 600px)": {
      left: "40%",
      top: "40%",
    },
  },
  dragHandleSignContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFC000",
    width: { xs: "50px", sm: "79px", md: "130px" },
    height: { xs: "50px", sm: "79px", md: "130px" },
    borderRadius: "50%",
    left: "46.5%",
    bottom: "-190%",
    "@media (max-width: 1900px)": {
      left: "46%",
      bottom: "-210%",
    },
    "@media (max-width: 1024px)": {
      left: "45.5%",
    },
    "@media (max-width: 900px)": {
      left: "44%",
    },
    "@media (max-width: 500px)": {
      left: "42%",
      top: "268%",
    },
  },
  DragHandleIcon: {
    fontFamily: "Raleway sans-serif",
    fontWeight: "900",
    fontSize: { xl: "50px", md: "65px", xs: "35px" },
    margin: { xl: "40px", lg: "30px", md: "30px", sm: "15px", xs: "8px 6px" },
    color: "black",
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
    fontSize: { xl: "50px", lg: "50px", md: "50px", xs: "45px" },
    margin: { sm: "12px 12px", xs: "3px 3px" },
    color: "black",
  },
};

export default FourthSection;