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
        <Box sx={{ ...styles.divider, marginTop: "12px" }} />
      </Typography>

      <Box sx={styles.topBox} />
      <Box sx={styles.featureBox}>
        <Typography variant="h5" sx={styles.featureHeader}>
          CIVA OFFERS GOVERNMENT +<br /> COMMUNITY ENGAGEMENT — AND MORE.
        </Typography>
        <Box sx={styles.innerDivider} />
        <Grid
          container
          sx={{
            width: "100%",
            padding: "0px 5px",
          }}
        >
          <Grid item xs={12} sm={6} marginTop="10px">
            <List
              sx={{
                marginLeft: {
                  xl: "0px",
                  lg: "0px",
                  md: "0px",
                  sm: "0px",
                  xs: "0px",
                },
                width: {
                  xl: "105%",
                  lg: "105%",
                  md: "107%",
                  sm: "95%",
                  xs: "100%",
                },
                padding: "0px !important",
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
                        sm: "14px",
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
                marginLeft: {
                  xl: "20px",
                  lg: "20px",
                  md: "20px",
                  sm: "20px",
                  xs: "0px",
                },
                width: {
                  xl: "105%",
                  lg: "105%",
                  md: "108%",
                  sm: "95%",
                  xs: "100%",
                },
                padding: "0px !important",
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
                        sm: "14px",
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
              fontSize: {
                xl: "28px",
                lg: "28px",
                sm: "22px",
                md: "22px",
                xs: "20px",
              },
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
              fontSize: {
                xs: "20px",
                sm: "22px",
                md: "22px",
                lg: "28px",
                xl: "28px",
              },
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
            sm: "-150px",
            xs: "-90px",
          },
        }}
      >
        <Typography variant="h3" sx={styles.header}>
          HOW IT WORKS
        </Typography>
        <Box sx={styles.divider} />
        <ProductTab />
      </Box>
    </Container>
  );
};

const styles = {
  fourthSection: {
    backgroundColor: "#374957",
    paddingTop: {
      xs: "50px",
      sm: "50px",
      md: "50px",
      lg: "50px",
      xl: "50px",
    },
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "100vw",
    gap: "50px",
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
    textAlign: "center",
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
    display: "flex",
    backgroundColor: "#2E86AB",
    width: {
      xs: "226px",
      sm: "329px", //buraya bak son kez
      md: "329px",
      lg: "429px",
      xl: "439px",
    },
    height: { xl: "305px", lg: "305px", md: "235px", sm: "235px", xs: "185px" },
    alignContent: "flex-end",
    position: "absolute",
    zIndex: 1,
    top: {
      xs: "170px",
      sm: "165px",
      md: "190px",
      lg: "220px",
      xl: "190px",
    },
    left: {
      xs: "auto",
      sm: "auto",
    },

    right: {
      xs: "5px",
      sm: "10px",
      md: "10px",
      lg: "35px",
      xl: "270px",
    },
    // marginTop: { xl: "55px", lg: "85px", md: "60px", xs: "40px" },
  },
  featureBox: {
    width: {
      sm: "92%",
      md: "92%",
      lg: "87%",
      xl: "65%",
    },
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    height: "100%",
    alignItems: "center",
    padding: {
      xl: "30px 35px",
      lg: "30px 35px",
      md: "30px 35px",
      sm: "30px 35px",
      xs: "20px 15px",
    },
    backgroundColor: "#000000",
    color: "#FFFFFF",
    borderRadius: "5px",
    marginTop: { xl: "35px", lg: "60px", md: "10px", sm: "10px", xs: "10px" },

    // position: "relative",
    zIndex: 2,
  },
  innerDivider: {
    height: "10px !important",
    backgroundColor: "#FFC000",
    width: "100%",
  },

  featureHeader: {
    width: { xl: "100%", lg: "100%", md: "100%", sm: "100%", xs: "92%" },
    padding: {
      xl: "0px 0px",
      lg: "0px 0px",
      md: "0px 0px",
      sm: "0px 0px",
      xs: "20px 0px 0px 0px",
    },
    lineHeight: { xl: "30px", lg: "36px", xs: "22px" },
    fontFamily: "Public Sans",
    fontWeight: 900,
    fontSize: { xl: "28px", lg: "28px", md: "17px", sm: "17px", xs: "17px" },
    textAlign: "left",
    marginLeft: { sm: 2, xs: 0 },
    marginBottom: { sm: 4, xs: 2 },
  },
  listItem: {
    borderBottom: "1px solid #FFFFFF",
    width: {
      xs: "100%",
      sm: "105%",
      md: "90%",
      lg: "90%",
      xl: "90%",
    },
    padding: {
      xs: "0px",
      sm: "-100px",
      md: "0px",
      lg: "10px 5px",
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
    display: "flex",
    alignItems: "flex-end",
    textAlign: "left",
    backgroundColor: "#FFC000",
    borderRadius: 0,
    width: {
      xs: "380px",
      sm: "80%",
      md: "750px",
      lg: "1102px",
      xl: "1102px",
    },
    height: {
      xs: "302px",
      sm: "450px",
      md: "430px",
      lg: "580px",
      xl: "585px",
    },

    top: {
      xs: "-140px",
      sm: "-260px",
      md: "-240px",
      lg: "-385px",
      xl: "-400px",
    },
    position: "relative",
    zIndex: 1,
    marginLeft: {
      xs: "0%",
      sm: "-24%",
      md: "-250px",
      lg: "-280px",
      xl: "-330px",
    },
  },
  bottomText: {
    width: { xl: "70%", lg: "70%", md: "80%", sm: "80%", xs: "94%" },
    marginLeft: { xl: "70px", lg: "65px", md: "25px", sm: "25px", xs: "17px" },
    marginBottom: {
      xl: "60px",
      lg: "60px",
      md: "65px",
      sm: "35px",
      xs: "35px",
    },
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
