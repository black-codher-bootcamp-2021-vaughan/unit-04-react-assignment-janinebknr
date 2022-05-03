import React, { useState, useEffect } from "react";
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
  const itemCount = items.length;
  const count = basket.length;
  const [total, setTotal] = useState(0);

  const addToBasket = (id) => {
    setBasket(basket.concat(items.filter((item) => item.trackId === id)));
    setItems([
      ...items.map((item) => {
        if (item.trackId === id) {
          item.added = true;
          setTotal(total + item.trackPrice);
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
          setTotal(total - item.trackPrice);
        }
        return item;
      }),
    ]);
  };

  useEffect(() => {
    document.title = `Basket: ${count} item${count === 1 ? "" : "s"}`;
  });

  async function search(value) {
    const url = `https://itunes.apple.com/search?term=${value}&limit=20&explicit=no`;
    const apiResults = await fetch(url).then((res) => res.json());
    if (!apiResults.error) {
      const filteredResults = apiResults.results.filter(
        (a) => a.wrapperType === "track"
      );
      console.log(filteredResults);
      setItems(filteredResults);
    }
  }

  return (
    <>
      <Router>
        <Route
          exact
          path="/"
          render={() => (
            <>
              <Header basketCount={count} />
              <Search search={search} term={term} setTerm={setTerm} />
              <ProductList
                items={items}
                addToBasket={addToBasket}
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
                removeFromBasket={removeFromBasket}
                basketCount={count}
                basketTotal={total}
              />
            </>
          )}
        />
      </Router>
    </>
  );
};

export default App;
