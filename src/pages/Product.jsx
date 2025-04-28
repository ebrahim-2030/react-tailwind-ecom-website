import React, { useContext } from "react";
import Breadcrum from "../components/Breadcrum";
import { ShopContext } from "../contexts/ShopContext";
import { useParams } from "react-router-dom";
import DisplayProduct from "../components/DisplayProduct";
import Description from "../components/Description";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  // retrieve productId from URL parameters
  const { productId } = useParams();

  // get products from context
  const { products } = useContext(ShopContext);

  // find the specific product based on productId
  const product = products.find((product) => product.id === Number(productId));

  return (
    <div className="pt-16 px-3 md:px-6 md:pt-20  w-full max-w-[1280px] mx-auto">
      {/* breadcrumb section showing the product path */}
      <section>
        <Breadcrum product={product} />
      </section>

      {/* display product details */}
      <section>
        <DisplayProduct product={product} />
      </section>

      {/* product description section */}
      <section>
        <Description />
      </section>

      {/* related products section */}
      <section className="mt-12 md:mt-20 md:px-6  w-full max-w-[1280px] mx-auto">
        <RelatedProducts product={product} />
      </section>
    </div>
  );
};

export default Product;
