import react from "react";
import Product from "./Product";
import PropTypes from "prop-types";

const ProductList = ({ items, ...props }) => {
  return (
    <div className="results">
      <div>
        {props.stored === "mediastore" && (
          <h2>{props.itemCount} Suggested For You</h2>
        )}
        {props.itemCount === 0 ? (
          <div className="empty">No items found...</div>
        ) : (
          items
            .filter((item) => props.stored === "basket" || !item.added)
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
