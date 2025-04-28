import React from "react";
import Hero from "../components/Hero";
import Popular from "../components/Popular";
import Offers from "../components/Offers";
import Collection from "../components/Collection";
import Newsletter from "../components/Newsletter";

const Shop = () => {
  return (
    <div className="">
      {/* hero section  */}
      <div className="bg-gradient-to-b from-white to-brand/20">
        <section className=" px-3 md:px-6  w-full max-w-[1280px] mx-auto ">
          <Hero />
        </section>
      </div>

      {/* popular products section */}
      <section className="mt-12 md:mt-20 px-3 md:px-6  w-full max-w-[1280px] mx-auto ">
        <Popular />
      </section>

      {/* offers section */}
      <section className="mt-12 md:mt-20 md:px-6  w-full max-w-[1024px] mx-auto ">
        <Offers />
      </section>

      {/* new collection section */}
      <section className="mt-12 md:mt-20 px-3 md:px-6  w-full max-w-[1280px] mx-auto ">
        <Collection />
      </section>

      {/* newsletter section */}
      <section className="mt-12 md:mt-24  md:px-6  w-full max-w-[1024px] mx-auto ">
        <Newsletter />
      </section>
    </div>
  );
};

export default Shop;
