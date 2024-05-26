import React from "react";
import { Box, Typography } from "@mui/material";
import horaceImage from "../assets/horaceImage.png";
import mollyImage from "../assets/mollyImage.png";

const TeamSection = () => {
  return (
    <Box
      sx={{
        width: "120wv",
        backgroundColor: "#5a91a1",
        py: "44px",
        display: "flex",
        marginBottom: 5,
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h4"
        sx={{
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
        }}
      >
        OUR TEAM
      </Typography>
      <Box
        sx={{
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
          mb: 12,
        }}
      />
      <Box
        sx={{
          //   marginTop: "90px"
          margin: { xl: "120px auto 40px auto", lg: "120px 300px 40px auto" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: { xl: 65, lg: 30, md: 30 },
        }}
      >
        <Box sx={{ position: "relative", textAlign: "center" }}>
          {/* 1. foto sag ust */}
          <Box
            sx={{
              ...styles.yellowSquare,
              top: {
                xl: "78px",
                lg: "-85px",
                md: "50px",
                sm: "65px",
                xs: "65px",
              },
              right: {
                xl: "-85px",
                lg: "30px",
                md: "155px",
                sm: "125px",
                xs: "7px",
              },
            }}
          />

          <Box
            component="img"
            src={horaceImage}
            alt="Horace Williams"
            sx={{
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
                xl: "-70px",
                lg: "-195px",
                md: "-105px",
                sm: "30px",
                xs: "-104px",
              },
              top: { xl: "-134px", lg: "-134px", md: "-75px", xs: "-77px" },
            }}
          />
          <Box sx={{ ...styles.blackSquareLeft, left: "24px" }} />
          {/* 1. foto sag alt */}
          <Box
            sx={{
              ...styles.yellowSquare,
              top: {
                xl: "78px",
                lg: "78px",
                md: "-50px",
                sm: "160px",
                xs: "-50px",
              },
              right: {
                xl: "155px",
                lg: "245px",
                md: "5px",
                sm: "125px",
                xs: "10px",
              },
              width: {
                xl: "250px",
                lg: "250px",
                md: "100px",
                sm: "90px",
                xs: "90px",
              },
            }}
          />
          <Box
            sx={{
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
              //   bottom: "-20px",
              //   left: "45%",
              transform: "translateY(-170%) translateX(0%)",
              //   transform: "translateX(-170%)",
              zIndex: 3,
              backgroundColor: "#fff",
              textAlign: "left",
              alignItems: "left",
              justifyContent: "center",
              display: "flex",
              paddingLeft: "30px",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontWeight: 400,
                fontFamily: "Public Sans",
                fontSize: { xl: "23px", lg: "23px", md: "13.3px" },
                lineHeight: { xl: "27px", lg: "27px", md: "15.63px" },
              }}
            >
              Chief Product Officer
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                fontSize: { xl: "32px", lg: "32px", md: "18px" },
                fontFamily: "Public Sans",
                lineHeight: { xl: "37px", lg: "37px", md: "21px" },
              }}
            >
              HORACE WILLIAMS
            </Typography>
          </Box>
        </Box>
        <Box sx={{ position: "relative", textAlign: "center" }}>
          {/* 2. foto sol alt */}
          <Box
            sx={{
              ...styles.yellowSquare,
              top: {
                xl: "-76px",
                lg: "80px",
                md: "-50px",
                sm: "160px",
                xs: "65px",
              },
              right: {
                xl: "-85px",
                lg: "156px",
                md: "-65px",
                sm: "125px",
                xs: "-5px",
              },
            }}
          />
          <Box
            component="img"
            src={mollyImage}
            alt="Molly Sweet"
            sx={{
              width: {
                xl: "300px",
                lg: "300px",
                md: "155px",
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
            }}
          />
          <Box
            sx={{
              ...styles.blackSquareLeft,
              left: { xl: "152px", lg: "150px", md: "80px", xs: "17px" },
            }}
          />
          {/* 2. foto sag ust */}
          <Box
            sx={{
              ...styles.yellowSquare,
              top: {
                xl: "78px",
                lg: "-83px",
                md: "50px",
                sm: "160px",
                xs: "-50px",
              },
              right: {
                xl: "155px",
                lg: "-90px",
                md: "80px",
                sm: "125px",
                xs: "-3px",
              },
              width: { xs: "90px" },
            }}
          />
          <Box
            sx={{
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
              //   bottom: "-20px",
              left: { xl: "45%", lg: "45%", md: "45%", sm: "-10%", xs: "-10%" },
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
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontWeight: 400,
                fontFamily: "Public Sans",
                fontSize: { xl: "23px", lg: "23px", md: "13.3px" },
                lineHeight: { xl: "27px", lg: "27px", md: "15.63px" },
              }}
            >
              Chief Product Officer
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                fontSize: { xl: "32px", lg: "32px", md: "18px" },
                fontFamily: "Public Sans",
                lineHeight: { xl: "37px", lg: "37px", md: "21px" },
              }}
            >
              Emmy WILLIAMS
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  yellowSquare: {
    position: "absolute",
    width: {
      xl: "213px",
      lg: "213px",
      md: "123px",
      sm: "662px",
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
