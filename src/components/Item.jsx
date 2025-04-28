import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="border hover:scale-105 transition-all duration-500">

        {/* item image */}
      <Link to={`/product/${product.id}`}>
        <img src={product.image} className="w-full" alt="" />
      </Link>
      {/* product details  */}
      <div className="p-2">
        <p className="my-2">{product.name}</p>

        {/* product prices */}
        <div className="flex gap-8 text-xl font-bold text-custom-black">
          <div>${product.new_price}</div>
          <div className="text-custom-black/50 line-through">
            ${product.old_price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
