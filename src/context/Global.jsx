/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
export const GlobalContext = createContext();
const Global = ({ children }) => {
  const [product, setProduct] = useState([]);
  const fetchProucts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };
  const deletProduct = (id) => {
    setProduct(product.filter((p) => p.id != id));
  };

  return (
    <GlobalContext.Provider
      value={{ product, setProduct, fetchProucts, deletProduct }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default Global;
