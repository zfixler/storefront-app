import React from "react"
import Header from "./components/Header"
import Cart from "./components/Cart"
import Storefront from "./components/Storefront"
import {Switch, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/">
          <Storefront />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
