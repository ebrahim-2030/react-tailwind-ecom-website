import React from "react";
import { SlArrowRight } from "react-icons/sl";

const Breadcrum = ({ product }) => {
  return (
    <div className="pt-4 lg:pt-10 flex items-center gap-1 text-sm font-semibold text-custom-black/70">
      HOME <SlArrowRight className="text-sm" /> SHOP{" "}
      <SlArrowRight className="text-sm" /> {product.category}{" "}
      <SlArrowRight className="text-sm" />{" "}
      <span className="truncate">{product.name}</span>
    </div>
  );
};

export default Breadcrum;
