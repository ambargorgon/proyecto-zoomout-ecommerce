import React from "react";
import Item from "../item/Item";
import "../item/item.css";

const ItemList = ({ products }) => {
  return (
    <>
      {products.map((product) => {
        return (
          <div key={product.id} className="card-container">
            <Item product={product} />
          </div>
        );
      })}
    </>
  );
};

export default ItemList;
