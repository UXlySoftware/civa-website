import { Button } from "@mui/material";
import React from "react";

const getAdemoButton = () => {
  return (
    <>
      <Button variant="contained" color="secondary" sx={styles.button}>
        Get a Demo{" "}
      </Button>
    </>
  );
};

const styles = {
  button: {
    padding: { xs: "10px 16px", sm: "10px 20px", md: "12px 24px" },
    fontFamily: "Inter",

    fontSize: {
      xs: "18px",
      sm: "18px",
      md: "18px",
      lg: "22px",
      xl: "22px",
    },
    lineHeight: {
      xl: "27px",
      lg: "27px",
      md: "22px",
      sm: "22px",
      xs: "22px",
    },
    fontWeight: 700,
    borderRadius: "12px",
    textTransform: "none",
    backgroundColor: "#FFC000",
    width: { xl: "50%", sm: "50%", xs: "95%" },
    color: "black",
    "&:hover": {
      backgroundColor: "#e8ae00",
    },
  },
};

export default getAdemoButton;
