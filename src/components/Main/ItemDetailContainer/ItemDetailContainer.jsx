import React, { useEffect, useState } from "react";
import { products } from "../../../mock/products";
import ItemDetail from "./itemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  useEffect(() => {
    let product = products.find((producto) => producto.id === 4);

    const getProduct = new Promise((res, rej) => {
      setTimeout(() => {
        res(product);
      }, 3000);
    });

    getProduct
      .then((result) => {
        setItem(result);
      })
      .catch((error) => {
        console.log("catch:", error);
      });
  }, []);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
