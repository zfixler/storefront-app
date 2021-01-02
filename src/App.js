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
        <Route exact path="/storefront-app">
          <Storefront />
        </Route>
        <Route path="/storefront-app/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
