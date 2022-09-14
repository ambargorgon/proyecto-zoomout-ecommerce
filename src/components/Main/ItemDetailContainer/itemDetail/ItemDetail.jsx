import React, { useState } from "react";
import "./itemDetail.css";
import ItemCount from "../itemCount/ItemCount";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";

const ItemDetail = ({ item }) => {
  const { cart, addItem } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(0);

  const onAdd = (param) => {
    setCantidad(param);
    addItem(item, param);
  };
console.log(cart)
  return (
    <>
      <div key={item.id} className="item-detail-container">
        <div className="item-text">
          <h1 className="item-title">
            {item.title} ${item.price}
          </h1>
          <h4 className="item-description">{item.description}</h4>
        </div>
        <img src={item.img} className="item-img" alt="product-img"></img>
      </div>
      {cantidad === 0 ? (
        <ItemCount stock={item.stock} initial={0} onAdd={onAdd} />
      ) : (
        <Link to="/cart">
          <button className="item-button">Ir al Carrito</button>
        </Link>
      )}
    </>
  );
};

export default ItemDetail;
