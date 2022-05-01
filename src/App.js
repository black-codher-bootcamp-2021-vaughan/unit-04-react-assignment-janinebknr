import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Basket from "./components/Basket";
import About from "./pages/About";
import "./styles/App.css";
import data from "./models/data.json";

const App = () => {
  const [items, setItems] = useState(data);

  return (
    <>
      <Router>
        <Route
          exact
          path="/"
          render={() => (
            <>
              <Header />
              <ProductList items={items} />
            </>
          )}
        />
        <Route path="/about" component={() => <About />} />
        <Route
          exact
          path="/basket"
          render={() => (
            <>
              <Header />
              <Basket />
            </>
          )}
        />
      </Router>
    </>
  );
};

export default App;
