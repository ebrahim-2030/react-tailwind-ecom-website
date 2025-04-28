import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-gradient-to-t from-brand/20 to-white flex flex-col  items-center pt-10 pb-6 px-4">
      <div className="flex flex-col  items-center">
        <h2 className="text-3xl  lg:text-4xl text-custom-blue mb-4 font-bold text-center leading-10 ">
          Get Exclusive Offers On Your Email
        </h2>
        <p className="font-medium text-center">
          Subscript to our newsletter and stay updated
        </p>
      </div>
      <form className="flex items-center mt-10 w-full max-w-[500px] bg-custom-blue h-12 rounded-sm md:h-14">
        <input
          className="h-full flex-1 px-2 border-none outline-none"
          type="emial"
          name="email"
          placeholder="Your Email ID"
        />
        <button className="text-white flex justify-center items-center text-center h-full px-3">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
