import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";

export default function Products(props) {
  const items = props.products.map((item, index) => {
    // console.log(item);
    return (
      <div className="item-container" key={index}>
        <Link to={`/detail/${item._id}`}>
          <img src={item.imgURL} alt="Pic" />
          <h3>{item.name}</h3>
          <h5>{item.price}</h5>
        </Link>
      </div>
    );
  });
  return (
    <div>
      <div className="productspage">
        <h4>Search</h4>
        <h4>SORT BY:</h4>
        <ol>{items}</ol>
      </div>
    </div>
  );
}
