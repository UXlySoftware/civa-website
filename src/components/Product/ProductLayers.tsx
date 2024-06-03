import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Third1Img, Third2Img, Third3Img } from "../../assets/product";

const ProductLayers = () => {
  return (
    <Box
      sx={{
        maxWidth: { xs: "97vw", sm: "100%" },
        marginBottom: { xl: 30, lg: 32, xs: -13 },
      }}
    >
      {/* Connect Section */}
      <Box
        sx={{
          ...connectStyles.section,
          textAlign: "left",
          marginTop: {
            xl: "120px",
            lg: "120px",
            md: "70px",
            sm: "70px",
            xs: "50px",
          },
        }}
        id="connect"
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6} md={6} sx={connectStyles.textContainer}>
            <Box sx={connectStyles.headerContainer}>
              <Typography variant="h5" sx={connectStyles.sectionHeader}>
                CONNECT
              </Typography>
            </Box>
            <Typography sx={connectStyles.sectionDescription}>
              {/* CIVA connects organizations <br />
              and community members, <br />
              and provides up-to-date <br />
              information on relevant <br />
              government resources. */}
              CIVA connects organizations and community members, and provides
              up-to-date information on relevant government resources.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6} sx={connectStyles.imageContainer}>
            <Box
              component="img"
              src={Third1Img}
              alt="Connect"
              sx={connectStyles.image}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Communicate Section */}
      <Box
        sx={{
          ...communicateStyles.section,
          textAlign: "left",
          marginTop: {
            xl: "200px",
            lg: "200px",
            md: "120px",
            sm: "120px",
            xs: "-100px",
          },
        }}
        id="communicate"
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sx={communicateStyles.imageContainer}>
            <Box
              component="img"
              src={Third2Img}
              alt="Communicate"
              sx={communicateStyles.image}
            />
          </Grid>
          <Grid item xs={12} md={6} sx={communicateStyles.textContainer}>
            <Typography sx={communicateStyles.sectionDescription}>
              CIVA provides an integrated <br /> platform and suite of tools
              <br />
              for communication,
              <br /> government outreach, and <br /> community engagement.
            </Typography>
          </Grid>
        </Grid>
        <Box sx={communicateStyles.headerContainer}>
          <Typography variant="h5" sx={communicateStyles.sectionHeader}>
            COMMUNICATE
          </Typography>
        </Box>
      </Box>

      {/* Collaborate Section */}
      <Box
        sx={{
          ...collaborateStyles.section,
          textAlign: "left",
          marginTop: { xl: "200px", lg: "200px", md: "10px", sm: "-100px" },
        }}
        id="collaborate"
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6} sx={collaborateStyles.textContainer}>
            <Box sx={collaborateStyles.headerContainer}>
              <Typography variant="h5" sx={collaborateStyles.sectionHeader}>
                COLLABORATE
              </Typography>
            </Box>
            <Typography sx={collaborateStyles.sectionDescription}>
              CIVA provides a single <br />
              source for feedback, data, <br />
              and measurable insights to <br />
              assess program results and <br />
              provide metrics for future <br />
              grant proposals.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            sx={collaborateStyles.imageContainer}
          >
            <Box
              component="img"
              src={Third3Img}
              alt="Collaborate"
              sx={collaborateStyles.image}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

// Styles for Connect Section
const connectStyles = {
  section: {
    textAlign: "left",
    display: "flex",
    position: "relative",
    marginBottom: "160px",
  },
  textContainer: {
    alignSelf: "flex-start",
  },
  headerContainer: {
    backgroundColor: "#FFC000",
    width: { xl: "90%", lg: "100%", md: "115%", sm: "120%", xs: "90%" },
    height: { xl: "109px", lg: "109px", md: "109px", sm: "109px", xs: "64px" },
    alignItems: "center",
    display: "flex",
    paddingLeft: {
      xl: "280px",
      lg: "100px",
      md: "100px",
      sm: "0px",
      xs: "0px",
    },
  },
  sectionHeader: {
    fontFamily: "Public Sans",
    fontWeight: 800,
    fontSize: { xl: "42px", lg: "42px", md: "24px", sm: "24px", xs: "24px" },
    color: "#FFF",
    marginLeft: { xl: 2, lg: 0, sm: 3, xs: "20px" },
  },
  sectionDescription: {
    width: { xs: "80%", xl: "36%", lg: "50%", md: "40%", sm: "50%" },
    paddingLeft: { xl: 37, lg: 13, md: 16, sm: 3, xs: 3 },
    paddingTop: { xl: "52px", xs: "30px" },
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: { xl: "24px", lg: "24px", md: "16px", sm: "16px", xs: "16px" },
    lineHeight: { xl: "30px", lg: "30px", md: "20px", sm: "20px", xs: "20px" },
  },
  imageContainer: {
    position: "relative",
    top: { xs: "0px", sm: "70px", md: "70px", lg: "70px", xl: "70px" },
    left: { xs: "10px", sm: "-110px", md: "-35px", lg: "-160px", xl: "-160px" },
  },
  image: {
    width: { xl: "818px", lg: "818px", md: "474px", sm: "474px", xs: "364px" },
    height: "auto",
  },
};

// Styles for Communicate Section
const communicateStyles = {
  section: {
    textAlign: "left",
    display: "flex",
    position: "relative",
    marginBottom: "160px",
  },
  textContainer: {
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
  headerContainer: {
    backgroundColor: "#76848A",
    width: { xl: "100%", lg: "100%", md: "95%", sm: "85%", xs: "90%" },
    height: { xl: "109px", lg: "109px", md: "109px", sm: "109px", xs: "64px" },
    alignItems: "center",
    display: "flex",
    paddingLeft: { lg: "100px", md: "100px", xs: "0px" },
    textAlign: "right",
    marginLeft: {
      xs: "-389px",
      sm: "-300px",
      md: "-150px",
      lg: "-150px",
      xl: "0px",
    },
  },
  sectionHeader: {
    fontFamily: "Public Sans",
    fontWeight: 800,
    fontSize: { xl: "42px", lg: "42px", md: "24px", sm: "24px", xs: "24px" },
    color: "#FFF",
    marginLeft: {
      xl: "295px",
      lg: "295px",
      md: "295px",
      sm: "295px",
      xs: "29px",
    },
  },
  sectionDescription: {
    paddingLeft: 1,
    textAlign: {
      xl: "right",
      lg: "right",
      md: "right",
      sm: "right",
      xs: "left",
    },
    paddingTop: { xl: "52px", xs: "30px" },
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: { xl: "24px", lg: "24px", md: "16px", sm: "16px", xs: "16px" },
    lineHeight: { xl: "30px", lg: "30px", md: "20px", sm: "20px", xs: "20px" },
  },
  imageContainer: {
    position: "relative",
    top: { xs: "100px", sm: "65px", md: "65px", lg: "65px", xl: "65px" },
    left: { xs: "10px", sm: "70px", md: "70px", lg: "70px", xl: "270px" },
  },
  image: {
    width: { xl: "818px", lg: "818px", md: "474px", sm: "474px", xs: "364px" },
    height: "auto",
  },
};

// Styles for Collaborate Section
const collaborateStyles = {
  section: {
    textAlign: "left",
    display: "flex",
    position: "relative",
    marginBottom: "160px",
  },
  textContainer: {
    alignSelf: "flex-start",
  },
  headerContainer: {
    backgroundColor: "#2E86AB",
    width: { xl: "90%", lg: "100%", md: "105%", sm: "65%", xs: "90%" },
    height: { xl: "109px", lg: "109px", md: "109px", sm: "109px", xs: "64px" },
    alignItems: "center",
    display: "flex",
    paddingLeft: { xl: "250px", lg: "75px", md: "60px", xs: "0px" },
  },
  sectionHeader: {
    fontFamily: "Public Sans",
    fontWeight: 800,
    fontSize: { xl: "42px", lg: "42px", md: "24px", sm: "24px", xs: "24px" },
    color: "#FFF",
    marginLeft: { xl: 2, lg: 0, sm: 3, xs: "20px" },
  },
  sectionDescription: {
    paddingLeft: { xl: 34, lg: 10, md: 10, sm: 3, xs: 2.5 },
    paddingTop: { xl: "52px", xs: "35px" },
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: { xl: "24px", lg: "24px", md: "16px", sm: "16px", xs: "16px" },
    lineHeight: { xl: "30px", lg: "30px", md: "20px", sm: "20px", xs: "20px" },
  },
  imageContainer: {
    position: "relative",
    top: { xs: "0px", sm: "-200px", md: "60px", lg: "70px", xl: "70px" },
    left: { xs: "10px", sm: "310px", md: "-50px", lg: "-160px", xl: "-160px" },
    marginBottom: { xl: 0, lg: 0, md: 7, sm: -10, xs: 0 },
  },
  image: {
    width: { xl: "818px", lg: "818px", md: "474px", sm: "474px", xs: "364px" },
    height: "auto",
  },
};

export default ProductLayers;
