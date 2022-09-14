import React from "react";
import { useContext } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  return (
    <Link to="/cart" size={20}>
      <div className="cartWidget">
        <RiShoppingCartLine size={20} />
        <span>{cart.length}</span>
      </div>
    </Link>
  );
};

export default CartWidget;
