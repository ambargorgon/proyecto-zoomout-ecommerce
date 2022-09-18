import React, { useState } from "react";
import { useEffect } from "react";
import "./itemCount.css";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const sumar = () => {
    count < stock && setCount(count + 1);
  };
  const restar = () => {
    count > 1 && setCount(count - 1);
  };

  useEffect(()=>{
    setCount(initial)
  },[initial])

  return (
    <div className="counter-add">
      <div className="counter-container">
        <button
          className="button"
          disabled={count <= 1}
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
        onClick={() => onAdd(count)}>Agregar al Carrito</button>
    </div>
  );
};

export default ItemCount;
