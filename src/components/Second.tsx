import React, { useState, useEffect, useRef } from "react";
import { Box, Container, Typography } from "@mui/material";

const SecondSection = () => {
  const [circleOpacity, setCircleOpacity] = useState(1);
  const [animation, setAnimation] = useState(false);
  const containerRef = useRef(null);
  const vennContainerRef = useRef<HTMLDivElement | null>(null);
  const circleContainerRef = useRef<HTMLDivElement | null>(null);
  const outerfirstCircleContainerRef = useRef<HTMLDivElement | null>(null);
  const outersecondCircleContainerRef = useRef<HTMLDivElement | null>(null);
  const outerthirdCircleContainerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      const container: any = containerRef.current;
      const containerBottom = container.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      if (containerBottom <= windowHeight) {
        setCircleOpacity(0.8); // Set to semi-transparent
        setAnimation(true);
        if (vennContainerRef.current) {
          vennContainerRef.current.style.transform = "translateY(-50px)";
          vennContainerRef.current.style.transition =
            "transform 0.6s ease-in-out";
        }
        if (outerfirstCircleContainerRef.current) {
          outerfirstCircleContainerRef.current.style.border =
            "5px dashed transparent";
          outerfirstCircleContainerRef.current.style.transition =
            "border 0.4s ease";
        }
        if (outersecondCircleContainerRef.current) {
          outersecondCircleContainerRef.current.style.border =
            "5px dashed transparent";
          outersecondCircleContainerRef.current.style.transition =
            "border 0.4s ease";
        }
        if (outerthirdCircleContainerRef.current) {
          outerthirdCircleContainerRef.current.style.border =
            "5px dashed transparent";
          outerthirdCircleContainerRef.current.style.transition =
            "border 0.4s ease";
        }
        if (circleContainerRef.current) {
          circleContainerRef.current.style.transform =
            "translate(400px, 350px)";
          circleContainerRef.current.style.transition =
            "transform 0.6s ease-in-out";
          // Adjust left and right circles
          const circles: any = circleContainerRef.current.children;
          if (circles.length === 3) {
            // COMMUNITY ASSOCIATION - move 50px left, 50px bottom
            circles[0].firstChild.firstChild.style.transform =
              "translate(-50px, 50px)";
            circles[0].firstChild.firstChild.style.transition =
              "transform 0.6s ease-in-out";
            // GOVERNMENT - move 50px top
            circles[1].firstChild.firstChild.style.transform =
              "translate(0px, -50px)";
            circles[1].firstChild.firstChild.style.transition =
              "transform 0.6s ease-in-out";
            // AFFINITY ORGANIZATION - move 50px right, 50px bottom
            circles[2].firstChild.firstChild.style.transform =
              "translate(50px, 50px)";
            circles[2].firstChild.firstChild.style.transition =
              "transform 0.6s ease-in-out";
            // Left circle
            circles[0].style.transform = "translate(300px,100px)";
            circles[0].style.transition = "transform 0.6s ease-in-out";
            // Center circle
            circles[1].style.transform = "translate(0px,-50px)";
            circles[1].style.transition = "transform 0.6s ease-in-out";
            // Right circle
            circles[2].style.transform = "translate(-300px,100px)";
            circles[2].style.transition = "transform 0.6s ease-in-out";
            // Increase inner circle size
            circles[0].firstChild.style.width = "313px";
            circles[0].firstChild.style.height = "313px";
            circles[1].firstChild.style.width = "313px";
            circles[1].firstChild.style.height = "313px";
            circles[2].firstChild.style.width = "313px";
            circles[2].firstChild.style.height = "313px";
            circles[0].firstChild.style.transition =
              "width 0.6s ease-in-out, height 0.6s ease-in-out";
            circles[1].firstChild.style.transition =
              "width 0.6s ease-in-out, height 0.6s ease-in-out";
            circles[2].firstChild.style.transition =
              "width 0.6s ease-in-out, height 0.6s ease-in-out";

            // Change font size to 16px and max width to 100px
            circles[0].firstChild.firstChild.style.fontSize = "16px";
            circles[1].firstChild.firstChild.style.fontSize = "16px";
            circles[2].firstChild.firstChild.style.fontSize = "16px";
            circles[0].firstChild.firstChild.style.maxWidth = "100px";
            circles[1].firstChild.firstChild.style.maxWidth = "100px";
            circles[2].firstChild.firstChild.style.maxWidth = "100px";

            // Make GOVERNMENT circle zIndex lowest
            circles[0].style.zIndex = 3; // COMMUNITY ASSOCIATION
            circles[1].style.zIndex = 1; // GOVERNMENT
            circles[2].style.zIndex = 2; // AFFINITY ORGANIZATION
          }
        }
      } else {
        setAnimation(false);
        setCircleOpacity(1); // Set back to fully opaque

        if (vennContainerRef.current) {
          vennContainerRef.current.style.transform = "translateY(0px)";
        }
        if (circleContainerRef.current) {
          circleContainerRef.current.style.transform = "translate(0px, 0px)";
          // Reset left and right circles
          const circles: any = circleContainerRef.current.children;
          if (circles.length === 3) {
            // Reset text position
            circles[0].firstChild.firstChild.style.transform =
              "translate(0px, 0px)";
            circles[1].firstChild.firstChild.style.transform =
              "translate(0px, 0px)";
            circles[2].firstChild.firstChild.style.transform =
              "translate(0px, 0px)";
            // Reset circle position
            circles[0].style.transform = "translateX(0px)";
            circles[1].style.transform = "translateX(0px)";
            circles[2].style.transform = "translateX(0px)";
            // Reset inner circle size
            circles[0].firstChild.style.width = "253px";
            circles[0].firstChild.style.height = "253px";
            circles[1].firstChild.style.width = "253px";
            circles[1].firstChild.style.height = "253px";
            circles[2].firstChild.style.width = "253px";
            circles[2].firstChild.style.height = "253px";

            // Reset font size and max width
            circles[0].firstChild.firstChild.style.fontSize = "";
            circles[1].firstChild.firstChild.style.fontSize = "";
            circles[2].firstChild.firstChild.style.fontSize = "";
            circles[0].firstChild.firstChild.style.maxWidth = "";
            circles[1].firstChild.firstChild.style.maxWidth = "";
            circles[2].firstChild.firstChild.style.maxWidth = "";

            // Reset zIndex
            circles[0].style.zIndex = 3; // COMMUNITY ASSOCIATION
            circles[1].style.zIndex = 2; // GOVERNMENT
            circles[2].style.zIndex = 1; // AFFINITY ORGANIZATION
          }
        }
      }
    }
  };

  useEffect(() => {
    if (!animation) {
      setTimeout(() => {
        if (!animation) {
          if (outerfirstCircleContainerRef.current) {
            outerfirstCircleContainerRef.current.style.border =
              "5px dashed #FFC000";
            outerfirstCircleContainerRef.current.style.transition =
              "border 0.4s ease-in-out";
          }
          if (outersecondCircleContainerRef.current) {
            outersecondCircleContainerRef.current.style.border =
              "5px dashed #2E86AB";
            outersecondCircleContainerRef.current.style.transition =
              "border 0.4s ease-in-out";
          }
          if (outerthirdCircleContainerRef.current) {
            outerthirdCircleContainerRef.current.style.border =
              "5px dashed #76848A";
            outerthirdCircleContainerRef.current.style.transition =
              "border 0.4s ease-in-out";
          }
        }
      }, 500);
    }
  }, [animation]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Container sx={styles.container}>
        <Box sx={styles.circleContainer} ref={circleContainerRef}>
          <Box
            sx={{
              ...styles.circle,
              borderColor: "#FFC000",
              zIndex: 3,
            }}
            ref={outerfirstCircleContainerRef}
          >
            <Box
              sx={{
                ...styles.innerCircle,
                background: "#FFC000",
                opacity: circleOpacity,
              }}
            >
              <Typography sx={styles.circleText}>
                COMMUNITY ASSOCIATION
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              ...styles.circle,
              borderColor: "#2887AC",
              zIndex: 2,
            }}
            ref={outersecondCircleContainerRef}
          >
            <Box
              sx={{
                ...styles.innerCircle,
                background: "#2887AC",
                /* opacity: circleOpacity, */
              }}
            >
              <Typography sx={styles.circleText}>GOVERNMENT </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              ...styles.circle,
              borderColor: "#76848A",
              zIndex: 1,
            }}
            ref={outerthirdCircleContainerRef}
          >
            <Box
              sx={{
                ...styles.innerCircle,
                background: "#76848A",
                opacity: circleOpacity,
              }}
            >
              <Typography sx={styles.circleText}>
                AFFINITY ORGANIZATION
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
      <Container
        sx={{
          ...thirdstyles.container,
          paddingLeft: "0 !important",
          pb: { xl: "10%", lg: "10%", md: 0, sm: 0, xs: 0 },
        }}
        ref={containerRef}
      >
        <Box sx={thirdstyles.textContainer}>
          <Box sx={thirdstyles.sideBorder} />
          <Typography variant="h4" sx={thirdstyles.heading}>
            CIVA CONNECTS
          </Typography>
          <Typography
            variant="h1"
            sx={thirdstyles.subHeading}
            ref={containerRef}
          >
            Our dynamic, integrated platform brings <br />
            stakeholders together to create <br /> meaningful programs with
            measurable <br /> impact.
          </Typography>
        </Box>
        <Box sx={thirdstyles.vennContainer} ref={vennContainerRef}>
          {/*   <img
            src={venDiagram}
            alt="CIVA Venn Diagram"
            style={thirdstyles.vennImage}
          /> */}
        </Box>
      </Container>
    </>
  );
};

const styles = {
  container: {
    display: { xs: "none", sm: "block", md: "block" },
    textAlign: "center",
    marginTop: 9,
    marginBottom: 14,
    marginLeft: { xl: 42, lg: 12 },
  },
  circleContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
    transition: "transform 0.6s ease-in-out", // Added smooth transition
  },
  circle: {
    width: { xl: 410, lg: 350, md: 279, sm: 249 },
    height: { xl: 410, lg: 350, md: 279, sm: 249 },
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginLeft: { xl: -2, lg: -3, md: -4 },
    marginRight: -5,
    transition: "border 2s ease, opacity 0.6s ease-in-out",
  },
  circleText: {
    fontSize: { xl: 24, lg: 24, md: 16 },
    fontWeight: 900,
    textAlign: "center",
    lineHeight: { xl: "28px", lg: "28px", md: "19px" },
    color: "#fff",
    fontFamily: "Public Sans",
    transition: "transform 0.6s ease-in-out",
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
    transition:
      "width 0.6s ease-in-out, height 0.6s ease-in-out, opacity 0.6s ease-in-out",
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

const thirdstyles = {
  container: {
    textAlign: "center",
    display: "flex",
    justifyItems: "center",
    flexDirection: { xs: "column-reverse", sm: "row", md: "row" },
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: { xs: 10, sm: 15 },
  },
  textContainer: {
    justifyContent: "center",
    textAlign: "left",
    maxWidth: { xl: "40%", lg: "50%", md: "50%", sm: "50%", xs: "356px" },
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: { xl: "32px", lg: "32px", md: "22px", sm: "22px", xs: "22px" },
    marginRight: { xl: 10 },
    marginTop: {
      xl: "-100px",
      lg: "-150px",
      md: "-150px",
      sm: "0px",
      xs: "60px",
    },
    paddingLeft: { xl: 0, lg: 0, md: 5, sm: 7, xs: 5 },
  },
  sideBorder: {
    "&::before": {
      content: '""',
      position: "absolute",
      left: {
        xl: "230px",
        lg: "0px",
        md: "0px",
        sm: "0px",
        xs: "0px",
      },
      height: {
        xl: "298px",
        lg: "298px",
        md: "298px",
        sm: "268px",
        xs: "233px",
      },
      marginTop: { xl: 0, lg: 0, md: 0, sm: 0, xs: 0 },
      width: "16px",
      backgroundColor: "black",
    },
  },
  heading: {
    fontFamily: "Public Sans",
    fontWeight: "900",
    fontSize: { xs: "36px", sm: "44px", md: "52px" },
    lineHeight: { xs: "42px", sm: "58px" },
  },
  subHeading: {
    color: "#010101",
    fontWeight: 700,
    fontSize: { md: "23px", sm: "20px", xs: "18px" },
    lineHeight: "29px",
    fontFamily: "Inter",
  },
  button: {
    width: { md: "70%", xs: "95%" },
    padding: { xs: "8px 16px", sm: "10px 20px", md: "12px 24px" },
    fontFamily: "Inter",
    fontSize: {
      xs: "18px",
      sm: "18px",
      md: "18px",
      lg: "22px",
      xl: "22px",
    },
    lineHeight: { xs: "22px", sm: "22px", md: "22px", lg: "27px", xl: "27px" },
    fontWeight: 700,
    borderRadius: "12px",
    textTransform: "none",
    backgroundColor: "#FFC000",
    color: "black",
    "&:hover": {
      backgroundColor: "#e8ae00",
    },
  },
  vennContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: { xs: 4, sm: 0, md: 0 },
    paddingLeft: { xl: 0, lg: 0, md: 5, xs: 5 },
    transition: "transform 0.6s ease-in-out", // Added smooth transition
  },
  circle: {
    position: "absolute",
    width: 140,
    height: 140,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 2,
  },
  vennText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },

  vennImage: {
    maxWidth: "100%",
    height: "auto",
    width: "100%",
  },
};

export default SecondSection;
