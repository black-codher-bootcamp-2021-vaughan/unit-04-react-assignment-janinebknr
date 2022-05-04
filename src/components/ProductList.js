import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";

const ProductList = ({ items, itemCount, ...props }) => {
  return (
    <>
      <h2 className="page-title">Suggested For You</h2>
      <div className="results">
        {itemCount === 0 ? (
          <div className="empty">No items found....</div>
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
