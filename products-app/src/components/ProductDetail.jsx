import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

export default function ProductDetail(props) {
  // usePARAMS reads the ":cabinID" from the URL
  const { itemID } = useParams();
  // console.log(itemID);

  const [item, setItem] = useState([]);
  const getItem = async () => {
    const resp = await axios.get(
      `https://products-api-01.herokuapp.com/api/products/${itemID}`
    );
    console.log(resp);
    setItem(resp.data);
  };
  useEffect(() => {
    getItem();
  }, []);

  return (
    <div className="item-deets" key={item._id}>
      <img src={item.imgURL} alt="Pic" />
      <div className="item-text">
        <h3>{item.name}</h3>
        <h2>${item.price}</h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
}
