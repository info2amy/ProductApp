import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail(props) {
  // usePARAMS reads the ":cabinID" from the URL
  const { itemID } = useParams();
  console.log(itemID);

  const items = props.products.map((item, index) => {
    // console.log(item);
    return (
      <div className="item-deets" key={index}>
        <img src={item.imgURL} alt="Pic" />
        <h3>{item.name}</h3>
        <h5>{item.price}</h5>
        <p>{item.description}</p>
      </div>
    );
  });

  return <div>{items}</div>;
}
