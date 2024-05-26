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
import Hero from "./Hero";
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
      {/* Hero */}
      <Hero />

      {/* Second section */}
      <Box sx={styles.imageBox}>
        <Box component="img" src={SecondImg} alt="image" sx={styles.image} />
      </Box>

      {/* Third section */}
      <Container maxWidth="lg">
        {/* Connect */}
        <Box sx={styles.section} id="connect">
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6} sx={styles.titleDescription}>
              <Box sx={styles.connect}>
                <Typography variant="h5" sx={styles.sectionHeader}>
                  CONNECT
                </Typography>
              </Box>
              <Typography sx={styles.sectionDescription}>
                CIVA connects organizations and community members, and provides
                up-to-date information on relevant government resources.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={styles.imageContainer1}>
              <img src={Third1Img} alt="Connect" style={styles.image1} />
            </Grid>
          </Grid>
        </Box>

        {/* Communicate */}
        <Box sx={styles.section} id="communicate">
          <Grid container spacing={2} alignItems="center">
            <Grid
              item
              xs={12}
              md={6}
              order={{ xs: 2, md: 1 }}
              sx={styles.imageContainerReverse}
            >
              <img src={Third2Img} alt="Communicate" style={styles.image1} />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              order={{ xs: 1, md: 2 }}
              sx={styles.titleDescription}
            >
              <Box sx={styles.communicate}>
                <Typography variant="h5" sx={styles.sectionHeader}>
                  COMMUNICATE
                </Typography>
              </Box>
              <Typography sx={styles.sectionDescription}>
                CIVA provides an integrated platform and suite of tools for
                communication, government outreach, and community engagement.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Collaborate */}
        <Box sx={styles.section} id="collaborate">
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6} sx={styles.titleDescription}>
              <Box sx={styles.collaborate}>
                <Typography variant="h5" sx={styles.sectionHeader}>
                  COLLABORATE
                </Typography>
              </Box>
              <Typography sx={styles.sectionDescription}>
                CIVA provides a single source for feedback, data, and measurable
                insights to assess program results and provide metrics for
                future grant proposals.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={styles.imageContainer2}>
              <img src={Third3Img} alt="Collaborate" style={styles.image1} />
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Fourth section */}
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

        {/* Fifth section */}
        <Typography variant="h3" sx={styles.header}>
          HOW IT WORKS
        </Typography>
        <Box sx={styles.divider} />

        <Box
          sx={{
            width: "100%",
            margin: "auto",
          }}
        >
          <ProductTab />
        </Box>

        {/* Sixth section */}
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
    mt: "-60px",
    mb: "50px",
  },
  image: {
    position: "relative",
    objectFit: "center",
    width: {
      xs: "150%",
      sm: "100%",
      md: "100%",
      lg: "100%",
    },
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
  },
  sectionHeader: {
    color: "#FFF",
    fontWeight: "bold",
  },
  sectionDescription: {
    padding: {
      xs: "10px",
      sm: "20px",
      md: "30px",
      lg: "120px",
      xl: "120px",
    },
    textAlign: "left",
    fontWeight: "700",
  },
  sectionContent: {
    padding: "10px",
  },
  titleDescription: {
    alignSelf: "flex-start",
  },
  imageContainer1: {
    position: "relative",
    top: {
      xs: "0px",
      sm: "0px",
      md: "-30px",
      lg: "-10px",
      xl: "-10px",
    },
    left: {
      xs: "0px",
      sm: "0px",
      md: "-80px",
      lg: "-70px",
      xl: "-70px",
    },
  },
  imageContainer2: {
    position: "relative",
    top: {
      xs: "0px",
      sm: "0px",
      md: "-30px",
      lg: "-10px",
      xl: "-10px",
    },
    left: {
      xs: "0px",
      sm: "0px",
      md: "-80px",
      lg: "-70px",
      xl: "-70px",
    },
  },
  imageContainerReverse: {
    position: "relative",
    top: {
      xs: "0px",
      sm: "0px",
      md: "-10px",
      lg: "-10px",
      xl: "-10px",
    },
    right: {
      xs: "0px",
      sm: "0px",
      md: "-50px",
      lg: "-70px",
      xl: "-70px",
    },
  },
  image1: {
    width: "100%",
    height: "auto",
  },
  connect: {
    backgroundColor: "#FFC000",
    padding: "10px",
  },
  communicate: {
    backgroundColor: "#76848A",
    padding: "10px",
  },
  collaborate: {
    backgroundColor: "#2E86AB",
    padding: "10px",
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
    fontWeight: "900",
    fontSize: {
      xs: "1.5rem",
      sm: "1.5rem",
      md: "2.5rem",
      lg: "2.5rem",
      xl: "2.5rem",
    },
    textAlign: "center",
  },
  divider: {
    textAlign: "center",
    marginBottom: "20px",
    width: {
      xs: "300px",
      sm: "300px",
      md: "500px",
      lg: "500px",
      xl: "500px",
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
