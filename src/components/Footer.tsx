import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import logo from "../assets/logoFooter.png";
import facebookIcon from "../assets/socialmedia/facebook.svg";
import twitterIcon from "../assets/socialmedia/twitter.svg";
import instagramIcon from "../assets/socialmedia/instagram.svg";
import linkedinIcon from "../assets/socialmedia/linkedin.svg";
import youtubeIcon from "../assets/socialmedia/youtube.svg";

const Footer = () => (
  <Box sx={styles.footer}>
    <Box sx={styles.footerWrapper}>
      <Box sx={styles.footerLeft}>
        <img src={logo} alt="CIVA" style={styles.footerLogo} />
        <Box sx={styles.footerSocial}>
          <Typography variant="body2" sx={styles.footerSocialLink}>
            Follow Us
          </Typography>
          <Box sx={styles.socialIcons}>
            <img src={facebookIcon} alt="Facebook" style={styles.socialIcon} />
            <img src={twitterIcon} alt="Twitter" style={styles.socialIcon} />
            <img
              src={instagramIcon}
              alt="Instagram"
              style={styles.socialIcon}
            />
            <img src={linkedinIcon} alt="LinkedIn" style={styles.socialIcon} />
            <img src={youtubeIcon} alt="Youtube" style={styles.socialIcon} />
          </Box>
        </Box>
      </Box>
      <Box sx={styles.footerRight}>
        <Box sx={styles.footerLinks}>
          <Typography variant="body2" sx={styles.footerLink}>
            Product
          </Typography>
          <Typography variant="body2" sx={styles.footerLink}>
            About Us
          </Typography>
          <Typography variant="body2" sx={styles.footerLink}>
            News
          </Typography>
          <Typography variant="body2" sx={styles.footerLink}>
            Contact
          </Typography>
        </Box>
        <Typography variant="body2" sx={styles.footerEmail}>
          civa@support.com
        </Typography>
      </Box>
    </Box>
  </Box>
);

const styles = {
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: {
      xl: "center",
      lg: "center",
      md: "center",
      sm: "left",
      xs: "left",
    },
    margin: "0px auto 0px auto",
    backgroundColor: "#000",
    color: "#fff",
    padding: "0px 16px",
    height: "693px",
  },
  footerWrapper: {
    display: "flex",
    width: "70%",
    flexDirection: { xs: "column", md: "row" },
    margin: {
      xs: "126px 0 0 10px",
      md: "126px auto 0 auto",
    },
    justifyContent: "space-between",
    gap: { xl: "0px", lg: "0px", md: "0px", sm: "25px", xs: "25px" },
  },
  footerLeft: {
    display: { xl: "flex", lg: "flex", md: "flex", sm: "block", xs: "block" },
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "space-between",
  },
  footerLogo: { maxHeight: "100%" },
  footerRight: {
    display: "flex",
    flexDirection: "column",
    textAlign: {
      xl: "right",
      lg: "right",
      md: "right",
      sm: "left",
      xs: "left",
    },
    gap: "130px",
    width: "100%",
  },
  footerLinks: {
    display: { xl: "flex", lg: "flex", md: "flex", sm: "none", xs: "none" },
    justifyContent: "right",
    gap: "42px",
    marginBottom: "20px",
  },
  footerLink: {
    fontFamily: "Inter",
    fontSize: "18px",
    fontWeight: 600,
    lineHeight: "22px",
    cursor: "pointer",
  },
  footerSocial: {
    display: "flex",
    flexDirection: "column",
    alignItems: {
      xl: "center",
      lg: "center",
      md: "center",
      sm: "left",
      xs: "left",
    },
    gap: "10px",
    marginBottom: "0px",
  },
  socialIcons: {
    display: "flex",
    gap: { xl: "12px", lg: "12px", md: "12px", sm: "18px", xs: "18px" },
  },
  socialIcon: {
    width: "24px",
    height: "24px",
  },
  footerSocialLink: {
    fontFamily: "Inter",
    fontSize: "18px",
    fontWeight: 600,
    color: "#FFC000",
  },
  footerEmail: {
    fontFamily: "Inter",
    fontWeight: 700,
    lineHeight: "25px",
    fontSize: "20px",
    color: "#FFC000",
  },
};

export default Footer;
