import React from "react";
import Hero from "../components/Hero";
import Popular from "../components/Popular";

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
    </div>
  );
};

export default Shop;
