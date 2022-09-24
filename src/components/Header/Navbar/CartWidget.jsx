import React from "react";
import { useContext } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import "./widgets.css"

const CartWidget = () => {
  const {cantidadCarro } = useContext(CartContext);
  return (
    <Link to="/cart" size={20}>
      <div className="cartWidget">
        <RiShoppingCartLine size={20} />
        <span>{cantidadCarro() !== 0 && cantidadCarro()}</span>
      </div>
    </Link>
  );
};

export default CartWidget;
