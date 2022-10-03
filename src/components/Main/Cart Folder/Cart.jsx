import React from "react";
import { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import "./cart.css";

export const Cart = () => {
  const { cart, removeItem, clear, precioTotal } = useContext(CartContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <>
          <h3 className="mensaje">No tienes ningún producto en tu carrito</h3>
          <Link to="/">
            <button className="home-button">Volver a Inicio</button>
          </Link>
        </>
      ) : (
        <>
          {loading ? (
            <div className="loader-line"></div>
          ) : (
            <>
              {cart.map((item) => {
                return (
                  <div className="cartItem-container" key={item.id}>
                    <Link to={`/item/${item.id}`}>
                      <img src={item.img} alt="item-img" className="cart-img" />
                    </Link>
                    <h3>{item.title}</h3>
                    <h3>Precio: ${item.price * item.cantidad}.-</h3>
                    <h3>Cantidad: {item.cantidad}</h3>
                    <button onClick={() => removeItem(item.id)}>X</button>
                  </div>
                );
              })}

              <div className="cart-functions">
                <button className="clear-cart" onClick={clear}>
                  Vaciar Carrito
                </button>
                <h3 className="precio-total">Total: ${precioTotal()}.-</h3>
              </div>

              <Link to="/form">
                <button className="finish-cart">Terminar Compra</button>
              </Link>
            </>
          )}
        </>
      )}
    </div>
  );
};
