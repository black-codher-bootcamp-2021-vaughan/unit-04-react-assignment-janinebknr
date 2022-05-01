import react from "react";
import Product from "./Product";
import PropTypes from "prop-types";

const ProductList = ({ items, ...props }) => {
  return (
    <div className="list">
      <div>
        {props.stored === "library" && <h2>Suggested Reading</h2>}
        {items.length === 0 ? (
          <div className="empty">No items found...</div>
        ) : (
          items
            .filter((item) => props.stored === "bookcase" || !item.read)
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
