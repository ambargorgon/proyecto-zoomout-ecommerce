import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../mock/products";
import ItemDetail from "./itemDetail/ItemDetail";
import "./itemDetail/itemDetail.css";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = new Promise((res, rej) => {
      let product = products.find((producto) => producto.id === id);
      setTimeout(() => {
        res(product);
      }, 1000);
    });

    getProduct
      .then((result) => {
        setItem(result);
      })
      .catch((error) => {
        console.log("catch:", error);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      {loading ? (
        <div className="loader-line"></div>
      ) : (
        <div className="detail-container">
          <ItemDetail item={item} />
        </div>
      )}
    </>
  );
};

export default ItemDetailContainer;
