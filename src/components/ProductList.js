import react from "react";
import Product from "./Product";
import PropTypes from "prop-types";

const ProductList = ({ items, ...props }) => {
  return (
    <div className="list">
      <div>
        {props.stored === "mediastore" ? (
          <h2>Suggested For You</h2>
        ) : (
          <h2>Basket</h2>
        )}
        {items.length === 0 ? (
          <div className="empty">No items found...</div>
        ) : (
          items
            .filter((item) => props.stored === "basket" || !item.read)
            .map((item) => (
              <Product key={item.trackId} item={item} {...props} />
            ))
        )}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ProductList;
