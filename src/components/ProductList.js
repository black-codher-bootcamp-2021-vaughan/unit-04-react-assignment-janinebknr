import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";

const ProductList = ({ items, ...props }) => {
  return (
    <>
      <h2>Suggested For You</h2>
      <div className="results">
        {props.itemCount === 0 ? (
          <div className="empty">Sorry, no items in basket...</div>
        ) : (
          items
            .filter((item) => !item.added)
            .map((item) => (
              <Product key={item.trackId} item={item} {...props} />
            ))
        )}
      </div>
    </>
  );
};

ProductList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ProductList;
