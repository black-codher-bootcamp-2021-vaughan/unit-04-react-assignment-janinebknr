import react from "react";
import Product from "./Product";
import PropTypes from "prop-types";

const ProductList = ({ products, ...props }) => {
  return (
    <div className="list">
      <div>
        {props.stored === "library" && <h2>Suggested Reading</h2>}
        {products.length === 0 ? (
          <div className="empty">No items...</div>
        ) : (
          products
            .filter((product) => props.stored === "bookcase" || !product.read)
            .map((product) => (
              <Product key={product.trackId} product={product} {...props} />
            ))
        )}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
