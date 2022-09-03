import React, { useEffect, useState } from "react";
import "../main.css";
import ItemCount from "./itemCount/ItemCount";
import ItemList from "./itemList/ItemList";
import { products } from "../../../mock/products";
import "./itemListContainer.css";

const ItemListContainer = () => {
  const onAdd = () => {
    console.log("Agregado al carrito");
  };

  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProducts = new Promise((res, rej) => {
      setTimeout(() => {
        res(products);
      }, 3000);
    });
    getProducts
      .then((result) => {
        setItems(result);
      })
      .catch((error) => {
        console.log("catch:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="itemListContainer">
      {loading ? (
        <div className="loader-line"></div>
      ) : (
        <>
          <ItemList products={items} />
          <ItemCount stock={10} initial={0} onAdd={onAdd} />
        </>
      )}
    </div>
  );
};

export default ItemListContainer;
