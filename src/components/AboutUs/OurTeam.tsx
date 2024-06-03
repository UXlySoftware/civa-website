import React from "react";
import { Box, Typography } from "@mui/material";
import horaceImage from "../../assets/horaceImage.png";
import mollyImage from "../../assets/mollyImage.png";

const TeamSection = () => {
  return (
    <Box sx={styles.teamSectionContainer}>
      <Typography variant="h4" sx={styles.sectionTitle}>
        OUR TEAM
      </Typography>
      <Box sx={styles.divider} />
      <Box sx={styles.teamMembersContainer}>
        <Box sx={styles.teamMemberBox}>
          {/* 1. foto sag ust */}
          <Box
            sx={{
              ...styles.horaceYellowSquare,
              top: {
                xl: "-75px",
                lg: "-75px",
                md: "50px",
                sm: "-50px",
                xs: "65px",
              },
              right: {
                xl: "45px",
                lg: "45px",
                md: "107px",
                sm: "10px",
                xs: "6px",
              },
            }}
          />

          <Box
            component="img"
            src={horaceImage}
            alt="Horace Williams"
            sx={styles.horaceImage}
          />
          <Box sx={{ ...styles.blackSquareLeft, left: "24px" }} />
          {/* 1. foto sol alt */}
          <Box
            sx={{
              ...styles.horaceYellowSquare,
              top: {
                xl: "78px",
                lg: "78px",
                md: "-45px",
                sm: "18px",
                xs: "-50px",
              },
              right: {
                xl: "155px",
                lg: "245px",
                md: "15px",
                sm: "165px",
                xs: "10px",
              },
              width: {
                xl: "340px",
                lg: "250px",
                md: "100px",
                sm: "110px",
                xs: "90px",
              },
            }}
          />
          <Box sx={styles.infoBoxHorace}>
            <Typography variant="h6" sx={styles.nameText}>
              HORACE WILLIAMS
            </Typography>
            <Typography variant="body1" sx={styles.positionText}>
              Chief Product Officer
            </Typography>
          </Box>
        </Box>
        <Box sx={styles.teamMemberBox}>
          {/* 2. foto sag ust */}
          <Box
            sx={{
              ...styles.MollyYellowSquare,
              top: {
                xl: "-76px",
                lg: "80px",
                md: "-45px",
                sm: "-50px",
                xs: "65px",
              },
              right: {
                xl: "-114px",
                lg: "124px",
                md: "-60px",
                sm: "-2px",
                xs: "-5px",
              },
            }}
          />
          <Box
            component="img"
            src={mollyImage}
            alt="Molly Sweet"
            sx={styles.mollyImage}
          />
          <Box
            sx={{
              ...styles.blackSquareLeft,
              left: { xl: "152px", lg: "150px", md: "80px", xs: "17px" },
            }}
          />
          {/* 2. foto sol alt */}
          <Box
            sx={{
              ...styles.MollyYellowSquare,
              top: {
                xl: "78px",
                lg: "-75px",
                md: "50px",
                sm: "20px",
                xs: "-50px",
              },
              right: {
                xl: "84px",
                lg: "-115px",
                md: "30px",
                sm: "165px",
                xs: "-3px",
              },
              width: { xl: "252px", md: "173px", sm: "100px", xs: "90px" },
            }}
          />
          <Box sx={styles.infoBoxMolly}>
            <Typography variant="h6" sx={styles.nameText}>
              MOLLY SWEET{" "}
            </Typography>
            <Typography variant="body1" sx={styles.positionText}>
              Community Engagement Associate
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  teamSectionContainer: {
    width: "120wv",
    backgroundColor: "#5a91a1",
    pt: "44px",
    pb: { xl: "0px", lg: "0px", md: "0px", sm: "144px", xs: "50px" },
    display: "flex",
    flexDirection: "column",
    marginBottom: -20,
  },
  sectionTitle: {
    fontWeight: 900,
    textAlign: "center",
    mb: 0,
    fontFamily: "Public Sans",
    fontSize: {
      xl: "52px",
      lg: "52px",
      md: "42px",
      sm: "28px",
      xs: "28px",
    },
    color: "#fff",
  },
  divider: {
    width: {
      xl: "519px",
      lg: "519px",
      md: "373px",
      sm: "373px",
      xs: "373px",
    },
    height: "16px",
    backgroundColor: "#FFC000",
    margin: "0 auto",
    mb: { xl: 8, lg: 8, md: 8, sm: 8, xs: 11 },
  },
  teamMembersContainer: {
    margin: {
      xl: "120px auto 160px auto",
      lg: "120px 300px 140px auto",
      md: "120px 300px 110px auto",
      sm: "40px auto 30px auto",
      xs: "0px 0px 80px 0px",
    },
    display: "flex",
    flexDirection: { xs: "column", sm: "row", md: "row" },
    justifyContent: "center",
    alignItems: "center",
    gap: { xl: 65, lg: 30, md: 30, sm: 33, xs: 3 },
  },
  teamMemberBox: {
    position: "relative",
    textAlign: "center",
  },
  horaceImage: {
    width: {
      xl: "300px",
      lg: "300px",
      md: "174px",
      sm: "173px",
      xs: "173px",
    },
    height: {
      xl: "334px",
      lg: "334px",
      md: "194px",
      sm: "193px",
      xs: "193px",
    },
    zIndex: 2,
    position: "relative",
    left: {
      xl: "-195px",
      lg: "-195px",
      md: "-105px",
      sm: "-104px",
      xs: "-104px",
    },
    top: { xl: "-134px", lg: "-134px", md: "-75px", xs: "-77px" },
  },

  infoBoxHorace: {
    position: "absolute",
    width: {
      xl: "402px",
      lg: "392px",
      md: "250px",
      sm: "231px",
      xs: "231px",
    },
    height: {
      xl: "154px",
      lg: "154px",
      md: "90px",
      sm: "79px",
      xs: "79px",
    },
    transform: "translateY(-170%) translateX(0%)",
    zIndex: 3,
    backgroundColor: "#fff",
    textAlign: "left",
    alignItems: "left",
    justifyContent: "center",
    display: "flex",
    paddingLeft: "30px",
    flexDirection: "column",
    gap: "12px",
  },
  positionText: {
    fontWeight: 400,
    fontFamily: "Public Sans",
    fontSize: { xl: "23px", lg: "23px", md: "13.3px", xs: "13px" },
    lineHeight: { xl: "27px", lg: "27px", md: "13.63px" },
  },
  nameText: {
    fontWeight: 800,
    fontSize: { xl: "32px", lg: "32px", md: "18px", xs: "18px" },
    fontFamily: "Public Sans",
    lineHeight: { xl: "37px", lg: "37px", md: "21px" },
  },
  mollyImage: {
    width: {
      xl: "268px",
      lg: "268px",
      md: "268",
      sm: "155px",
      xs: "155px",
    },
    height: {
      xl: "334px",
      lg: "334px",
      md: "194px",
      sm: "194px",
      xs: "194px",
    },
    zIndex: 2,
    position: "relative",
    left: {
      xl: "-70px",
      lg: "-70px",
      md: "-45px",
      sm: "-125px",
      xs: "-125px",
    },
    top: {
      xl: "-134px",
      lg: "-134px",
      md: "-75px",
      sm: "-78px",
      xs: "-78px",
    },
  },
  infoBoxMolly: {
    position: "absolute",
    width: {
      xl: "402px",
      lg: "392px",
      md: "250px",
      sm: "231px",
      xs: "231px",
    },
    height: {
      xl: "154px",
      lg: "154px",
      md: "90px",
      sm: "79px",
      xs: "79px",
    },
    transform: "translateY(-170%)",
    zIndex: 3,
    backgroundColor: "#fff",
    textAlign: "left",
    alignItems: "left",
    justifyContent: "center",
    display: "flex",
    paddingLeft: "30px",
    flexDirection: "column",
    gap: "12px",
    left: { xl: "45%", lg: "45%", md: "45%", sm: "-10%", xs: "-10%" },
  },

  horaceYellowSquare: {
    position: "absolute",
    width: {
      xl: "213px",
      lg: "213px",
      md: "171px",
      sm: "120px",
      xs: "270px",
    },
    height: { xl: "136px", lg: "136px", md: "78px", sm: "110px", xs: "60px" },
    backgroundColor: "#FFC000",
  },

  MollyYellowSquare: {
    position: "absolute",
    width: {
      xl: "213px",
      lg: "213px",
      md: "123px",
      sm: "130px",
      xs: "270px",
    },
    height: { xl: "136px", lg: "136px", md: "78px", sm: "110px", xs: "60px" },
    backgroundColor: "#FFC000",
  },
  blackSquareLeft: {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xl: "440px", lg: "440px", md: "255px", sm: "255px", xs: "255px" },
    height: { xl: "263px", lg: "263px", md: "153px", sm: "153px", xs: "153px" },
    backgroundColor: "#000",
    zIndex: 1,
  },
};

export default TeamSection;
