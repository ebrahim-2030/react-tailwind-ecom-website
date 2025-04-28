import React, { useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";

import Item from "./Item";

const RelatedProducts = ({ product }) => {
  const { products } = useContext(ShopContext);
  const relatedProducts = products.filter((p) => p.category === product.category);
  return (
    <div>
      {/* section title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-custom-blue text-center mb-10 font-bold ">
        Related Products
      </h1>

      {/* products grid */}
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-10 ">
        {relatedProducts.slice(0, 6).map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
