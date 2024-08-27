import React, { useEffect, useState, useRef } from "react";
import { Box, Container, Typography } from "@mui/material";

import Government from "../assets/Government.svg";
import Community from "../assets/Community.svg";
import eClipse from "../assets/eClipse.svg";
import social from "../assets/social.png";
import socialMobile from "../assets/socialMobile.png";
import plusIcon from "../assets/plus.png";
import equalIcon from "../assets/equal.png";

const FourthSection = () => {
  const [scrolled, setScrolled] = useState(false);
  const hasAnimated = useRef(false); // Track animation trigger status

  const [platform0Visible, setPlatform0Visible] = useState(false);
  const [platform1Visible, setPlatform1Visible] = useState(false);
  const [platform2Visible, setPlatform2Visible] = useState(false);
  const [platform3Visible, setPlatform3Visible] = useState(false);
  const [platform4Visible, setPlatform4Visible] = useState(false);
  const [platform5Visible, setPlatform5Visible] = useState(false);
  const [platform6Visible, setPlatform6Visible] = useState(false);
  const [platform7Visible, setPlatform7Visible] = useState(false);
  const [platform8Visible, setPlatform8Visible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasAnimated.current) {
        // Only trigger if the animation hasn't run yet
        const element = document.getElementById("animatedBox");
        if (element) {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // Check if the element is visible
          if (rect.top < windowHeight && rect.bottom >= 0) {
            setScrolled(true);
            hasAnimated.current = true; // Mark the animation as triggered
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrolled) {
      const timeout0 = setTimeout(() => {
        setPlatform0Visible(true);
      }, 500); // Adjust the delay as needed
      const timeout1 = setTimeout(() => {
        setPlatform1Visible(true);
      }, 500); // Adjust the delay as needed
      const timeout2 = setTimeout(() => {
        setPlatform2Visible(true);
      }, 1500); // Adjust the delay as needed

      const timeout3 = setTimeout(() => {
        setPlatform3Visible(true);
      }, 1500); // Adjust the delay as needed
      const timeout4 = setTimeout(() => {
        setPlatform4Visible(true);
      }, 2500); // Adjust the delay as needed
      const timeout5 = setTimeout(() => {
        setPlatform5Visible(true);
      }, 2500); // Adjust the delay as needed
      const timeout6 = setTimeout(() => {
        setPlatform6Visible(true);
      }, 1500); // Adjust the delay as needed
      const timeout7 = setTimeout(() => {
        setPlatform7Visible(true);
      }, 2400); // Adjust the delay as needed
      const timeout8 = setTimeout(() => {
        setPlatform8Visible(true);
      }, 3300); // Adjust the delay as needed

      return () => {
        clearTimeout(timeout0);
        clearTimeout(timeout1);
        clearTimeout(timeout2);
        clearTimeout(timeout3);
        clearTimeout(timeout4);
        clearTimeout(timeout5);
        clearTimeout(timeout6);
        clearTimeout(timeout7);
        clearTimeout(timeout8);
      };
    }
  }, [scrolled]);

  return (
    <Container sx={styles.container} maxWidth={false}>
      {/* Engagement Empower section begins */}
      <Box
        sx={{
          width: { xl: "100%", lg: "100%", md: "45%", xs: "100%" },
          maxWidth: "100%",
          margin: { xs: 4, sm: 10 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" sx={styles.heading}>
          CIVIC ENGAGEMENT <br /> EMPOWERS
        </Typography>
        <Box sx={styles.divider} />
      </Box>
      {/* Platforms begin */}
      <Box sx={styles.backgroundSection}>
        <Box sx={styles.platformSection}>
          <Box
            id="animatedBox"
            sx={{
              ...styles.platform0,
              gap: { xl: 7, lg: 7, md: 7, sm: 1, xs: 7 },
              background: "#2E86AB",
              transform: platform0Visible
                ? "translateX(0)"
                : "translateX(-50vw)",
            }}
          >
            <Typography variant="body1" sx={styles.platformText}>
              EXISTING GOVERNMENT
              <br /> ENGAGEMENT PLATFORMS
            </Typography>
            <img src={Government} alt="Government Icon" style={styles.icon} />
            {/* Plus sign */}
          </Box>

          <Box
            id="animatedBox"
            sx={{
              ...styles.plusSignContainer,
              ...(platform6Visible && {
                visibility: "visible",
              }),
            }}
          >
            <Box
              component="img"
              src={plusIcon}
              alt="Plus"
              sx={styles.plusSign}
            />
          </Box>

          <Box
            id="animatedBox"
            sx={{
              ...styles.platform1,
              gap: { xl: 7, lg: 7, md: 7, sm: 1, xs: 7 },
              background: "#76848A",
              transform: platform1Visible
                ? "translateX(0)"
                : "translateX(50vw)",
            }}
          >
            <img src={Community} alt="Community Icon" style={styles.icon} />
            <Typography variant="body1" sx={styles.platformText}>
              EXISTING COMMUNITY <br />
              ENGAGEMENT PLATFORMS
            </Typography>
          </Box>
        </Box>

        {/* Equal sign */}
        <Box
          id="animatedBox"
          sx={{
            ...styles.dragHandleSignContainer,
            ...(platform7Visible && {
              visibility: "visible",
            }),
          }}
        >
          <Box
            component="img"
            alt="equal"
            src={equalIcon}
            sx={{
              ...styles.DragHandleIcon,
            }}
          />
        </Box>
        {/*2nd and 3rd Platforms*/}
        <Box id="animatedBox" sx={styles.shortenedPlatformSection}>
          <Box sx={styles.platformSection}>
            <Box
              id="animatedBox"
              sx={{
                ...styles.platform2,
                ...(scrolled && {
                  gap: { xl: 7, lg: 7, md: 7, sm: 1, xs: 7 },
                  background: "#74ADC7",

                  transform: platform2Visible
                    ? "translateX(-25%)"
                    : "translateX(-55vw)",
                }),
              }}
            ></Box>

            <Box
              id="animatedBox"
              sx={{
                ...styles.platform3,
                ...(scrolled && {
                  gap: { xl: 7, lg: 7, md: 7, sm: 1, xs: 7 },
                  background: "#A4ACB1",
                  transform: platform3Visible
                    ? "translateX(25%)"
                    : "translateX(55vw)",
                }),
              }}
            ></Box>
          </Box>
        </Box>

        <Box id="animatedBox" sx={styles.shortestPlatformSection}>
          <Box sx={styles.platformSection}>
            <Box
              id="animatedBox"
              sx={{
                ...styles.platform4,
                gap: { xl: 7, lg: 7, md: 7, sm: 1, xs: 7 },
                background: "#BFD9E5",
                transform: platform4Visible
                  ? "translateX(-55%)"
                  : "translateX(-55vw)",
              }}
            ></Box>

            <Box
              id="animatedBox"
              sx={{
                ...styles.platform5,
                gap: { xl: 7, lg: 7, md: 7, sm: 1, xs: 7 },
                background: "#D5D9DB",
                transform: platform5Visible
                  ? "translateX(55%)"
                  : "translateX(55vw)",
              }}
            ></Box>
          </Box>
        </Box>
        {/* eClipse  */}
        <Box
          id="animatedBox"
          sx={{
            ...styles.eClipseCss,
            ...(platform8Visible && {
              visibility: "visible",
            }),
          }}
        >
          <Box
            component="img"
            src={eClipse}
            alt="Eclipse"
            width={{ xl: 395, md: 345, xs: 250 }}
            sx={{ maxWidth: "100%", maxHeight: "100%" }}
            height={{ xl: 395, md: 345, xs: 250 }}
          />
        </Box>
        <Box>
          <Box sx={styles.wrapper}>
            <Box sx={styles.outerContainer}>
              <Box sx={styles.topRightRectangle} />
              <Box sx={styles.bottomLeftRectangle}>
                <Box sx={styles.textBox}>
                  <Typography variant="body1" sx={styles.text}>
                    CIVA offers both
                    <Typography component="span" sx={styles.spanBold}>
                      {" "}
                      government and community engagement —
                    </Typography>
                    <br />
                    plus advanced communication tools, integration with local
                    resources, expert guidance, and more
                    <Typography component="span" sx={styles.spanBold}>
                      {" "}
                      — in a single integrated platform
                    </Typography>
                    .
                  </Typography>
                </Box>
              </Box>
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
        </Box>
      </Box>
    </Container>
  );
};

const styles = {
  eClipseCss: {
    marginTop: { xl: 10, sm: 5, xs: 20 },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    visibility: "hidden",
  },
  platform0: {
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
    transition: "transform 1s ease",
    transform: "translateX(-50vw)", // Başlangıç pozisyonu
  },
  platform1: {
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
    transition: "transform 1s ease",
    transform: "translateX(50vw)", // Başlangıç pozisyonu
  },
  platform2: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: "20px",
    height: { xl: "50px", lg: "50px", xs: "55px" },
    maxHeight: "10%",
    color: "#74ADC7",
    transition: "transform 1s ease",
    transform: "translateX(-50vw)", // Başlangıç pozisyonu
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
  },
  platform3: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: "20px",
    height: { xl: "50px", lg: "50px", xs: "550px" },
    maxHeight: "10%",
    color: "#A4ACB1",
    transition: "transform 1s ease",
    transform: "translateX(50vw)", // Başlangıç pozisyonu
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
  },
  platform4: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: "20px",
    height: { xl: "50px", lg: "50px", xs: "55px" },
    maxHeight: "10%",
    color: "#BFD9E5",
    transition: "transform 1s ease",
    transform: "translateX(-50vw)", // Başlangıç pozisyonu
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
  },
  platform5: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: "20px",
    height: { xl: "50px", lg: "50px", xs: "550px" },
    maxHeight: "10%",
    color: "#D5D9DB",
    transition: "transform 1s ease",
    transform: "translateX(50vw)", // Başlangıç pozisyonu
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
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
  wrapper: {
    marginTop: 15,
    display: "flex",
    justifyContent: "center",
    marginBottom: { xl: 45, lg: 45, md: 45, sm: 45, xs: 35 },
  },

  outerContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },

  topRightRectangle: {
    position: "absolute",
    display: "flex",
    top: { sm: "-42px", xs: "-15px" },
    right: { md: "-42px", sm: "-50px", xs: "-15px" },
    width: { xl: "409px", lg: "409px", md: "269px", sm: "269px", xs: "226px" },
    height: { xl: "305px", lg: "305px", md: "185px", sm: "185px", xs: "185px" },
    backgroundColor: "#2E86AB",
  },
  bottomLeftRectangle: {
    position: "absolute",
    display: "flex",
    top: { xl: "210px", lg: "400px", md: "290px", sm: "130px", xs: "205px" },
    right: { xl: "251px", lg: "251px", md: "170px", sm: "40px", xs: "-14px" },
    width: {
      xl: "1003px",
      lg: "1003px",
      md: "762px",
      sm: "662px",
      xs: "370px",
    },
    height: { xl: "194px", lg: "160px", md: "150px", sm: "150px", xs: "200px" },
    paddingTop: {
      xl: "386px",
      lg: "180px",
      md: "150px",
      sm: "205px",
      xs: "96px",
    },
    backgroundColor: "#FFC000",
  },
  imageContainer: {
    position: "relative",
    display: "flex",
    width: "100%",
    height: "auto",
  },
  image: {
    width: {
      xl: "1213px",
      lg: "1213px",
      md: "898px",
      sm: "650px",
      xs: "342px",
    },

    height: "auto",
  },
  textBox: {
    paddingLeft: { sm: "41px", xs: "16px" },
    paddingBottom: { sm: "56px", xs: "25px" },
    backgroundColor: "#FFC000",
  },
  text: {
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: { xl: "28px", lg: "28px", md: "20px", sm: "20px", xs: "20px" },
    textAlign: "left",
    lineHeight: { xl: "41px", xs: "28px" },
    color: "#000",
  },
  spanBold: {
    fontFamily: "Public Sans",
    fontWeight: 800,
    fontSize: { xl: "32px", lg: "32px", md: "20px", sm: "20px", xs: "20px" },
  },
  container: {
    width: "100%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#000",
  },
  platformSection: {
    display: { xs: "column", sm: "flex" },
    alignItems: "center",
    maxWidth: "100%",
    width: "100%",
    position: "relative",
  },
  backgroundSection: {
    width: "100vw",
    // minHeight: {
    //   xl: "190vh",
    //   lg: "220vh",
    //   md: "110vh",
    //   sm: "110vh",
    //   xs: "190vh",
    // },
    height: "100%",
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
  shortestPlatformSection0: {
    alignItems: "center",
    gap: "55%",
    maxWidth: "100%",
    width: "100%",
    position: "relative",
    display: { xs: "none", sm: "flex" },
    transform: "translateX(-50vw)", // Başlangıç pozisyonu
  },
  shortestPlatformSection1: {
    alignItems: "center",
    gap: "55%",
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

  heading: {
    fontFamily: "Public Sans",
    fontWeight: 900,
    fontSize: { xl: "52px", xs: "32px", sm: "36px" },
    lineHeight: { xl: "58px", xs: "38px", sm: "42px" },
    marginBottom: "10px",
    color: "#fff",
  },
  plusSignContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    backgroundColor: "#FFC000",
    width: { xs: "49px", sm: "69px", md: "79px", xl: "79px" },
    height: { xs: "49px", sm: "69px", md: "79px", xl: "79px" },
    borderRadius: "50%",
    margin: "0 10px",
    left: { xl: "47.5%", lg: "46.5%", md: "45%", sm: "44.5%", xs: "40%" },
    top: { xl: "20%", lg: "20%", md: "20%", sm: "30%", xs: "41%" },
    zIndex: 1,
    visibility: "hidden",
  },
  plusSign: {
    width: "100%",
    height: "auto",
    maxWidth: "40%",
    maxHeight: "80%",
  },
  dragHandleSignContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFC000",
    width: { xs: "73px", sm: "89px", md: "110px", lg: "140px" },
    height: { xs: "73px", sm: "89px", md: "110px", lg: "140px" },
    borderRadius: "50%",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    marginTop: "25px",
    visibility: "hidden",
  },
  DragHandleIcon: {
    width: "100%",
    height: "auto",
    maxWidth: "50%",
    maxHeight: "80%",
  },
  divider: {
    width: { xl: "675px", lg: "515px", md: "470px", sm: "450px", xs: "370px" },
    maxWidth: "100%",
    height: "16px",
    backgroundColor: "#FFC000",
  },
  icon: {},
  platformText: {
    fontFamily: "Public Sans",
    fontWeight: "800",
    fontSize: { xs: "15px", sm: "17px", md: "20px", lg: "32px", xl: "32px" },
    lineHeight: { xs: "24px", sm: "23px", md: "23px", lg: "38px", xl: "38px" },
    marginTop: "10px",
  },

  eclipse: {
    height: "auto",
    "@media (max-width: 2900px)": {
      width: "100%",
      maxWith: "100%",
    },
    "@media (max-width: 1920px)": {
      width: "110%",
      maxWith: "100%",
    },
  },
};

export default FourthSection;
