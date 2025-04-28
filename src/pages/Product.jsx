import React, { useContext } from "react";
import Breadcrum from "../components/Breadcrum";
import { ShopContext } from "../contexts/ShopContext";
import { useParams } from "react-router-dom";
import DisplayProduct from "../components/DisplayProduct";
import Description from "../components/Description";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const product = products.find((product) => product.id === Number(productId));

  return (
    <div className="pt-16 px-3 md:px-6 md:pt-20  w-full max-w-[1280px] mx-auto">
      <section>
        <Breadcrum product={product} />
      </section>
      <section>
        <DisplayProduct product={product} />
      </section>
      <section>
        <Description />
      </section>
      <section className="mt-12 md:mt-20 md:px-6  w-full max-w-[1280px] mx-auto">
        <RelatedProducts product={product}/>
      </section>
    </div>
  );
};

export default Product;
