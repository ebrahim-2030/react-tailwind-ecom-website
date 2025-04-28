import { useContext } from "react";
import Item from "../components/Item";
import { ShopContext } from "../contexts/ShopContext";
import { MdKeyboardArrowDown } from "react-icons/md";

const Category = ({ banner, category }) => {
  const { products } = useContext(ShopContext);

  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  return (
    <div className="px-3 md:px-6 pt-16 md:pt-24 w-full max-w-[1280px] mx-auto">
      <div>
        <img src={banner} alt="" />
      </div>
      <div className="mt-6 flex justify-between items-center text-custom-black">
        <p>Showing 1-12 out of 36 products</p>
        <div className="flex items-center gap-2 border px-4 py-2 rounded-full mb-4">
          Sort By <MdKeyboardArrowDown className="text-xl" />
        </div>
      </div>
      <div className="  grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
        {filteredProducts.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Category;
