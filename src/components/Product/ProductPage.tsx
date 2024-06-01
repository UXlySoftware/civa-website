import React from "react";

import ProductHero from "./ProductHero";
import CommunitiesTogether from "../CommunitiesTogether";
import ProductLayers from "./ProductLayers";
import CivaStandsAlone from "./CivaStandsAlone";

const ProductPage: React.FC = () => {
  return (
    <>
      <ProductHero />
      <CommunitiesTogether />
      <ProductLayers />
      <CivaStandsAlone />
    </>
  );
};

export default ProductPage;
