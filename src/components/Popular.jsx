import React from "react";
import data_product from "../data/data";
import Item from "../components/Item";
import { Link } from "react-router-dom";

const Popular = () => {
  return (
    <div>
        {/* section title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-custom-blue text-center mb-10 font-bold ">POPULAR IN <Link to="/women" className="underline">WOMEN</Link></h1>

      {/* products grid */}
      <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-4 ">
        {data_product.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
