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
  const [basket, setBasket] = useState([]);

  const addToBasket = (id) => {
    setBasket(basket.concat(items.filter((item) => item.trackId === id)));
    setItems([
      ...items.map((item) => {
        if (item.trackId === id) {
          item.read = true;
        }
        return item;
      }),
    ]);
  };

  const removeFromBasket = (id) => {
    setBasket(basket.filter((item) => item.trackId !== id));
    setItems([
      ...items.map((item) => {
        if (item.trackId === id) {
          item.read = false;
        }
        return item;
      }),
    ]);
  };

  return (
    <>
      <Router>
        <Route
          exact
          path="/"
          render={() => (
            <>
              <Header />
              <ProductList
                items={items}
                stored="mediastore"
                addToBasket={addToBasket}
                removeFromBasket={removeFromBasket}
              />
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
              <ProductList
                items={basket}
                stored="basket"
                addToBasket={addToBasket}
                removeFromBasket={removeFromBasket}
              />
              {/* <Basket /> */}
            </>
          )}
        />
      </Router>
    </>
  );
};

export default App;
