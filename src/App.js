import react from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Basket from "./components/Basket";
import About from "./pages/About";
import "./styles/App.css";

const App = () => {
  return (
    <>
      <Router>
        <Route
          exact
          path="/"
          render={() => (
            <>
              <Header />
              <ProductList />
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
