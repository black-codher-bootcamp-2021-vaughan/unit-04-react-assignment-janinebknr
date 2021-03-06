import React from "react";
import { Link } from "react-router-dom";

const About = (props) => {
  return (
    <>
      <div className="header">
        <h1>About</h1>
        <div className="breadcrumb">
          <Link to="/" id="homelink">
            Home
          </Link>{" "}
          |{" "}
          <Link to="/about" id="aboutlink">
            About
          </Link>{" "}
          |{" "}
          <Link to="/basket" id="basketlink">
            Basket ({props.basketCount})
          </Link>
        </div>
      </div>
      <div className="page">
        <h2 className="page-title">Welcome to the Music Store!</h2>
        <p>
          Browse the iTunes store for media you are interested in. Add to your
          basket and keep track of costs.
        </p>
      </div>
    </>
  );
};

export default About;
