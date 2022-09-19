import React, { useEffect, useState } from "react";
import "../main.css";
import ItemList from "./itemList/ItemList";
// import { products } from "../../../mock/products";
import "./itemListContainer.css";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const ItemListContainer = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemCollection = collection(db, "productos");

    const categorizar = () => {
      const q = query(itemCollection, where("category", "==", id));
      return q;
    };

    getDocs(id ? categorizar() : itemCollection)
      .then((res) => {
        const products = res.docs.map((prod) => {
          return {
            id: prod.id,
            ...prod.data(),
          };
        });
        setItems(products);
      })
      .catch(() => {
        console.log("error");
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
