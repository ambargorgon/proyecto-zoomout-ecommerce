import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./cart.css";

const Cart = () => {
  const { cart, removeItem, clear } = useContext(CartContext);

  return (
    <>
      {cart.length !== 0 ? (
        <div className="cart-container">
          {cart.map((item) => {
            return (
              <div className="cartItem-container" key={item.id}>
                <img src={item.img} alt="item-img" />
                <h3>{item.title}</h3>
                <h3>Precio: ${item.price * item.cantidad}.-</h3>
                <h3>Cantidad: {item.cantidad}</h3>
                <button onClick={() => removeItem(item.id)}>X</button>
              </div>
            );
          })}
          <button className="clear-cart" onClick={clear}>
            Vaciar Carrito
          </button>
        </div>
      ) : (
        <h3 className="mensaje">No tienes ningún producto en tu carrito</h3>
      )}
    </>
  );
};

export default Cart;
