import React from "react";
import PropTypes from "prop-types";

const Product = ({ item, ...props }) => {
  //Nested Destructuring
  const {
    kind,
    trackId,
    trackName,
    artworkUrl100,
    trackPrice,
    longDescription,
  } = item;

  return (
    <div className={"item " + kind}>
      <div className="item-image">
        <img
          src={artworkUrl100}
          alt={trackName.length > 0 ? trackName : `Product id=${trackId}`}
        />
      </div>
      <div className="item-details">
        <h2 title={trackName}>
          {trackName.length > 50
            ? trackName.substring(0, 50) + "..."
            : trackName}
        </h2>
        <p className="price">{trackPrice ? "£" + trackPrice : "No Price"}</p>
        <p className="description">
          {longDescription ? longDescription.substring(0, 300) + "..." : ""}
        </p>
      </div>
      <div className="item-button">
        {!item.added ? (
          <button
            className="add-button"
            onClick={() => props.addToBasket(trackId)}
          >
            Add to basket
          </button>
        ) : (
          <button
            className="remove-button"
            onClick={() => props.removeFromBasket(trackId)}
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;

//Prop Types
Product.propTypes = {
  item: PropTypes.object.isRequired,
};
