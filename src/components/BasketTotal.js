import React from "react";

const BasketTotal = (props) => {
  return (
    <div className="basket-total">
      <p>Total: £{props.basketTotal}</p>
    </div>
  );
};

export default BasketTotal;
