import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Drawer,
  IconButton,
  Stack,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import logo from "../assets/logo-black.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Active button styling func
  const getButtonStyles = (path: string) => {
    return location.pathname === path
      ? { ...styles.button, ...styles.activeButton }
      : styles.button;
  };

  return (
    <AppBar position="sticky" sx={styles.appBar}>
      <Container maxWidth={false} sx={styles.container}>
        <Toolbar disableGutters sx={styles.toolbar}>
          <Box onClick={() => navigate("/")} sx={{ cursor: "pointer" }}>
            <Box component="img" src={logo} alt="logo" />
          </Box>
          <Box sx={styles.menuBox}>
            <Button
              sx={getButtonStyles("/about")}
              onClick={() => navigate("/about")}
            >
              About Us
            </Button>
            <Button
              sx={getButtonStyles("/product")}
              onClick={() => navigate("/product")}
            >
              Product
            </Button>
            <Button
              sx={getButtonStyles("/contact")}
              onClick={() => navigate("/contact")}
            >
              Contact
            </Button>
            <Button
              sx={styles.loginButton}
              onClick={() =>
                window.open("https://app.civa.app/login", "_blank")
              }
            >
              Log In
            </Button>
          </Box>
          <Stack sx={styles.menuIcon}>
            <IconButton onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              BackdropProps={{ invisible: true }}
              open={drawerOpen}
              onClose={handleDrawerToggle}
              sx={styles.drawer}
            >
              <List>
                <ListItem
                  button
                  onClick={handleDrawerToggle}
                  sx={styles.listItem}
                >
                  <ListItemText
                    primary="About Us"
                    primaryTypographyProps={{
                      fontWeight: 700,
                      fontSize: "20px",
                      fontFamily: "Inter",
                    }}
                    onClick={() => navigate("/about")}
                  />
                </ListItem>
                <ListItem
                  button
                  onClick={handleDrawerToggle}
                  sx={styles.listItem}
                >
                  <ListItemText
                    primary="Product"
                    primaryTypographyProps={{
                      fontWeight: 700,
                      fontSize: "20px",
                      fontFamily: "Inter",
                    }}
                    onClick={() => navigate("/product")}
                  />
                </ListItem>

                <ListItem
                  button
                  onClick={handleDrawerToggle}
                  sx={styles.listItem}
                >
                  <ListItemText
                    primary="Contact"
                    primaryTypographyProps={{
                      fontWeight: 700,
                      fontSize: "20px",
                      fontFamily: "Inter",
                    }}
                    onClick={() => navigate("/contact")}
                  />
                </ListItem>
                <ListItem
                  button
                  onClick={handleDrawerToggle}
                  sx={styles.listItem}
                >
                  <Button
                    sx={styles.loginButton}
                    onClick={() =>
                      window.open("https://app.civa.app/login", "_blank")
                    }
                  >
                    Log In
                  </Button>
                </ListItem>
              </List>
            </Drawer>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const styles = {
  appBar: {
    backgroundColor: "#ffffff",
    boxShadow: "none",
    flexGrow: 1,
  },
  container: {
    maxWidth: { xl: "73%", lg: "100%" },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuBox: {
    display: { xs: "none", sm: "flex", md: "flex" },
  },
  button: {
    color: "#000",
    fontFamily: "Inter",
    fontSize: "18px",
    fontWeight: 700,
    marginRight: 5,
    textTransform: "none",
    borderRadius: "0px",
  },

  activeButton: {
    borderBottom: "3px solid #FFC000",
  },
  loginButton: {
    padding: "0px 20px",
    fontFamily: "Inter",
    color: "#000",
    fontSize: "18px",
    fontWeight: 700,
    borderRadius: "12px",
    textTransform: "none",
    backgroundColor: "#FFC000",

    "&:hover": {
      backgroundColor: "#e8ae00",
    },
  },
  menuIcon: {
    display: {
      xs: "block",
      sm: "none",
      md: "none",
      lg: "none",
      xl: "none",
    },
  },
  listItem: {
    padding: "6px 12px",
  },
  drawer: {
    "& .MuiDrawer-paper": {
      width: "100vw",
      height: { xl: "25vh", lg: "25vh", md: "25vh", sm: "15vh", xs: "35vh" },
      backgroundColor: "#FFD454",
      borderBottomLeftRadius: "12px",
      borderBottomRightRadius: "12px",
      marginTop: 7,
    },
  },
};

export default Header;
