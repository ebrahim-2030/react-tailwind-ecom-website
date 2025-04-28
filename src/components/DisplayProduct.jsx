import React from "react";
import { FiStar } from "react-icons/fi";
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";

const DisplayProduct = ({ product }) => {
  return (
    <div className="mt-10 md:flex gap-8 lg:gap-12">
      {/* product images section */}
      <div className=" md:w-1/2 lg:flex lg:flex-row-reverse lg:gap-2 lg:justify-start">
        <div className="flex-1">
          <img src={product.image} className="w-full " alt="" />
        </div>
        <div className="  mt-2 lg:mt-0 flex items-center gap-2 lg:flex-col ">
          <img
            src={product.image}
            className="w-20 md:h-20 h-24 lg:h-28 md:w-20 flex-1 xl:w-28 xl:h-32"
            alt=""
          />
          <img
            src={product.image}
            className="w-20 md:h-20 h-24 lg:h-28 md:w-20 flex-1 xl:w-28 xl:h-32"
            alt=""
          />
          <img
            src={product.image}
            className="w-20 md:h-20 h-24 lg:h-28 md:w-20 flex-1 xl:w-28 xl:h-32"
            alt=""
          />
          <img
            src={product.image}
            className="w-20 md:h-20 h-24 lg:h-28 md:w-20 flex-1 xl:w-28 xl:h-32"
            alt=""
          />
        </div>
      </div>

      {/* product details section */}
      <div className="md:w-1/2">

      {/* product title */}
        <h2 className="mt-6 md:mt-0 text-xl lg:text-2xl xl:text-4xl font-semibold xl:leading-[50px] xl:font-bold">{product.name}</h2>
        {/* product ratings */}
        <div className="text-xl flex items-center mt-2 text-brand">
          <TiStarFullOutline />
          <TiStarFullOutline />
          <TiStarFullOutline />
          <TiStarFullOutline />
          <TiStarOutline />
        </div>

        {/* product prices */}
        <div className="text-xl font-bold flex items-center gap-4 mt-4">
          <div className="line-through">${product.new_price}</div>
          <div className="text-red-500">${product.old_price}</div>
        </div>
        <div>
          <p className="mt-8 leading-7">
            A Lightweight Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Doloribus, hic repudiandae sequi minima quis natus commodi
            sunt nihil ratione ad totam laboriosam officiis facilis, impedit
            similique, laudantium tempora. Perspiciatis, ad!
          </p>
        </div>

        {/* product size selection */}
        <div className="flex items-center mt-8 gap-4">
          <div className="border px-4 py-2 bg-gray-50">S</div>
          <div className="border px-4 py-2 bg-gray-50">M</div>
          <div className="border px-4 py-2 bg-gray-50">L</div>
          <div className="border px-4 py-2 bg-gray-50">XL</div>
          <div className="border px-4 py-2 bg-gray-50">XXL</div>
        </div>

        {/* add to cart button */}
        <button className="px-6 py-3 bg-red-500 text-white rounded-sm mt-8">
          ADD TO CART
        </button>

        {/* product category tags tags */}
        <div className="mt-8 text-sm font-medium">
          Category : <span className="capitalize">{product.category}</span>,
          T-Shirt, Crop TopTags : Modern, Latest
        </div>
      </div>
    </div>
  );
};

export default DisplayProduct;
