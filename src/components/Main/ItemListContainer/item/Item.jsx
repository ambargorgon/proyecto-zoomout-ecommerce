import React from "react";
import "./item.css";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <Link to={`/item/${product.id}`}>
      <img src={product.img} alt={product.title} className="card-img"></img>
      <h3 className="card-title">{product.title}</h3>
      <h4 className="card-price">${product.price}</h4>
    </Link>
  );
};

export default Item;
