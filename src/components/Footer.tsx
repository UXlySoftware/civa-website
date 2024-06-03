import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// @mui
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
// assets

import logo1 from "../assets/logo1.svg";
import facebookIcon from "../assets/socialmedia/facebook.svg";

import instagramIcon from "../assets/socialmedia/instagram.svg";
import linkedinIcon from "../assets/socialmedia/linkedin.svg";
import youtubeIcon from "../assets/socialmedia/youtube.svg";
import Xicon from "../assets/socialmedia/Xicon.svg";

const Footer = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Box sx={styles.footer}>
      <Box sx={styles.footerWrapper}>
        <Box sx={styles.footerLeft}>
          <Box component="img" src={logo1} alt="CIVA" sx={styles.footerLogo} />
          <Box sx={styles.footerSocial}>
            <Typography variant="body2" sx={styles.footerSocialLink}>
              Follow Us
            </Typography>
            <Box sx={styles.socialIcons}>
              <a
                href="https://www.facebook.com/CIVAapp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Box
                  component="img"
                  src={facebookIcon}
                  alt="Facebook"
                  sx={styles.socialIcon}
                />
              </a>
              <a
                href="https://x.com/civa_app?s=11&t=1xfi2jdHe5RYZzS7hOt9CQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Box
                  component="img"
                  src={Xicon}
                  alt="Twitter"
                  sx={styles.socialIcon}
                />
              </a>
              <a
                href="https://www.instagram.com/civa.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Box
                  component="img"
                  src={instagramIcon}
                  alt="Instagram"
                  sx={styles.socialIcon}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/yourcivaapp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Box
                  component="img"
                  src={linkedinIcon}
                  alt="LinkedIn"
                  sx={styles.socialIcon}
                />
              </a>
              <Box
                component="img"
                src={youtubeIcon}
                alt="Youtube"
                sx={styles.socialIcon}
              />
            </Box>
          </Box>
        </Box>
        <Box sx={styles.footerRight}>
          <Box sx={styles.footerLinks}>
            <Typography
              variant="body2"
              sx={styles.footerLink}
              onClick={() => navigate("/about")}
            >
              About Us
            </Typography>
            <Typography
              variant="body2"
              sx={styles.footerLink}
              onClick={() => navigate("/product")}
            >
              Product
            </Typography>
            <Typography
              variant="body2"
              sx={styles.footerLink}
              onClick={() => navigate("/contact")}
            >
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
};

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
      xs: "61px 0 0 10px",
      md: "129px auto 0 auto",
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
  footerLogo: { maxHeight: "100%", width: "180px", height: "auto" },
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
      xl: "left",
      lg: "left",
      md: "left",
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
    width: { xl: "25px", lg: "25px", md: "25px", sm: "34px", xs: "34px" },
    height: "auto",
  },
  footerSocialLink: {
    marginTop: "65px",
    fontFamily: "Inter",
    fontSize: "18px",
    fontWeight: 600,
    color: "#FFC000",
    textAlign: "left",
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
