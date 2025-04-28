import React from "react";
import { SlArrowRight } from "react-icons/sl";

const Breadcrum = ({ product }) => {
  return (
    <div className="pt-4 lg:pt-10 flex items-center gap-1  font-semibold text-custom-black/50">
      {/* Home link */}
      HOME <SlArrowRight className="text-sm" />
      {/* Shop link */}
      SHOP <SlArrowRight className="text-sm" />
      {/* Dynamic category of the product */}
      {product.category} <SlArrowRight className="text-sm" />
      {/* Product name, truncated if it is too long */}
      <span className="truncate">{product.name}</span>
    </div>
  );
};

export default Breadcrum;
