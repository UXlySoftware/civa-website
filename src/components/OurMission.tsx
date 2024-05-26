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
import CheckIcon from "@mui/icons-material/Check";
import missionImage from "../assets/missionImage.png";
import akeemImage from "../assets/akeemImage.png";
import jermaineImage from "../assets/jermaineImage.png";
import missionImageMobil from "../assets/missionImageMobil.png";

const MissionAndBios = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        mt: { xl: 10, lg: 10, md: 7, xs: 75 },
        px: 2,
        height: {
          xl: "200vh",
          lg: "330vh",
          md: "160vh",
          sm: "360vh",
          xs: "430vh",
        },
        backgroundColor: "#374957",
        // height: "auto",
      }}
    >
      <Box
        sx={{
          border: "1px solid red",
          borderBottom: "6px solid #FFC000",
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
        }}
      >
        <Typography
          variant="h4"
          sx={{
            marginTop: 5,
            fontSize: {
              xl: "52px",
              lg: "52px",
            },
            fontWeight: { xl: 900, lg: 900 },
            lineHeight: { xl: "58px", lg: "58px" },
          }}
        >
          Our Mission{" "}
        </Typography>
      </Box>
      <Box sx={{ position: "relative", textAlign: "center" }}>
        <Box sx={styles.topRightRectangle} />
        <Box sx={styles.bottomLeftRectangle}>
          <Box sx={styles.textBox}>
            <Typography variant="body1" sx={styles.text}>
              To connect and empower organizations, communities, and individuals
              to take informed action, access funding, and
              <Typography sx={styles.spanBold}>
                {" "}
                create sustainable social impact.
              </Typography>
            </Typography>
          </Box>
        </Box>
        <Box
          component="img"
          src={isMobile ? missionImageMobil : missionImage}
          alt="Mission"
          sx={{
            width: "100%",
            maxWidth: {
              xl: "1209px",
              lg: "1209px",
              md: "736px",
              sm: "340px",
              xs: "340px",
            },
            mt: "25px",
            zIndex: 2,
            position: "relative",
          }}
        />
      </Box>
      <Box
        sx={{
          border: "1px solid red",
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
            xs: "200px auto 45px auto",
          },
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Public Sans",
            fontSize: {
              xl: "52px",
              lg: "52px",
            },
            fontWeight: { xl: 900, lg: 900 },
            lineHeight: { xl: "58px", lg: "58px" },
            color: "#fff",
          }}
        >
          FOUNDERS BIOS{" "}
        </Typography>
      </Box>
      {/* Founders */}
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xl: "row",
            lg: "row",
            md: "row",
            sm: "column",
            xs: "column",
          },
          justifyContent: "center",
          //   marginTop: { xl: 10, lg: "10px", md: 0 },
          paddingTop: {
            xl: "40px",
            lg: "40px",
            md: "60px",
            sm: "40px",
            xs: "40px",
          },
          gap: { xl: 12, lg: 12, md: 12, sm: 100, xs: 124 },
        }}
      >
        <Card
          sx={{
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
          }}
        >
          <Box
            component="img"
            src={akeemImage}
            alt="Akeem Evans"
            sx={{
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
              //   borderBottom: "8px solid black",
              marginTop: "-70px", // Move the image upwards
              position: "relative",
              zIndex: 10,
            }}
          />
          <Box sx={styles.divider} />

          <CardContent sx={{ background: "#fff", pt: 8 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mt: 2 }}>
              ACKEEM EVANS
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 400, mb: 2 }}>
              Co-Founder and CEO
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              With an extensive background in public sector leadership as well
              as program and grants management, Akeem is celebrated for his
              global contributions to community development, notably with the
              Peace Corps in Albania and with the Organization for Security and
              Co-operation in Europe.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              As a leader, he is deeply committed to innovation and using
              technology to spur social change.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
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
                  <ListItemIcon sx={{ color: "#FFC000" }}>
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
        <Card
          sx={{
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
          }}
        >
          <Box
            component="img"
            src={jermaineImage}
            alt="Jermaine"
            sx={{
              width: {
                xl: "448px",
                lg: "448px",
                md: "272px",
                sm: "272px",
                xs: "272px",
              },
              height: {
                xl: "537px",
                lg: "537px",
                md: "325px",
                sm: "325px",
                xs: "325px",
              },

              marginTop: "-70px", // Move the image upwards
              position: "relative",
              zIndex: 10,
            }}
          />
          <Box sx={styles.divider} />

          <CardContent sx={{ background: "#fff", pt: 8 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mt: 2 }}>
              ACKEEM EVANS
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 400, mb: 2 }}>
              Co-Founder and CEO
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Jermaine brings a wealth of experience in organizational
              development and technical analysis to CIVA. Leveraging his public
              and private sector expertise, he is pivotal in shaping the
              operational strategies that drive CIVA’s mission forward.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
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
                  <ListItemIcon sx={{ color: "#FFC000" }}>
                    <CheckIcon />
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
  topRightRectangle: {
    position: "absolute",
    zIndex: 1,
    top: { xl: "-30px", lg: "-47px", md: "0px" },
    right: { xl: "293px", lg: "55px", md: "100px", sm: "-8px", xs: "-8px" },
    width: { xl: "613px", lg: "613px", md: "269px", sm: "269px", xs: "226px" },
    height: { xl: "318px", lg: "318px", md: "185px", sm: "185px", xs: "185px" },
    backgroundColor: "#2E86AB",
  },
  bottomLeftRectangle: {
    position: "absolute",
    top: { xl: "190px", lg: "350px", md: "230px", sm: "160px", xs: "205px" },
    right: {
      xl: "595px",
      lg: "350px",
      md: "240px",
      sm: "-5px",
      xs: "-5px",
    },
    width: {
      xl: "1003px",
      lg: "1003px",
      md: "662px",
      sm: "662px",
      xs: "370px",
    },
    height: { xl: "133px", lg: "133px", md: "150px", sm: "150px", xs: "40%" },
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
    fontFamily: "Public Sas",
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
    lineHeight: "41px",
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
