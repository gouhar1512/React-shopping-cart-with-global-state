import React from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Products";
import Cart from "./components/Cart";
import GlobalState from "./context/GlobalState";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
const App = () => {
  return (
    <GlobalState>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" component={Product} exact />
            <Route path="/cart" component={Cart} exact />
          </Switch>
        </BrowserRouter>
      </div>
    </GlobalState>
  );
};

export default App;
