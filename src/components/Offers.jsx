import offers_img from "../assets/offers.png";

const Offers = () => {
  return (
    <div className="bg-gradient-to-b from-custom-blue/20 to-white flex flex-col md:flex-row md:justify-center items-center pt-10 pb-5 ">
      {/* offer text section */}
      <div className="flex flex-col  items-center md:items-start">
        <h2 className="text-3xl md:text-4xl  lg:text-5xl text-custom-blue mb-4 font-bold md:w-[360px] ">
          Exclusive Offers For You
        </h2>
        <p className="font-medium">ONLY ON BEST SELLERS PRODUCTS</p>
        <button className="bg-brand px-6 py-3  text-white rounded-full mt-6">
          Check Now
        </button>
      </div>

      {/* offer image section */}
      <div>
        <img
          src={offers_img}
          className="mt-6 md:mt-0 h-[400px] md:h-[550px] w-[300px] md:w-[400px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default Offers;
