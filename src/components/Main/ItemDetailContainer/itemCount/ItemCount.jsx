import React, { useState } from "react";
import "./itemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const sumar = () => {
    count < stock && setCount(count + 1);
  };
  const restar = () => {
    count > initial && setCount(count - 1);
  };

  return (
    <div className="counter-add">
      <div className="counter-container">
        <button
          className="button"
          disabled={count === initial}
          onClick={restar}
        >
          -
        </button>
        <h3 className="itemCounter">{count}</h3>
        <button className="button" disabled={count === stock} onClick={sumar}>
          +
        </button>
      </div>
      <button
        className="button-add"
        disabled={count === initial}
        onClick={() => onAdd(count)}>Agregar al Carrito</button>
    </div>
  );
};

export default ItemCount;
