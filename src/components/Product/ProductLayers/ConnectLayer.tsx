import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Third1Img } from "../../../assets/product";

const ConnectLayer = () => {
  return (
    <Grid container spacing={0} alignItems="center" mt={3}>
      {/* Connect section Text Grid Item */}
      <Grid item xs={11} sm={7}>
        <Box
          sx={{
            background: "#FFC000",
            py: { xl: 4, lg: 4, md: 3, sm: 3, xs: 1 },
            pl: { xl: 34, lg: 10, md: 4, sm: 4, xs: 2 },
          }}
        >
          <Typography sx={styles.sectionTitle}>CONNECT</Typography>
        </Box>
        <Box
          sx={{
            width: { xl: "31%", lg: "42%", md: "50%", sm: "60%" },
            marginLeft: { xl: 34, lg: 10, md: 4, sm: 4, xs: 2 },
            marginTop: { xl: 6, lg: 6, md: 3, sm: 3, xs: 3 },
          }}
        >
          <Typography sx={styles.sectionDescription}>
            CIVA connects organizations and community members, and provides
            up-to-date information on relevant government resources.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={5}>
        <Box sx={styles.imageContainer}>
          <Box
            component="img"
            src={Third1Img}
            alt="Connect"
            sx={styles.image}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

const styles = {
  sectionTitle: {
    fontFamily: "Public Sans",
    fontWeight: 800,
    fontSize: {
      xl: "42px",
      lg: "42px",
      md: "24px",
      sm: "24px",
      xs: "23px",
    },
    lineHeight: "49px",
    color: "#FFFFFF",
  },
  sectionDescription: {
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: {
      xl: "24px",
      lg: "24px",
      md: "16px",
      sm: "16px",
      xs: "16px",
    },
    lineHeight: {
      xl: "30px",
      lg: "30px",
      md: "19px",
      sm: "19px",
      xs: "19px",
    },
  },
  sectionContainer: {
    marginTop: {
      xl: "120px",
      lg: "120px",
      md: "70px",
      sm: "70px",
      xs: "50px",
    },
    width: "100vw",
  },
  imageContainer: {
    marginLeft: {
      xl: -35,
      lg: -35,
      md: -15,
      sm: -15,
      xs: 2,
    },
    marginTop: {
      xl: 30,
      lg: 30,
      md: 15,
      sm: 10,
      xs: 3,
    },
  },
  image: {
    width: {
      xl: "818px",
      lg: "818px",
      md: "474px",
      sm: "430px",
      xs: "355px",
    },
    height: "auto",
    zIndex: 1,
  },
};

export default ConnectLayer;
