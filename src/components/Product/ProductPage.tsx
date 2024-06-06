import React from "react";

import ProductHero from "./ProductHero";
import CommunitiesTogether from "../CommunitiesTogether";
import ProductLayers from "./ProductLayers";
import CivaStandsAlone from "./CivaStandsAlone";
import JoinCommunity from "../JoinCommunity";

const ProductPage: React.FC = () => {
  return (
    <>
      <ProductHero />
      <CommunitiesTogether />
      <ProductLayers />
      <CivaStandsAlone />
      <JoinCommunity />
    </>
  );
};

export default ProductPage;
