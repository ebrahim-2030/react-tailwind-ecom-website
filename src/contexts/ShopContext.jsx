import { createContext } from "react";
import all_products from "../data/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const products = all_products;
  return (
    <ShopContext.Provider value={{ products }}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;   
