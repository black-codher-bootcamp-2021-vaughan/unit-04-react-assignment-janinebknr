import React from "react";

const BasketCount = (props) => {
  return (
    <div className="basket-count">
      <p>
        {props.basketCount} item{props.basketCount === 1 ? "" : "s"}
      </p>
    </div>
  );
};

export default BasketCount;
