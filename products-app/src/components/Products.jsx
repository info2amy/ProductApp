import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";

export default function Products(props) {
  const handleChange = (e) => {
    // Every time a product number is typed, this resets FilteredProducts back to the original array (by passing props.products)
    props.setFilteredProducts(props.products);
    console.log(e.target.value);
    let filteredArray = props.products.filter((item) => {
      return item.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    // This line sets the array to the current filtered value
    props.setFilteredProducts(filteredArray);
  };

  // - - MAP items - -
  const items = props.filteredProducts.map((item, index) => {
    console.log(item);
    return (
      <Link to={`/detail/${item._id}`} key={index}>
        <div className="item-container">
          <img src={item.imgURL} alt="Pic" />
          <h3>{item.name}</h3>
          <h2>${item.price}</h2>
        </div>
      </Link>
    );
  });

  // - - - SORT BY:  drop-down - - -

  return (
    <div>
      <div className="productspage">
        <input
          className="search"
          onChange={handleChange}
          placeholder="Search"
        />
        <h4>SORT BY:</h4>
        <ol className="products">{items}</ol>
      </div>
    </div>
  );
}
