import logo from './logo.svg';
import React, {useState, useEffect } from "react";
import axios from "axios";
import {Route} from "react-router-dom";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";

import './App.css';

export default function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Products />
      </Route>

      <Route path="/detail">
        <ProductDetail />
      </Route>

      <Route path="/search">
        <SearchBar />
      </Route>

      <Route path="/sort">
        <SortBy />
      </Route>
    </div>
  );
}
