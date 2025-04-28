import React from "react";
import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const Auth = () => {
  return (
    <div className="pt-16 px-3 md:px-6 md:pt-28 flex justify-center items-center h-[90vh]">

      {/* auth form container */}
      <div className="shadow w-full max-w-[400px] bg-gradient-to-b from-brand/70 text-white px-8 pt-10 pb-8 rounded-sm">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <form className="mt-8 text-custom-black">

          {/* name input */}
          <div className="flex justify-between items-center h-11 mb-4 px-3 bg-white rounded-sm">
            <input type="text" name="name" placeholder="Your Name" className="outline-none border-none flex-1 pr-2" />
            <FaUser className="text-brand" />
          </div>

          {/* email input */}
          <div className="flex justify-between items-center h-11 mb-4 px-3 bg-white rounded-sm">
            <input type="email" name="email" placeholder="Your Email" className="outline-none border-none flex-1 pr-2" />
            <MdEmail className="text-brand"/>
          </div>

          {/* password input */}
          <div className="flex justify-between items-center h-11 mb-4 px-3 bg-white rounded-sm">
            <input
              type="password"
              name="password"
              placeholder="Your Password" className="outline-none border-none flex-1 pr-2"
            />
            <RiLockPasswordFill className="text-brand"/>
          </div>

          {/* submit button */}
          <button type="submit" className="mt-4 w-full bg-brand rounded-sm text-white py-3 text-lg">
            Continue
          </button>

          {/* Login Link and Checkbox */}
          <div className="text-custom-black mt-8">
            <p>
              Already have an account{" "}
              <span className="underline">Login here</span>
            </p>
            <div className="mt-4">
              <input type="checkbox" className="mr-4" />
              By continuing, i agree the terms of use and privacy policy
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
