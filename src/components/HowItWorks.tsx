import React, { FC, ReactNode } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import phoneImage from "../assets/phone.png";
import discussionImage from "../assets/discussion.png";

interface ListItemProps {
  number: number;
  text: ReactNode;
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
    <Box component="img" src={src} alt={alt} sx={styles.image} />
    {button}
  </Box>
);

const InfoSection: FC<InfoSectionProps> = ({ imgSrc, imgAlt, text }) => (
  <Box sx={styles.infoSection}>
    <Box sx={styles.infoSectionImageBox}>
      <Box
        component="img"
        src={imgSrc}
        alt={imgAlt}
        sx={styles.infoSectionImage}
      />
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
    <>
      Organization and community <br /> members join CIVA.
    </>,
    <>
      Organization and community members <br /> discover government resources.
    </>,
    <>
      Organizations and communities <br /> find each other.
    </>,
    <>
      Organizations and community members <br />
      communicate and collaborate through CIVA.
    </>,
    <>
      Organization receives analytics, metrics, and
      <br /> insights based on community feedback to
      <br /> make programs effective.
    </>,
    <>
      Community members have a stronger voice <br /> and greater influence.
    </>,
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
            CIVA enables{" "}
            <Typography component="span" sx={styles.spanBold}>
              multi-layered engagement{" "}
            </Typography>
            and helps organizations and communities{" "}
            <Typography component="span" sx={styles.spanBold}>
              {" "}
              discover
            </Typography>{" "}
            relevant policies and government resources that impact their
            programs.
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
    width: { xs: "90%", md: "56%", lg: "45%", xl: "40%" },
    padding: {
      xl: "0 20px",
      lg: "0 20px",
      md: "0px 0px 30px 60px",
      sm: "0 20px",
      xs: "0 20px",
    },
    marginLeft: { xl: 42, lg: 12, md: 0 },
    marginTop: { xl: "-250px", lg: "-220px", md: "-90px", xs: "41px" },
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "37px",
  },
  listNumber: {
    fontFamily: "Public Sans",
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
    width: { xs: "90%", md: "55%", lg: "45%", xl: "40%" },
    height: "auto",
    display: "flex",
    position: "relative",
    top: { xl: "-55px", lg: "-55px", md: "-15px" },
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "30px",
    flexDirection: { xs: "column", md: "column-reverse" },
  },
  image: {
    width: { xl: "80%", lg: "90%", md: "100%", sm: "100%", xs: "100%" },
    height: "auto",
  },
  infoSection: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#74ADC7",
    padding: { xl: "65px", lg: "65px", md: "50px" },
    paddingTop: { xs: "68px", sm: "0px" },
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
    display: "center",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "left",
    width: { xl: "570px", lg: "570px", md: "493px", xs: "95%", sm: "30%" },
    height: { xl: "392px", lg: "392px", md: "267px", sm: "332px", xs: "202px" },
    paddingTop: { xs: "90px", sm: "0px" },
    position: "relative",
    bottom: { xs: 90, sm: 0 },
    zIndex: 0,
    backgroundColor: "#FFC000",
  },
  infoSectionText: {
    padding: { xl: "55px", md: "0px 35px", xs: "0px 17px" },
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: { xl: "28px", lg: "28px", md: "18px", sm: "18px", xs: "18px" },
    lineHeight: { xl: "41px", lg: "41px", md: "24px" },
  },
  spanBold: {
    fontFamily: "Public Sans",
    fontWeight: 800,
    fontSize: { xl: "28px", lg: "28px", md: "18px", sm: "18px", xs: "18px" },
    lineHeight: { xl: "41px", lg: "41px", md: "24px" },
  },
};

export default HowItWorks;
