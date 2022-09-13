import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const CartWidget = () => {
  return (
    <Link to="/cart" size={20}>
      <RiShoppingCartLine size={20} className={"cartWidget"} />
    </Link>
  );
};

export default CartWidget;
