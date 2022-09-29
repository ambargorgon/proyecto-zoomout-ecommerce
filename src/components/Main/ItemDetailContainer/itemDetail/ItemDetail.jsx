import React, { useState } from "react";
import "./itemDetail.css";
import ItemCount from "../itemCount/ItemCount";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";
import { FavContext } from "../../../../context/FavContext";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useEffect } from "react";

const ItemDetail = ({ item }) => {
  const { addItem, cantidadProd } = useContext(CartContext);
  const { addFavorito, eliminarItem, favoritos } = useContext(FavContext);
  const [cantidad, setCantidad] = useState(0);
  const [agregado, setAgregado] = useState(false);

  useEffect((item) => {
    if (favoritos.some((prod) => prod.id === item.id)) {
      setAgregado(true);
    } else {
      setAgregado(false);
    }
  }, [favoritos]);

  const onAdd = (param) => {
    setCantidad(param);
    addItem(item, param);
  };

  const quantity = cantidadProd(item.id);

  return (
    <div key={item.id} className="item-detail-container">
      <div className="item-text">
        <img src={item.img} className="item-img" alt="product-img"></img>
        <div className="item-info">
          {agregado ? (
            <button
              onClick={() => eliminarItem(item)}
              className="addFav-button"
            >
              <AiFillHeart />
            </button>
          ) : (
            <button onClick={() => addFavorito(item)} className="addFav-button">
              <AiOutlineHeart />
            </button>
          )}

          <h1 className="item-title">
            {item.title} ${item.price}
          </h1>
          <h4 className="item-description">{item.description}</h4>
          <div className="item-buttons">
            {cantidad === 0 ? (
              <ItemCount stock={item.stock} initial={quantity} onAdd={onAdd} />
            ) : (
              <>
                <Link to="/">
                  <button className="item-button">Volver a Inicio</button>
                </Link>
                <Link to="/cart">
                  <button className="item-button">Ir al Carrito</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
