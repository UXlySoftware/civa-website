import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import civalogoImage from "../assets/civa-logo-white.png";
import { useMediaQuery } from "@mui/material";

const SecondSection = () => {
  const [scrolled, setScrolled] = useState(false);
  const [imageVisible, setImageVisible] = useState(false); // New state for image visibility
  const isXLargeScreen = useMediaQuery("(min-width:1920px)");
  const isLargeScreen = useMediaQuery(
    "(min-width:1280px) and (max-width:1919px)"
  );
  const isMediumScreen = useMediaQuery(
    "(min-width:960px) and (max-width:1279px)"
  );
  const isSmallScreen = useMediaQuery(
    "(min-width:600px) and (max-width:959px)"
  );
  const isXSmallScreen = useMediaQuery("(max-width:599px)");

  const getCircleTranslations = () => {
    if (isXLargeScreen) {
      return [
        { translateX: 210, translateY: 58 },
        { translateX: 78, translateY: 85 },
        { translateX: 20, translateY: 85 },
        { translateX: 370, translateY: 375 },
      ];
    } else if (isLargeScreen) {
      return [
        { translateX: 210, translateY: 58 },
        { translateX: 78, translateY: 85 },
        { translateX: 20, translateY: 85 },
        { translateX: 370, translateY: 375 },
      ];
    } else if (isMediumScreen) {
      //1366x1024
      return [
        { translateX: 190, translateY: 90 },
        { translateX: 55, translateY: 120 },
        { translateX: 0, translateY: 120 },
        { translateX: 300, translateY: 480 },
      ];
    } else if (isSmallScreen) {
      return [
        { translateX: 120, translateY: 40 },
        { translateX: 45, translateY: 50 },
        { translateX: 5, translateY: 50 },
        { translateX: 220, translateY: 225 },
      ];
    } else if (isXSmallScreen) {
      return [
        { translateX: 90, translateY: 35 },
        { translateX: 35, translateY: 40 },
        { translateX: 0, translateY: 40 },
        { translateX: 170, translateY: 175 },
      ];
    }
    return [
      { translateX: 210, translateY: 58 },
      { translateX: 78, translateY: 85 },
      { translateX: 20, translateY: 85 },
      { translateX: 370, translateY: 375 },
    ];
  };

  const circleTranslations = getCircleTranslations();

  const getScaleValue = () => {
    if (isXLargeScreen) {
      return 1.4;
    } else if (isLargeScreen) {
      return 1.5;
    } else if (isMediumScreen) {
      return 1.3;
    } else if (isSmallScreen) {
      return 1.2;
    } else if (isXSmallScreen) {
      return 1;
    }
    return 1.4; // Default value
  };

  const scaleValue = getScaleValue();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const extraScroll = 30; // İstediğiniz ekstra scroll mesafesini buraya yazabilirsiniz

      if (scrollPosition > windowHeight + extraScroll) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setImageVisible(false); // Reset image visibility when scrolling up
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrolled) {
      const timeout = setTimeout(() => {
        setImageVisible(true);
      }, 100); // Adjust the delay as needed
      return () => clearTimeout(timeout);
    }
  }, [scrolled]);

  return (
    <Container sx={styles.container}>
      <Box sx={styles.circleContainer}>
        <Box
          sx={{
            ...styles.circle,
            ...(scrolled && {
              transform: `translate(${circleTranslations[0].translateX}%, ${circleTranslations[0].translateY}%) scale(1.2)`,
              opacity: 0.8,
              width: { xl: 500, lg: 450, md: 379, sm: 349 },
              height: { xl: 500, lg: 450, md: 379, sm: 349 },
            }),
            borderColor: scrolled ? "transparent" : "#FFC000",
            zIndex: 3,
          }}
        >
          <Box sx={{ ...styles.innerCircle, background: "#FFC000" }}>
            <Typography
              sx={{
                ...styles.circleText,
                ...(scrolled && {
                  position: "relative",
                  top: -50, // Adjust the value as needed for top offset
                  fontSize: { xl: 18, lg: 18, md: 14 },
                }),
              }}
            >
              GOVERNMENT
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            ...styles.circle,
            ...(scrolled && {
              transform: `translate(${circleTranslations[1].translateX}%, ${circleTranslations[1].translateY}%) scale(1.2)`,
              width: { xl: 500, lg: 450, md: 379, sm: 349 },
              height: { xl: 500, lg: 450, md: 379, sm: 349 },
            }),
            borderColor: scrolled ? "transparent" : "#2887AC",
            zIndex: 2,
          }}
        >
          <Box sx={{ ...styles.innerCircle, background: "#2887AC" }}>
            <Typography
              sx={{
                ...styles.circleText,
                ...(scrolled && {
                  position: "relative",
                  top: 20,
                  color: "black",
                  right: 50, // Adjust the value as needed for left offset
                  fontSize: { xl: 18, lg: 18, md: 14 },
                }),
              }}
            >
              COMMUNITY ASSOCIATION
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            ...styles.circle,
            ...(scrolled && {
              transform: `translate(${circleTranslations[2].translateX}%, ${circleTranslations[2].translateY}%) scale(1.2)`,
              opacity: 0.8,
              width: { xl: 500, lg: 450, md: 379, sm: 349 },
              height: { xl: 500, lg: 450, md: 379, sm: 349 },
            }),
            borderColor: scrolled ? "transparent" : "#76848A",
            zIndex: 3,
          }}
        >
          <Box sx={{ ...styles.innerCircle, background: "#76848A" }}>
            <Typography
              sx={{
                ...styles.circleText,
                ...(scrolled && {
                  position: "relative",
                  top: 20,
                  left: 40, // Adjust the value as needed for left offset
                  fontSize: { xl: 18, lg: 18, md: 14 },
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                  width: "80%", // Adjust the width as needed
                }),
              }}
            >
              AFFINITY ORGANIZATION
            </Typography>
          </Box>
          {/* New Image Box */}
        </Box>
        <Box
          sx={{
            ...styles.imageBox,
            ...(imageVisible && {
              visibility: "visible",
              opacity: 1,
              transform: `translate(${circleTranslations[3].translateX}%, ${circleTranslations[3].translateY}%) scale(${scaleValue})`,
            }),
          }}
        >
          <img
            src={civalogoImage}
            alt="CIVA Venn Diagram"
            style={{ ...styles.image, transform: "scale(0.6)" }}
          />
        </Box>
      </Box>
    </Container>
  );
};

const styles = {
  container: {
    widtwidth: "100%",
    display: { xs: "none", sm: "block", md: "block" },
    textAlign: "center",
    marginTop: 9,
    marginBottom: 14,
    marginLeft: { xl: "20%", lg: "5%", md: "0" }, // Adjust for responsiveness
  },
  circleContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
    transition: "all 1s ease",
  },
  circle: {
    width: { xl: 410, lg: 350, md: 279, sm: 249 },
    height: { xl: 410, lg: 350, md: 279, sm: 249 },
    borderRadius: "50%",
    border: "5px dashed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    transition: "transform 1s ease, width 1s ease, height 1s ease", // Updated transitions
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
    width: { xl: 253, lg: 253, md: 173, sm: 163 },
    height: { xl: 253, lg: 253, md: 173, sm: 163 },
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginLeft: -20,
    marginRight: -20,
    zIndex: 3,
  },
  imageBox: {
    position: "absolute",
    visibility: "hidden",
    transform: "translate(100%, 150%)",
    opacity: 1,
    transition: "opacity 1s ease, transform 1s ease",
    zIndex: 4, // Ensure it's above other elements
    borderRadius: "50%",
    backgroundColor: "black",
  },
  image: {
    width: 100, // Adjust the size as needed
    height: 100,
  },
};

export default SecondSection;
