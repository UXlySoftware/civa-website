import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Third2Img } from "../../../assets/product";

const CommunicateLayer = () => {
  return (
    <Grid container spacing={0} alignItems="center" mt={3}>
      {/* Communicate section Image Grid Item */}
      <Grid item xs={12} sm={5} sx={{ zIndex: 1 }}>
        <Box
          sx={{
            marginLeft: { xl: 30, lg: 5, md: 5, sm: 2, xs: 2 },
            marginTop: { xl: 30, lg: 30, md: 17, sm: 10, xs: 3 },
            display: { xs: "none", sm: "flex" },
          }}
        >
          <Box
            component="img"
            src={Third2Img}
            alt="Communicate"
            sx={{
              width: {
                xl: "818px",
                lg: "818px",
                md: "474px",
                sm: "430px",
                xs: "355px",
              },
              height: "auto",
            }}
          />
        </Box>
      </Grid>

      {/* Communicate section Text Grid Item */}
      <Grid item xs={11} sm={7}>
        <Box
          sx={{
            background: "#76848A",
            py: { xl: 4, lg: 4, md: 3, sm: 3, xs: 1 },
            pl: { xl: 64, lg: 55, md: 40, sm: 31, xs: 2 },
          }}
        >
          <Typography
            sx={{
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
            }}
          >
            COMMUNICATE
          </Typography>
        </Box>

        <Box
          sx={{
            width: { xl: "31%", lg: "42%", md: "50%", sm: "60%" },
            marginLeft: { xl: 64, lg: 53, md: 27, sm: 19, xs: 2 },
            marginTop: { xl: 6, lg: 6, md: 3, sm: 3, xs: 3 },
          }}
        >
          <Typography
            sx={{
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
              textAlign: "right",
            }}
          >
            CIVA provides an integrated platform and suite of tools for
            communication, government outreach, and community engagement.
          </Typography>
        </Box>

        <Box
          sx={{
            marginLeft: { xl: 30, lg: 5, md: 5, sm: 2, xs: 2 },
            marginTop: { xl: 30, lg: 30, md: 17, sm: 10, xs: 3 },
            display: { xs: "flex", sm: "none" },
          }}
        >
          <Box
            component="img"
            src={Third2Img}
            alt="Communicate"
            sx={{
              width: {
                xl: "818px",
                lg: "818px",
                md: "474px",
                sm: "430px",
                xs: "355px",
              },
              height: "auto",
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default CommunicateLayer;
