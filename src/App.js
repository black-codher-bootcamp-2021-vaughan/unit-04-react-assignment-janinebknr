import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Search from "./components/Search";
import ProductList from "./components/ProductList";
import Basket from "./components/Basket";
import About from "./pages/About";
import "./styles/App.css";
import data from "./models/data.json";

const App = () => {
  const [items, setItems] = useState(data);
  const [basket, setBasket] = useState([]);
  const [term, setTerm] = useState("");
  const count = basket.length;

  const addToBasket = (id) => {
    setBasket(basket.concat(items.filter((item) => item.trackId === id)));
    setItems([
      ...items.map((item) => {
        if (item.trackId === id) {
          item.added = true;
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
          item.added = false;
        }
        return item;
      }),
    ]);
  };

  async function searchItems(value) {
    const url = `https://itunes.apple.com/search?term=${value}&limit=30&explicit=no`;
    const apiResults = await fetch(url).then((res) => res.json());
    if (!apiResults.error) {
      console.log(JSON.stringify(apiResults.results));
      // setItems(JSON.stringify(apiResults.results));
    }
  }

  const itemCount = items.length;

  return (
    <>
      <Router>
        <Route
          exact
          path="/"
          render={() => (
            <>
              <Header basketCount={count} />
              <Search searchItems={searchItems} term={term} setTerm={setTerm} />
              <ProductList
                items={items}
                stored="mediastore"
                addToBasket={addToBasket}
                // removeFromBasket={removeFromBasket}
                itemCount={itemCount}
              />
            </>
          )}
        />
        <Route path="/about" component={() => <About basketCount={count} />} />
        <Route
          exact
          path="/basket"
          render={() => (
            <>
              <Header basketCount={count} />
              <Basket
                basket={basket}
                stored="basket"
                removeFromBasket={removeFromBasket}
                basketCount={count}
                // basketTotal={total}
              />
              {/* <ProductList
                items={basket}
                stored="basket"
                addToBasket={addToBasket}
                removeFromBasket={removeFromBasket}
              /> */}
              {/* <Basket /> */}
            </>
          )}
        />
      </Router>
    </>
  );
};

export default App;
