import React, {useState, useEffect } from "react";
import axios from "axios";
import {Route} from "react-router-dom";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import Nav from "./components/Nav";

import './App.css';

export default function App() {
  // This sets up our States; products will never be modified, but filteredProducts (initially the same as products) will be reset every time text is input
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const getProducts = async () => {
    const resp = await axios.get("https://products-api-01.herokuapp.com/api/products")
    // console.log(resp);
    setProducts(resp.data)
    setFilteredProducts(resp.data)
  };
  useEffect(() => {
    getProducts()
  }, [])
  

  return (
    <div className="App">
      <Nav />

      <Route exact path="/">
        <Products products={products} filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}/>
      </Route>

      <Route path="/detail/:itemID">
        <ProductDetail products={products} />
      </Route>

    </div>
  );
}
