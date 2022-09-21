import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import "./cart.css";
import Form from "../Form/Form";
import { useState } from "react";


const Cart = () => {
  const { cart, removeItem, clear, precioTotal } = useContext(CartContext);
  const [compraId, setCompraId] = useState('')

  const mostrarId = (id) => {
    setCompraId(id)
  }

  if(compraId){
    return <h3 className="mensaje">Gracias por comprar con nosotros, tu id de compra es {compraId}</h3>
  }

  return (
    <>
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
        {cart.length === 0 ? (
          <>
            <h3 className="mensaje">No tienes ningún producto en tu carrito</h3>
            <Link to="/">
              <button className="item-button">Volver a Inicio</button>
            </Link>
          </>
        ) : (
          <>
            <h3 className="precio-total">Total: ${precioTotal()}.-</h3>
            <button className="clear-cart" onClick={clear}>
              Vaciar Carrito
            </button>
            <button className="finish-cart">Terminar Compra</button>
            <Form cart={cart} precioTotal={precioTotal} clear={clear} mostrarId={mostrarId}/>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
// 