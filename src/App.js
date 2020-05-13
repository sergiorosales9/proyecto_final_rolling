import React, { createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import ShoppingDetail from "./components/ShoppingDetail/ShoppingDetail";
import PageService from "./components/PageService/PageService";
import Payment from "./components/Payment/Payment";
import Register from "./components/Register/Register"
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";

function App() {


  return (
    
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route  path="/">
          <Register />
        </Route>
        <Route path="/main">
          <Main />
        </Route>
        <Route path="/shopping-cart">
          <ShoppingCart />
        </Route>
        <Route path="/shopping-details">
          <ShoppingDetail />
        </Route>
        <Route path="/service">
          <PageService />
        </Route>
        <Route path="/payment">
          <Payment />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
