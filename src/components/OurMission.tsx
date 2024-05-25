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
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import missionImage from "../assets/missionImage.png";
import akeemImage from "../assets/akeemImage.png";
import jermaineImage from "../assets/jermaineImage.png";

const MissionAndBios = () => {
  return (
    <Box
      sx={{
        mt: { xl: 10, lg: 10, md: 7, xs: 75 },
        px: 2,
        backgroundColor: "#374957",
        height: "auto",
      }}
    >
      <Box
        sx={{
          border: "1px solid red",
          borderBottom: "16px solid #FFC000",
          width: "500px",
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
            marginTop: 10,
            fontSize: {
              xl: "52px",
              lg: "52px",
            },
            fontWeight: { xl: 900, lg: 900 },
            lineHeight: { xl: "58px", lg: "58px" },
          }}
        >
          Our Story{" "}
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
          src={missionImage}
          alt="Mission"
          sx={{
            width: "100%",
            maxWidth: "1209px",
            mx: "auto",
            zIndex: 2,
            position: "relative",
          }}
        />
      </Box>
      <Box
        sx={{
          border: "1px solid red",
          borderBottom: "16px solid #FFC000",
          width: "519px",
          margin: {
            xl: "270px auto 109px auto",
            lg: "270px auto 109px auto",
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
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          my: 5,
          px: 2,
          gap: 12,
        }}
      >
        <Card
          sx={{
            maxWidth: "400px",
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
              width: "100%",
              height: "auto",
              borderBottom: "8px solid black",
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
            maxWidth: "400px",
            backgroundColor: "#000",
            color: "#000",
            position: "relative",
            overflow: "visible",
          }}
        >
          <Box
            component="img"
            src={jermaineImage}
            alt="JERMAINE HARTSFIELD"
            sx={{
              width: "100%",
              height: "auto",
              marginTop: "-70px",
              position: "relative",
              zIndex: 10,
            }}
          />
          <Box sx={styles.divider} />
          <CardContent sx={{ background: "#fff", pt: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mt: 0 }}>
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
      </Box> */}
    </Box>
  );
};

const styles = {
  topRightRectangle: {
    position: "absolute",
    zIndex: 1,
    top: { xl: "-47px", lg: "-47px" },
    right: { xl: "293px", lg: "55px", md: "20px", sm: "-15px", xs: "-15px" },
    width: { xl: "613px", lg: "613px", md: "269px", sm: "269px", xs: "226px" },
    height: { xl: "318px", lg: "318px", md: "185px", sm: "185px", xs: "185px" },
    backgroundColor: "#2E86AB",
  },
  bottomLeftRectangle: {
    position: "absolute",
    top: { xl: "190px", lg: "350px", md: "290px", sm: "160px", xs: "205px" },
    right: {
      xl: "595px",
      lg: "350px",
      md: "170px",
      sm: "125px",
      xs: "-14px",
    },
    width: {
      xl: "1003px",
      lg: "1003px",
      md: "762px",
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
    width: { xl: "675px", lg: "515px", md: "470px", sm: "450px", xs: "370px" },
    maxWidth: "100%",
    height: "16px",
    backgroundColor: "#FFC000",
    marginTop: "-5px",
  },
};

export default MissionAndBios;
