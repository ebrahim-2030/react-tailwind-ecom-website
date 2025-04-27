import { FaArrowRightLong } from "react-icons/fa6";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="mt-4 h-full md:flex md:flex-row-reverse ">
      <div className="md:w-1/2 h-full">
        <img src={hero} className=" w-full h-full " alt="" />
      </div>
      <div className="md:w-1/2 h-full md:pt-10">
        <span className="text-sm font-medium leading-[60px] text-custom-black text-opacity-40">
          New Arrivals Only.
        </span>
        <h1 className="text-5xl lg:text-6xl xl:text-6xl leading-[60px] lg:leading-[80px] xl:leading-[100px] font-bold text-custom-black">
          Wear Your{" "}
          <span className="text-brand ml-10 md:ml-0 uppercase">Uniqueness</span>
          .
        </h1>
        <div className="flex items-center mt-10 gap-4">
          <button className="flex items-center gap-4 px-6 py-3 bg-custom-blue text-white  rounded-full">
            Latest Collections <FaArrowRightLong />
          </button>
          <button className="bg-brand px-6 py-3  text-white rounded-full">
            Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
