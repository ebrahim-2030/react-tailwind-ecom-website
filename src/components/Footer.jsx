import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterestP, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-12 md:mt-20 md:px-6 border-t border-light-brand border-opacity-25 flex flex-col items-center pt-10 pb-3 ">
      <div className="flex items-end gap-2 ">
        <div className="flex items-end">
          <img className="h-12 md:h-20 w-12 md:w-20  " src={logo} alt="logo" />
          <span className="text-xs font-medium text-brand -mb-1">eCom</span>
        </div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-light-brand/50 to-brand bg-clip-text text-transparent uppercase -mb-2">
          ecommerce
        </h2>
      </div>

      <ul className="flex gap-4 mt-8">
        <li className="hover:text-brand">
          <Link>Company</Link>
        </li>

        <li className="hover:text-brand">
          <Link>Office</Link>
        </li>
        <li className="hover:text-brand">
          <Link>About</Link>
        </li>
        <li className="hover:text-brand">
          <Link>Contact</Link>
        </li>
      </ul>
      <div className="flex items-center my-6 gap-4">
        <div className="border p-2">
          <FaInstagram />
        </div>
        <div className="border p-2">
          <FaPinterestP />
        </div>
        <div className="border p-2">
          <FaWhatsapp />
        </div>
      </div>
      <div className="border-t  pt-2 border-opacity-50">
        <p> Copyright 2025 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
