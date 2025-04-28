import React, { useContext } from "react";
import new_collection from "../data/new_collections";
import { Link } from "react-router-dom";
import Item from "./Item";

const Collection = () => {
  return (
    <div>
      {/* section title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-custom-blue text-center mb-10 font-bold ">
        New COLLECTION
      </h1>

      {/* products grid */}
      <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-4 ">
        {new_collection.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Collection;
