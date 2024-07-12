import React from "react";
import { Box } from "@mui/material";
import ConnectLayer from "./ProductLayers/ConnectLayer";
import CommunicateLayer from "./ProductLayers/CommunicateLayer";
import CollaborateLayer from "./ProductLayers/CollaborateLayer";

const ProductLayers = () => {
  return (
    <Box id="layers" mb={11}>
      <ConnectLayer />
      <CommunicateLayer />
      <CollaborateLayer />
    </Box>
  );
};

export default ProductLayers;
