import React, { useEffect, useState } from "react";
import "../main.css";
import ItemList from "./itemList/ItemList";
import { products } from "../../../mock/products";
import "./itemListContainer.css";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProducts = new Promise((res, rej) => {
      const filtered = products.filter((item) => item.category === id);
      setTimeout(() => {
        res(id ? filtered : products);
      }, 2000);
    });

    getProducts
      .then((result) => {
        setItems(result);
      })
      .catch((error) => {
        console.log("catch:", error);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="itemListContainer">
      {loading ? (
        <div className="loader-line"></div>
      ) : (
        <>
          <ItemList products={items} />
        </>
      )}
    </div>
  );
};

export default ItemListContainer;
