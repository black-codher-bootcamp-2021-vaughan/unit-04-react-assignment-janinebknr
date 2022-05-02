import React from "react";
import Product from "./Product";
import BasketCount from "./BasketCount";
import BasketTotal from "./BasketTotal";
import PropTypes from "prop-types";

const Basket = ({ basket, basketCount, basketTotal, ...props }) => {
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

Basket.propTypes = {
  basket: PropTypes.array.isRequired,
};

export default Basket;
