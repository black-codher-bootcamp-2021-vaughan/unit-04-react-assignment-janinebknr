import react from "react";
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
      <img
        src={artworkUrl100}
        alt={trackName.length > 0 ? trackName : `Product id=${trackId}`}
      />
      <div>
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
    </div>
  );
};

export default Product;

//Prop Types
Product.propTypes = {
  item: PropTypes.object.isRequired,
};
