import React, { FC, ReactNode } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import phoneImage from "../assets/phone.png";
import discussionImage from "../assets/discussion.png";

interface ListItemProps {
  number: number;
  text: string;
}
interface ImageSectionProps {
  src: string;
  alt: string;
  button: ReactNode;
}
interface InfoSectionProps {
  imgSrc: string;
  imgAlt: string;
  text: ReactNode;
}

const ListItem: FC<ListItemProps> = ({ number, text }) => (
  <Box sx={styles.listItem}>
    <Typography variant="h5" sx={styles.listNumber}>
      {number}.
    </Typography>
    <Typography variant="body1" sx={styles.listText}>
      {text}
    </Typography>
  </Box>
);

const ImageSection: FC<ImageSectionProps> = ({ src, alt, button }) => (
  <Box sx={styles.imageBox}>
    <img src={src} alt={alt} style={styles.image} />
    {button}
  </Box>
);

const InfoSection: FC<InfoSectionProps> = ({ imgSrc, imgAlt, text }) => (
  <Box sx={styles.infoSection}>
    <Box sx={styles.infoSectionImageBox}>
      <img src={imgSrc} alt={imgAlt} style={styles.infoSectionImage} />
    </Box>
    <Box sx={styles.infoSectionTextBox}>
      <Typography variant="body1" sx={styles.infoSectionText}>
        {text}
      </Typography>
    </Box>
  </Box>
);

const HowItWorks = () => {
  const listItems = [
    "Organization and community members join CIVA.",
    "Organization and community members discover government resources.",
    "Organizations and communities find each other.",
    "Organizations and community members communicate and collaborate through CIVA.",
    "Organization receives analytics, metrics, and insights based on community feedback to make programs effective.",
    "Community members have a stronger voice and greater influence.",
  ];

  return (
    <Container sx={styles.container}>
      <Typography variant="h4" sx={styles.heading}>
        HOW IT WORKS
      </Typography>
      <Box sx={styles.divider} />
      <Box sx={styles.contentBox}>
        <Box sx={styles.listBox}>
          {listItems.map((text, index) => (
            <ListItem key={index} number={index + 1} text={text} />
          ))}
          <Button
            variant="contained"
            color="primary"
            sx={{ ...styles.button, display: { xs: "none", md: "flex" } }}
          >
            Learn More
          </Button>
        </Box>
        <ImageSection
          src={phoneImage}
          alt="Phone showing CIVA app"
          button={
            <Button
              variant="contained"
              color="primary"
              sx={{
                ...styles.button,
                display: { xs: "flex", md: "none" },
                position: "relative",
                bottom: "50px",
                width: "100%",
              }}
            >
              Learn More
            </Button>
          }
        />
      </Box>
      <InfoSection
        imgSrc={discussionImage}
        imgAlt="Discussion"
        text={
          <>
            CIVA enables <b>multi-layered engagement</b> and helps organizations
            and communities <b>discover</b> relevant policies and government
            resources that impact their programs.
          </>
        }
      />
    </Container>
  );
};

const styles = {
  container: {
    padding: "142px 0px",
    minWidth: "100%",
    paddingLeft: "0px !important",
    paddingRight: "0px !important",
  },
  heading: {
    fontFamily: "Public Sans",
    fontWeight: "900",
    fontSize: { xl: "52px", lg: "52px", md: "42px", sm: "36px", xs: "36px" },
    lineHeight: { xl: "58px", lg: "58px", md: "46px", sm: "42px", xs: "42px" },
    marginBottom: "12px",
    marginLeft: { xl: "300px", lg: "70px", md: "26px", sm: "0px" },
    textAlign: {
      xl: "left",
      lg: "left",
      md: "left",
      sm: "center",
      xs: "center",
    },
  },
  divider: {
    margin: { xl: "0px", lg: "0px", md: "0px", sm: "0px 25px", xs: "0px 25px" },
    maxWidth: { xl: "704px", lg: "475px", md: "360px", sm: "380px" },
    background: "#FFC000",
    height: "16px",
  },
  contentBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: { xs: "column", md: "row" },
  },
  listBox: {
    width: { xs: "90%", md: "40%", lg: "35%", xl: "27%" },
    padding: "0 20px",
    marginLeft: { xl: 35, lg: 7 },
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "37px",
  },
  listNumber: {
    fontWeight: "700",
    color: "#2E86AB",
    marginRight: "20px",
    fontSize: { xl: "64px", lg: "64px", md: "52px", sm: "52px", xs: "52px" },
    lineHeight: { xl: "75px", lg: "75px", md: "61px", sm: "61px" },
  },
  listText: {
    fontFamily: "Inter",
    fontSize: { xl: "20px", lg: "20px", md: "18px", sm: "18px", xs: "18px" },
    lineHeight: "24.2px",
    fontWeight: 700,
  },
  button: {
    fontFamily: "Inter",
    fontWeight: 700,
    borderRadius: "12px",
    fontSize: "18px",
    backgroundColor: "#FFC000",
    color: "#000",
    padding: "24px 12px",
    width: "170px",
    height: "51px",
    textTransform: "none",
  },
  imageBox: {
    width: { xs: "90%", md: "40%" },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    flexDirection: { xs: "column", md: "column-reverse" },
  },
  image: {
    maxWidth: "100%",
    height: "auto",
  },
  infoSection: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#74ADC7",
    padding: { xl: "65px", lg: "65px", md: "50px" },
    paddingTop: { xs: "60px", sm: "0px" },
    paddingBottom: { xs: "100px", sm: "0px" },
    marginTop: "20px",
  },
  infoSectionImageBox: {
    width: { xs: "85%", sm: "100%", md: "85%", lg: "50%", xl: "40%" },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  infoSectionImage: {
    width: "100%",
    height: "auto",
    zIndex: 1,
  },
  infoSectionTextBox: {
    width: { xs: "95%", sm: "40%" },
    height: { xl: "392px", lg: "392px", md: "392px", sm: "332px", xs: "192px" },
    paddingTop: { xs: "100px", sm: "0px" },
    position: "relative",
    bottom: { xs: 90, sm: 0 },
    zIndex: 0,
    backgroundColor: "#FFC000",
  },
  infoSectionText: {
    padding: { xl: "55px", md: "80px 25px", xs: "0px 25px" },
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: { xl: "28px", lg: "28px", md: "18px", sm: "18px", xs: "18px" },
    lineHeight: { xl: "41px", lg: "41px", md: "24px" },
    textAlign: "left",
  },
};

export default HowItWorks;
