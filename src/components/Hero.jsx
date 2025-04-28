import { FaArrowRightLong } from "react-icons/fa6";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div className=" pt-16 pb-6 md:h-[100vh]  md:flex md:flex-row-reverse md:items-center ">
      {/* hero image */}
      <div className="md:w-1/2 flex justify-end">
        <img src={hero} className=" xl:w-[550px] xl:h-[500px] rounded-b-full" alt="" />
      </div>

      {/* hero text */}
      <div className="md:w-1/2  md:pt-10">
        <span className="text-sm font-medium leading-[60px] bg-yellow-200 p-2 text-custom-black ">
          New Drops Only.
        </span>
        <h1 className="text-4xl lg:text-6xl xl:text-6xl leading-[60px] lg:leading-[80px] xl:leading-[100px] font-bold text-custom-black">
          Wear Your{" "}
          <span className="text-brand ml-10 md:ml-0 uppercase">Uniqueness</span>
          .
        </h1>
        {/* action buttons */}
        <div className="flex items-center mt-10 gap-4">
          <button className="flex items-center gap-4 px-6 py-3 bg-custom-blue text-white  rounded-full">
            New Collections <FaArrowRightLong />
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
