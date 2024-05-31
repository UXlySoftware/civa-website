import React from "react";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import ProductHero from "./ProductHero";
import { SecondImg, Third1Img, Third2Img, Third3Img } from "../assets/product";
import CheckIcon from "@mui/icons-material/Check";
import ProductTab from "./ProductTab";
import JoinCommunity from "./JoinCommunity";

const features = [
  {
    left: "Government Contact Database",
    right: "Community Engagement Tools, Including Metrics",
  },
  {
    left: "Bill and Legislative Tracking",
    right: "In-App Collaboration Tools",
  },
  { left: "Analytics and Reporting", right: "Advanced Communication Tools" },
  {
    left: "Advanced Management / Campaign Tools",
    right: "Expert Guidance / Advisor Network Access",
  },
  {
    left: "Predictive Algorithm & Network Theory",
    right: "Integration with Local Resources and Organizations",
  },
];

const ProductPage: React.FC = () => {
  return (
    <>
      <ProductHero />

      <Box sx={styles.imageBox}>
        <Box component="img" src={SecondImg} alt="image" sx={styles.image} />
      </Box>

      <Box sx={{ maxWidth: { xs: "97vw", sm: "100%" } }}>
        <Box
          sx={{ ...styles.section, textAlign: "left", marginTop: "120px" }}
          id="connect"
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6} md={6} sx={styles.titleDescription}>
              <Box
                sx={{
                  ...styles.connect,
                  paddingLeft: {
                    xl: "280px",
                    lg: "100px",
                    md: "100px",
                    sm: "100px",
                    xs: "0px",
                  },
                }}
              >
                <Typography variant="h5" sx={styles.sectionHeader}>
                  CONNECT
                </Typography>
              </Box>
              <Typography sx={styles.sectionDescription}>
                CIVA connects organizations <br />
                and community members,
                <br /> and provides up-to-date <br /> information on relevant{" "}
                <br />
                government resources.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6} sx={styles.imageContainer1}>
              <Box
                component="img"
                src={Third1Img}
                alt="Connect"
                sx={styles.image1}
              />
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            ...styles.section,
            textAlign: "left",
            marginTop: {
              xl: "120px",
              lg: "120px",
              md: "120px",
              sm: "120px",
              xs: "-100px",
            },
          }}
          id="communicate"
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} sx={styles.imageContainer2}>
              <Box
                component="img"
                src={Third2Img}
                alt="communicate"
                sx={styles.image2}
              />
            </Grid>
            <Grid item xs={12} md={6} sx={styles.titleDescription2}>
              <Typography
                sx={{
                  ...styles.sectionDescription2,
                  paddingLeft: 0,
                  textAlign: {
                    xl: "right",
                    lg: "right",
                    md: "right",
                    sm: "right",
                    xs: "left",
                  },
                }}
              >
                CIVA provides an integrated <br /> platform and suite of tools
                <br />
                for communication,
                <br /> government outreach, and <br /> community engagement.
              </Typography>
            </Grid>
          </Grid>

          <Box
            sx={{
              ...styles.communicate,
              paddingLeft: { lg: "100px", md: "100px", xs: "0px" },
              textAlign: "right",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                ...styles.sectionHeader,
                marginLeft: {
                  xl: "295px",
                  lg: "295px",
                  md: "295px",
                  sm: "295px",
                  xs: "20px",
                },
              }}
            >
              COMMUNICATE
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            ...styles.section,
            textAlign: "left",
            marginTop: { xl: "10px", lg: "10px", md: "10px", sm: "-100px" },
          }}
          id="collaborate"
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6} sx={styles.titleDescription}>
              <Box
                sx={{
                  ...styles.collaborate,
                  paddingLeft: {
                    xl: "280px",
                    lg: "100px",
                    md: "100px",
                    xs: "0px",
                  },
                }}
              >
                <Typography variant="h5" sx={styles.sectionHeader}>
                  COLLABORATE
                </Typography>
              </Box>
              <Typography sx={styles.sectionDescription}>
                CIVA provides a single
                <br /> source for feedback, data, <br /> and measurable insights
                to <br />
                assess program results and <br />
                provide metrics for future <br /> grant proposals.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={styles.imageContainer3}>
              <Box
                component="img"
                src={Third3Img}
                alt="Collaborate"
                sx={styles.image1}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Container sx={styles.fourthSection} maxWidth={false}>
        <Typography variant="h3" sx={styles.header}>
          CIVA STANDS ALONE
        </Typography>
        <Box sx={styles.divider} />

        <Box sx={styles.topBox}></Box>
        <Box sx={styles.featureBox}>
          <Typography variant="h5" sx={styles.featureHeader}>
            CIVA OFFERS GOVERNMENT + COMMUNITY ENGAGEMENT — AND MORE.
          </Typography>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <List>
                {features.map((feature, index) => (
                  <ListItem key={index} sx={styles.listItem}>
                    <ListItemText primary={feature.left} />
                    <ListItemIcon sx={styles.checkIconContainer}>
                      <CheckIcon sx={styles.checkIcon} />
                    </ListItemIcon>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} sm={6}>
              <List>
                {features.map((feature, index) => (
                  <ListItem key={index} sx={styles.listItem}>
                    <ListItemText primary={feature.right} />
                    <ListItemIcon sx={styles.checkIconContainer}>
                      <CheckIcon sx={styles.checkIcon} />
                    </ListItemIcon>
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Box>
        <Paper elevation={3} sx={styles.bottomBox}>
          <Typography sx={styles.bottomText}>
            CIVA offers more than traditional government and community
            engagement tools, combining the benefits of both into a single
            integrated platform.
          </Typography>
        </Paper>

        <Typography variant="h3" sx={styles.header}>
          HOW IT WORKS
        </Typography>
        <Box sx={styles.divider} />

        <Box sx={{ width: "100%", margin: "auto" }}>
          <ProductTab />
        </Box>

        <JoinCommunity />
      </Container>
    </>
  );
};

const styles = {
  // Second section
  imageBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mt: { xs: "-75px" },
    mb: "50px",
    width: "100%",
    maxWith: "100%",
  },
  image: {
    position: "relative",
    objectFit: "center",
    width: {
      xs: "100%",
      sm: "100%",
      md: "100%",
      lg: "100%",
    },
    height: "auto",
  },
  // Third section
  section: {
    textAlign: {
      xs: "left",
      sm: "left",
      md: "center",
      lg: "center",
      xl: "center",
    },
    display: "flex",
    position: "relative",
    marginBottom: "160px",
  },
  sectionHeader: {
    fontFamily: "Public Sans",
    fontWeight: 800,
    fontSize: { xl: "42px", lg: "42px", md: "24px", sm: "24px", xs: "24px" },
    color: "#FFF",
    marginLeft: { sm: 3, xs: "20px" },
  },
  sectionDescription: {
    paddingLeft: {
      xs: "20px",
      sm: "20px",
      md: "30px",
      lg: "78px",
      xl: "280px",
    },
    paddingTop: {
      xl: "52px",
      xs: "15px",
    },
    textAlign: "left",
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: { xl: "24px", lg: "24px", md: "16px", sm: "16px", xs: "16px" },
    lineHeight: { xl: "30px", lg: "30px", md: "20px", sm: "20px", xs: "20px" },
  },
  sectionDescription2: {
    paddingLeft: {
      xs: "20px",
      sm: "20px",
      md: "30px",
      lg: "78px",
      xl: "280px",
    },
    paddingTop: {
      xl: "52px",
      xs: "15px",
    },
    textAlign: "left",
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: { xl: "24px", lg: "24px", md: "16px", sm: "16px", xs: "16px" },
    lineHeight: { xl: "30px", lg: "30px", md: "20px", sm: "20px", xs: "20px" },
  },
  titleDescription: {
    alignSelf: "flex-start",
  },
  titleDescription2: {
    position: "relative",
    right: {
      xl: "-730px",
      lg: "-580px",
      md: "-450px",
      sm: "-200px",
      xs: "-10px",
    },
    top: { xl: "100px", lg: "120px", md: "120px", sm: "-150px", xs: "80px" },
  },
  imageContainer1: {
    position: "relative",
    top: {
      xs: "0px",
      sm: "70px",
      md: "70px",
      lg: "70px",
      xl: "70px",
    },
    left: {
      xs: "10px",
      sm: "-110px",
      md: "-160px",
      lg: "-160px",
      xl: "-160px",
    },
  },
  imageContainer2: {
    position: "relative",
    top: {
      xs: "100px",
      sm: "65px",
      md: "65px",
      lg: "65px",
      xl: "65px",
    },
    left: {
      xs: "10px",
      sm: "70px",
      md: "70px",
      lg: "70px",
      xl: "270px",
    },
  },
  imageContainer3: {
    position: "relative",
    top: {
      xs: "0px",
      sm: "-200px",
      md: "70px",
      lg: "70px",
      xl: "70px",
    },
    left: {
      xs: "10px",
      sm: "310px",
      md: "-160px",
      lg: "-160px",
      xl: "-160px",
    },
  },
  image1: {
    width: { xl: "818px", lg: "818px", md: "474px", sm: "474px", xs: "364px" },
    height: "auto",
  },
  image2: {
    width: { xl: "818px", lg: "818px", md: "474px", sm: "474px", xs: "364px" },
    height: "auto",
  },
  connect: {
    backgroundColor: "#FFC000",
    width: { xl: "90%", lg: "100%", md: "95%", sm: "85%", xs: "90%" },
    height: { xl: "109px", lg: "109px", md: "109px", sm: "109px", xs: "64px" },
    alignItems: "center",
    display: "flex",
  },
  communicate: {
    backgroundColor: "#76848A",
    width: { xl: "100%", lg: "100%", md: "95%", sm: "85%", xs: "90%" },
    height: { xl: "109px", lg: "109px", md: "109px", sm: "109px", xs: "64px" },
    marginLeft: { xs: "-389px", sm: "-300px", md: "-150px" },
    alignItems: "center",
    display: "flex",
  },
  collaborate: {
    backgroundColor: "#2E86AB",
    width: { xl: "90%", lg: "100%", md: "95%", sm: "65%", xs: "90%" },
    height: { xl: "109px", lg: "109px", md: "109px", sm: "109px", xs: "64px" },
    alignItems: "center",
    display: "flex",
  },
  // Fourth section
  fourthSection: {
    backgroundColor: "#374957",
    padding: {
      xs: "0px",
      sm: "0px",
      md: "20px",
      lg: "50px",
      xl: "50px",
    },
    paddingTop: {
      xs: "50px",
      sm: "50px",
      md: "50px",
      lg: "50px",
      xl: "50px",
    },
  },
  header: {
    color: "#F9FCFF",
    fontFamily: "Public Sans",
    fontWeight: 900,
    fontSize: {
      xs: "28px",
      sm: "28px",
      md: "52px",
      lg: "52px",
      xl: "52px",
    },
    textAlign: "center",
  },
  divider: {
    textAlign: "center",
    marginBottom: "20px",
    width: {
      xs: "379px",
      sm: "379px",
      md: "660px",
      lg: "660px",
      xl: "660px",
    },
    margin: "auto",
    backgroundColor: "#FFC000",
    height: "10px",
  },
  featureBox: {
    backgroundColor: "#000000",
    color: "#FFFFFF",
    padding: "20px",
    borderRadius: "5px",
    marginBottom: "20px",
    marginTop: "40px",
    marginLeft: "40px",
    marginRight: "40px",
    position: "relative",
    zIndex: 2,
  },
  featureHeader: {
    marginBottom: "10px",
    borderBottom: "10px solid #FFC000",
    paddingBottom: "10px",
    fontWeight: "800",
    fontSize: {
      xs: "1rem",
      sm: "1rem",
      md: "1.5rem",
      lg: "1.5rem",
      xl: "1.5rem",
    },
  },
  listItem: {
    borderBottom: "1px solid #FFFFFF",
    width: {
      xs: "100%",
      sm: "100%",
      md: "80%",
      lg: "90%",
      xl: "90%",
    },
    padding: {
      xs: "0px",
      sm: "0px",
      md: "10px",
    },
  },
  checkIconContainer: {
    minWidth: "0px",
  },
  checkIcon: {
    color: "#FFD700",
  },
  topBox: {
    backgroundColor: "#2E86AB",
    width: {
      xs: "45%",
      sm: "45%",
      md: "30%",
      lg: "15%",
      xl: "15%",
    },
    height: "200px",
    alignContent: "flex-end",
    position: "absolute",
    zIndex: 1,
    right: {
      xs: "20px",
      sm: "20px",
      md: "40px",
      lg: "60px",
      xl: "60px",
    },
    marginTop: "20px",
  },
  bottomBox: {
    backgroundColor: "#FFC000",
    padding: "20px",
    textAlign: "center",
    marginTop: "20px",
    width: {
      xs: "80%",
      sm: "80%",
      md: "60%",
      lg: "50%",
      xl: "50%",
    },
    height: {
      xs: "180px",
      sm: "180px",
      md: "300px",
      lg: "280px",
      xl: "280px",
    },
    alignContent: "flex-end",
    top: {
      xs: "-100px",
      sm: "-100px",
      md: "-150px",
      lg: "-200px",
      xl: "-200px",
    },
    position: "relative",
    zIndex: 1,
    marginLeft: {
      xs: "5%",
      sm: "5%",
      md: "2%",
      lg: "0",
      xl: "0",
    },
  },
  bottomText: {
    color: "#000000",
    fontSize: {
      xs: "1rem",
      sm: "1rem",
      md: "1rem",
      lg: "1.4rem",
      xl: "1.4rem",
    },
  },
};

export default ProductPage;
