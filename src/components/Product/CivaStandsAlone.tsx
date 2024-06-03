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
import CheckIcon from "@mui/icons-material/Check";
import ProductTab from "./ProductTab";
import JoinCommunity from "../JoinCommunity";

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

const CivaStandsAlone = () => {
  return (
    <Container sx={styles.fourthSection} maxWidth={false}>
      <Typography variant="h3" sx={styles.header}>
        CIVA STANDS ALONE
      </Typography>
      <Box sx={styles.divider} />

      <Box sx={styles.topBox} />
      <Box sx={styles.featureBox}>
        <Typography variant="h5" sx={styles.featureHeader}>
          CIVA OFFERS GOVERNMENT +<br /> COMMUNITY ENGAGEMENT — AND MORE.
        </Typography>
        <Box
          sx={{
            ...styles.divider,
            width: {
              xs: "290px !important",
              sm: "700px !important",
              md: "900px !important",
              lg: "1160px !important",
              xl: "1160px !important",
            },
            height: "10px !important",
          }}
        />
        <Grid
          container
          sx={{
            // width: "95%",
            // margin: "0 auto 40px auto",
            padding: "0px 0px 30px 0px",
          }}
        >
          <Grid item xs={12} sm={6} marginTop="10px">
            <List
              sx={{
                marginLeft: "35px",
                width: {
                  xl: "100%",
                  lg: "100%",
                  md: "100%",
                  sm: "90%",
                  xs: "90%",
                },
              }}
            >
              {features.map((feature, index) => (
                <ListItem key={index} sx={styles.listItem}>
                  <ListItemText
                    primary={feature.left}
                    primaryTypographyProps={{
                      fontSize: {
                        xl: "19px",
                        lg: "19px",
                        md: "16px",
                        sm: "16px",
                        xs: "13px",
                      },

                      fontFamily: "Inter",
                      fontWeight: 600,
                      marginTop: "12px",
                    }}
                  />
                  <ListItemIcon sx={styles.checkIconContainer}>
                    <CheckIcon sx={styles.checkIcon} />
                  </ListItemIcon>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} sm={6} marginTop="10px">
            <List
              sx={{
                marginLeft: "15px",
                width: {
                  xl: "100%",
                  lg: "100%",
                  md: "100%",
                  sm: "90%",
                  xs: "90%",
                },
              }}
            >
              {features.map((feature, index) => (
                <ListItem key={index} sx={styles.listItem}>
                  <ListItemText
                    primary={feature.right}
                    primaryTypographyProps={{
                      fontSize: {
                        xl: "19px",
                        lg: "19px",
                        md: "16px",
                        sm: "16px",
                        xs: "13px",
                      },

                      fontFamily: "Inter",
                      fontWeight: 600,
                      marginTop: "12px",
                    }}
                  />
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
          <Typography
            sx={{
              fontSize: { xl: "28px", lg: "28px", xs: "20px" },
              fontWeight: 900,
              display: "inline",
              fontFamily: "Public Sans",
            }}
          >
            CIVA
          </Typography>{" "}
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: { xl: "28px", lg: "28px", xs: "20px" },
              display: "inline",
            }}
          >
            offers more than traditional government and community engagement
            tools,
          </Typography>{" "}
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: { xs: "20px", sm: "28px" },
              display: "inline",
              fontFamily: "Public Sans",
            }}
          >
            combining the benefits of both into a single integrated platform.
          </Typography>
        </Typography>
      </Paper>

      <Box
        sx={{
          width: "100%",
          marginTop: {
            xl: "-260px",
            lg: "-260px",
            md: "-100px",
            sm: "0px",
            xs: "-50px",
          },
        }}
      >
        <Typography variant="h3" sx={styles.header}>
          HOW IT WORKS
        </Typography>
        <Box sx={styles.divider} />
        <ProductTab />
      </Box>

      <JoinCommunity />
    </Container>
  );
};

const styles = {
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
    marginBottom: "12px",
  },
  divider: {
    marginBottom: { xl: "0px" },
    width: {
      xs: "349px",
      sm: "379px",
      md: "660px",
      lg: "660px",
      xl: "660px",
    },
    margin: "auto",
    backgroundColor: "#FFC000",
    height: "16px",
  },
  topBox: {
    backgroundColor: "#2E86AB",
    width: {
      xs: "226px",
      sm: "329px",
      md: "329px",
      lg: "429px",
      xl: "439px",
    },
    height: { xl: "305px", lg: "305px", md: "235px", sm: "305px", xs: "185px" },
    alignContent: "flex-end",
    position: "absolute",
    zIndex: 1,
    right: {
      xs: "5px",
      sm: "10px",
      md: "10px",
      lg: "35px",
      xl: "270px",
    },
    marginTop: { xl: "55px", lg: "85px", md: "60px", sm: "60px", xs: "40px" },
  },
  featureBox: {
    margin: "0 auto 40px auto",
    width: {
      xl: "1283px",
      lg: "1283px",
      md: "970px",
      sm: "756px",
      xs: "349px",
    },
    // height: { xl: "530px", lg: "530px", md: "490px", sm: "490px", xs: "auto" },
    backgroundColor: "#000000",
    color: "#FFFFFF",
    borderRadius: "5px",
    marginTop: { xl: "100px", lg: "130px", md: "80px", sm: "80px", xs: "60px" },
    position: "relative",
    zIndex: 2,
  },
  featureHeader: {
    width: { xl: "100%", xs: "75%" },
    padding: {
      xl: "30px 60px",
      lg: "30px 60px",
      md: "30px 60px",
      sm: "30px 60px",
      xs: "30px 30px 12px 30px",
    },
    lineHeight: { xl: "30px", lg: "36px", xs: "22px" },
    fontFamily: "Public Sans",
    fontWeight: 900,
    fontSize: { xl: "28px", lg: "28px", md: "17px", sm: "17px", xs: "17px" },
  },
  listItem: {
    borderBottom: "1px solid #FFFFFF",
    width: {
      xs: "100%",
      sm: "100%",
      md: "90%",
      lg: "90%",
      xl: "90%",
    },
    padding: {
      xs: "0px",
      sm: "0px",
      md: "0px",
      lg: "10px",
    },
  },
  checkIconContainer: {
    minWidth: "0px",
  },
  checkIcon: {
    color: "#FFD700",
    stroke: "#FFD700",
    strokeWidth: 3,
    fontSize: "23px",
  },
  bottomBox: {
    textAlign: "left",
    backgroundColor: "#FFC000",
    borderRadius: 0,
    width: {
      xs: "374px",
      sm: "80%",
      md: "750px",
      lg: "1102px",
      xl: "1102px",
    },
    height: {
      xs: "302px",
      sm: "500px",
      md: "360px",
      lg: "580px",
      xl: "585px",
    },
    alignContent: "flex-end",
    top: {
      xs: "-140px",
      sm: "-290px",
      md: "-190px",
      lg: "-375px",
      xl: "-400px",
    },
    position: "relative",
    zIndex: 1,
    marginLeft: {
      xs: "2%",
      sm: "2%",
      md: "-10px",
      lg: "-20px",
      xl: "200px",
    },
  },
  bottomText: {
    width: { xl: "70%", lg: "70%", md: "80%", sm: "80%", xs: "94%" },
    marginLeft: { xl: "65px", lg: "65px", md: "35px", sm: "25px", xs: "17px" },
    marginBottom: "55px",
    marginTop: { xs: "120px", sm: 0 },
    color: "#000000",
    fontSize: {
      xs: "20px",
      sm: "1rem",
      md: "1rem",
      lg: "28px",
      xl: "28px",
    },
    lineHeight: { xl: "41px", lg: "41px", md: "41px", sm: "41px", xs: "22px" },
  },
};

export default CivaStandsAlone;
