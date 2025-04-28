import { createContext } from "react";
import all_products from "../data/all_product";

export const ShopContext = createContext(null);

const ShowContextProvider = (props) => {
  const all_product = { all_products };
  return (
    <ShopContext.Provider value={all_product}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShowContextProvider;
