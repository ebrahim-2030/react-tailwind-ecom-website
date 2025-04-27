import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import navlinks from "../data/navlinks";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import {} from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";

import { TiShoppingCart } from "react-icons/ti";

const Navbar = () => {
  // toggle mobile menu
  const [menu, setMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 bg-white w-full border-b ">
      {/* desctkop navigation */}
      <div className="p-3 md:px-6 w-full max-w-[1280px] mx-auto  flex justify-between items-center">
        {/* logo and brand */}
        <div className="flex items-end">
          <img className="h-8 w-8 md:h-10 md:w-10" src={logo} alt="logo" />
          <span className="text-xs font-medium text-brand -mb-1">eCom</span>
        </div>

        {/* desctop navlinks */}
        <div className="hidden md:flex">
          <ul className="flex items-center capitalize gap-10 text-custom-black xl:text-lg">
            {navlinks.map((link, index) => (
              <li key={index} className="p-1">
                <NavLink
                  to={link.linkPath}
                  className={({ isActive }) =>
                    isActive
                      ? "text-brand font-medium"
                      : "hover:text-brand hover:font-medium"
                  }
                >
                  {link.linkText}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* login button */}
          <button className="ml-10 ">
            <Link
              to="/auth"
              className="px-8 py-2.5  bg-brand text-white  rounded-full border-opacity-60 "
            >
              Login
            </Link>
          </button>
        </div>

        {/* cart and menu toggle */}
        <div className="flex items-center gap-5">
          <button className="relative">
            <TiShoppingCart className="text-custom-blue text-3xl md:text-4xl" />
            <span className=" absolute -top-1 -right-1 bg-green-400 rounded-full text-white flex justify-center items-center  text-[11px] h-[14px] w-[14px]">
              0
            </span>
          </button>
          <button
            onClick={() => setMenu((prev) => !prev)}
            className="text-3xl text-brand md:hidden"
          >
            {menu ? (
              <AiOutlineClose />
            ) : (
              <HiOutlineMenuAlt3 className="text-3xl" />
            )}
          </button>
        </div>
      </div>

      {/* mobile navigation */}
      <div
        className={`absolute right-0 top-14 w-full bg-white border-b py-10 flex flex-col items-center ${
          menu ? "translate-x-[0%]" : "translate-x-[100%] "
        } transition-all duration-300 `}
      >
        <ul className="flex flex-col items-center gap-1  text-lg text-custom-black capitalize">
          {navlinks.map((link, index) => (
            <li key={index} className="p-1">
              <NavLink
                onClick={() => setMenu(false)}
                to={link.linkPath}
                className={({ isActive }) =>
                  isActive
                    ? "text-brand font-medium"
                    : "hover:text-brand hover:font-medium"
                }
              >
                {link.linkText}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* mobile login button */}
        <button className="mt-6">
          <Link
            to="/auth"
            className="px-8 py-3  bg-brand text-white  rounded-full  "
          >
            Login
          </Link>
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
