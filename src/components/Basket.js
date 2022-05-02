import React from "react";
import Product from "./Product";
import BasketCount from "./BasketCount";
import BasketTotal from "./BasketTotal";

const Basket = ({ basket, basketCount, basketTotal, ...props }) => {
  console.log(basketCount);
  return (
    <>
      <h2>Basket</h2>
      <BasketCount basketCount={basketCount} />
      <div className="basket">
        {basketCount === 0 ? (
          <div className="empty">No items in basket...</div>
        ) : (
          basket
            .filter((item) => item.added)
            .map((item) => (
              <Product key={item.trackId} item={item} {...props} />
            ))
        )}
      </div>
      <BasketTotal basketTotal={basketTotal} />
    </>
  );
};

export default Basket;
