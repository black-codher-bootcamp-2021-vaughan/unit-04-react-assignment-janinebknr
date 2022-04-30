import react from "react";
import BasketCount from "./BasketCount";
import BasketTotal from "./BasketTotal";

const Basket = () => {
  return (
    <>
      <h2>Basket</h2>
      <BasketCount />
      <BasketTotal />
    </>
  );
};

export default Basket;
