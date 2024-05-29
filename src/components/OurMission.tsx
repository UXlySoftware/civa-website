import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import missionImage from "../assets/missionImage.png";
import akeemImage from "../assets/akeemImage.png";
import jermaineImage from "../assets/jermaineImage.png";
import missionImageMobil from "../assets/missionImageMobil.png";
import SquareIcon from "@mui/icons-material/Square";

const MissionAndBios = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={styles.missionAndBiosContainer}>
      <Box sx={styles.missionTitleBox}>
        <Typography variant="h4" sx={styles.missionTitle}>
          Our Mission{" "}
        </Typography>
      </Box>
      <Box sx={styles.missionContentBox}>
        <Box sx={styles.topRightRectangle} />
        <Box sx={styles.bottomLeftRectangle}>
          <Box sx={styles.textBox}>
            <Typography variant="body1" sx={styles.text}>
              To connect and empower organizations, communities, and individuals
              to take informed action, access funding, and{" "}
              <Typography sx={styles.spanBold}>
                create sustainable social impact.
              </Typography>
            </Typography>
          </Box>
        </Box>
        <Box
          component="img"
          src={isMobile ? missionImageMobil : missionImage}
          alt="Mission"
          sx={styles.missionImage}
        />
      </Box>
      <Box sx={styles.founderTitleBox}>
        <Typography variant="h4" sx={styles.founderTitle}>
          FOUNDER BIOS{" "}
        </Typography>
      </Box>
      <Box sx={styles.foundersContainer}>
        <Card sx={styles.founderCard}>
          <Box
            component="img"
            src={akeemImage}
            alt="Akeem Evans"
            sx={styles.founderImageAkeem}
          />
          <Box sx={styles.divider} />
          <CardContent sx={styles.cardContent}>
            <Typography variant="h5" sx={styles.cardTitle}>
              ACKEEM EVANS
            </Typography>
            <Typography variant="subtitle1" sx={styles.cardSubtitle}>
              Co-Founder and CEO
            </Typography>

            <Box sx={{ borderLeft: "12px solid #2E86AB" }}>
              <Typography variant="body1" sx={styles.cardBody}>
                With an extensive background in public sector leadership as well
                as program and grants management, Akeem is celebrated for his
                global contributions to community development, notably with the
                Peace Corps in Albania and with the Organization for Security
                and Co-operation in Europe.
              </Typography>
              <Typography variant="body1" sx={styles.cardBody}>
                As a leader, he is deeply committed to innovation and using
                technology to spur social change.
              </Typography>
            </Box>
            <Typography variant="body1" sx={styles.listSubheading}>
              Akeem’s experience in this arena includes:
            </Typography>
            <List>
              {[
                "2x Founder",
                "10+ Years of Experience in Politics & Government",
                "U.S. Congressional Staffer",
                "Lead Allocation of $139M in Federal Funding",
                "M.S. Public Policy c/o '24",
              ].map((text, index) => (
                <ListItem key={index} disableGutters>
                  <ListItemIcon sx={styles.listItemIcon}>
                    <SquareIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} sx={styles.listItemText} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
        <Card sx={styles.founderCard}>
          <Box
            component="img"
            src={jermaineImage}
            alt="Jermaine"
            sx={styles.founderImageJermaine}
          />
          <Box sx={styles.divider} />
          <CardContent sx={styles.cardContent}>
            <Typography variant="h5" sx={styles.cardTitle}>
              JERMAINE HARTSFIELD
            </Typography>
            <Typography variant="subtitle1" sx={styles.cardSubtitle}>
              Co-Founder and CEO
            </Typography>
            <Box sx={{ borderLeft: "12px solid #2E86AB" }}>
              <Typography variant="body1" sx={styles.cardBody}>
                Jermaine brings a wealth of experience in organizational
                development and technical analysis to CIVA. Leveraging his
                public and private sector expertise, he is pivotal in shaping
                the operational strategies that drive CIVA’s mission forward.{" "}
              </Typography>
            </Box>
            <Typography variant="body1" sx={styles.listSubheading}>
              <br />
              <br />
              Jermaine’s experience bringing organizations and communities
              together includes:
            </Typography>
            <List>
              {[
                "University Professor: Organizational Dynamics",
                "10+ years Business Development Experience",
                "Board member of Philadelphia Region Organizational Development Network",
                "Community Development Specialist",
                "M.S. in Organizational Development and Leadership",
              ].map((text, index) => (
                <ListItem key={index} disableGutters>
                  <ListItemIcon sx={styles.listItemIcon}>
                    <SquareIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

const styles = {
  missionAndBiosContainer: {
    mt: { xl: 10, lg: 10, md: 7, xs: 75 },
    px: 2,
    height: {
      xl: "408vh",
      lg: "505vh",
      md: "230vh",
      sm: "175vh",
      xs: "650vh",
    },
    marginBottom: {
      xl: "-65%",
      lg: "-85%",
      md: "-95%",
      sm: "0%",
      xs: "-395%",
    },
    backgroundColor: "#374957",
    paddingTop: "6px",
  },
  missionTitleBox: {
    borderBottom: "16px solid #FFC000",
    width: {
      xl: "500px",
      lg: "500px",
      md: "500px",
      sm: "250px",
      xs: "200px",
    },
    margin: {
      xl: "0 auto 109px auto",
      lg: "0 auto 109px auto",
      md: "0 auto 49px auto",
      sm: "0 auto 45px auto",
      xs: "0 auto 45px auto",
    },
    textAlign: "center",
  },
  missionTitle: {
    marginTop: 5,
    fontFamily: "Public Sans",
    fontWeight: 900,
    fontSize: {
      xl: "52px",
      lg: "52px",
      md: "42px",
      sm: "28px",
      xs: "28px",
    },
    lineHeight: {
      xl: "58px",
      lg: "58px",
      md: "46px",
      sm: "36px",
      xs: "36px",
    },
    color: "#fff",
  },
  missionContentBox: {
    position: "relative",
    textAlign: "center",
  },
  missionImage: {
    width: "100%",
    maxWidth: {
      xl: "1209px",
      lg: "1209px",
      md: "736px",
      sm: "640px",
      xs: "340px",
    },
    mt: "25px",
    zIndex: 2,
    position: "relative",
  },
  founderTitleBox: {
    borderBottom: "16px solid #FFC000",
    width: {
      xl: "519px",
      lg: "519px",
      md: "571px",
      sm: "290px",
      xs: "340px",
    },
    margin: {
      xl: "270px auto 109px auto",
      lg: "270px auto 109px auto",
      md: "270px auto 49px auto",
      sm: "0 auto 45px auto",
      xs: "220px auto 45px auto",
    },
    textAlign: "center",
  },
  founderTitle: {
    fontFamily: "Public Sans",
    fontSize: {
      xl: "52px",
      lg: "52px",
    },
    fontWeight: { xl: 900, lg: 900 },
    lineHeight: { xl: "58px", lg: "58px" },
    color: "#fff",
    marginBottom: "7px",
  },
  foundersContainer: {
    display: "flex",
    flexDirection: {
      xl: "row",
      lg: "row",
      md: "row",
      sm: "row",
      xs: "column",
    },
    justifyContent: "center",
    paddingTop: {
      xl: "40px",
      lg: "40px",
      md: "60px",
      sm: "40px",
      xs: "40px",
    },
    gap: { xl: 12, lg: 12, md: 12, sm: 11, xs: 114 },
    marginTop: { sm: "200px", md: "0px", xs: 0 },
  },
  founderCard: {
    width: {
      xl: "600px",
      lg: "600px",
      md: "365px",
      sm: "365px",
      xs: "365px",
    },
    height: {
      xl: "480px",
      lg: "480px",
      md: "291px",
      sm: "270px",
      xs: "270px",
    },
    backgroundColor: "#000",
    color: "#000",
    position: "relative",
    overflow: "visible",
  },
  founderImageAkeem: {
    width: {
      xl: "375px",
      lg: "375px",
      md: "228px",
      sm: "228px",
      xs: "228px",
    },
    height: {
      xl: "539px",
      lg: "539px",
      md: "327px",
      sm: "327px",
      xs: "327px",
    },
    marginTop: "-70px", // Move the image upwards
    position: "relative",
    zIndex: 10,
    marginBottom: "2px",
  },
  founderImageJermaine: {
    width: {
      xl: "448px",
      lg: "448px",
      md: "272px",
      sm: "272px",
      xs: "272px",
    },
    height: {
      xl: "539px",
      lg: "537px",
      md: "325px",
      sm: "325px",
      xs: "325px",
    },
    marginTop: "-70px", // Move the image upwards
    position: "relative",
    zIndex: 10,
    marginBottom: "2px",
    marginLeft: { xl: 26, lg: 26, md: 14, sm: 12, xs: 12 },
  },
  cardContent: {
    background: "#fff",
    pt: 8,
  },
  cardTitle: {
    fontFamily: "Public Sans",
    fontWeight: 900,
    fontSize: { xl: "42px", lg: "42px", md: "24px", sm: "24px", xs: "24px" },
    lineHeight: { xl: "41px", lg: "41px", md: "25px", sm: "25px", xs: "25px" },
    mt: 2,
  },
  cardSubtitle: {
    fontWeight: 400,
    fontFamily: "Public Sans",
    fontSize: { xl: "32px", lg: "32px", md: "32px", sm: "20px", xs: "20px" },
    mb: 2,
  },
  cardBody: {
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize: { xl: "20px", lg: "20px", md: "12px", sm: "12px", xs: "12px" },
    marginLeft: 2.5,
    mb: 2,
  },
  listSubheading: {
    fontFamily: "Inter",
    fontWeight: 900,
    fontSize: { xl: "20px", lg: "20px", md: "12px", sm: "12px" },
  },
  listItemText: {
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize: { xl: "20px", lg: "20px", md: "12px", sm: "12px", xs: "12px" },
  },
  sideBorder: {
    "&::before": {
      content: '""',
      position: "absolute",
      left: {
        xl: "27px",
        lg: "0px",
        md: "0px",
        sm: "0px",
        xs: "0px",
      },
      height: {
        xl: "318px",
        lg: "478px",
        md: "318px",
        xs: "116px",
      },
      width: "16px",
      backgroundColor: "#FFC000",
    },
  },
  listItemIcon: {
    color: "#FFC000",
  },
  topRightRectangle: {
    position: "absolute",
    zIndex: 1,
    top: { xl: "-30px", lg: "-47px", md: "0px" },
    right: { xl: "293px", lg: "55px", md: "100px", sm: "45px", xs: "-8px" },
    width: { xl: "613px", lg: "613px", md: "269px", sm: "269px", xs: "226px" },
    height: { xl: "318px", lg: "318px", md: "185px", sm: "185px", xs: "185px" },
    backgroundColor: "#2E86AB",
  },
  bottomLeftRectangle: {
    position: "absolute",
    top: { xl: "190px", lg: "350px", md: "230px", sm: "130px", xs: "205px" },
    right: {
      xl: "595px",
      lg: "350px",
      md: "240px",
      sm: "140px",
      xs: "-5px",
    },
    width: {
      xl: "1003px",
      lg: "1003px",
      md: "662px",
      sm: "602px",
      xs: "370px",
    },
    height: { xl: "133px", lg: "133px", md: "150px", sm: "100px", xs: "40%" },
    paddingTop: {
      xl: "386px",
      lg: "220px",
      md: "150px",
      sm: "205px",
      xs: "96px",
    },
    backgroundColor: "#FFC000",
  },
  text: {
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: { xl: "32px", lg: "32px", md: "20px", sm: "20px", xs: "20px" },
    textAlign: "left",
    lineHeight: { xl: "41px", lg: "41px", xs: "28px" },
    color: "#000",
  },
  textBox: {
    paddingLeft: { xl: "40px", sm: "38px", xs: "16px" },
    paddingBottom: { sm: "56px", xs: "25px" },
    backgroundColor: "#FFC000",
  },
  spanBold: {
    fontFamily: "Public Sans",
    fontWeight: 900,
    fontSize: { xl: "32px", lg: "32px", md: "20px", sm: "20px", xs: "20px" },
    // lineHeight: "41px",
    display: "inline",
  },
  divider: {
    width: { xl: "100%", lg: "100%", md: "100%", sm: "100%", xs: "100%" },
    maxWidth: "100%",
    height: "16px",
    backgroundColor: "#FFC000",
    marginTop: "-5px",
  },
};

export default MissionAndBios;
