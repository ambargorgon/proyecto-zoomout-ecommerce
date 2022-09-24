import React, { useEffect, useState } from "react";
import "../main.css";
import ItemList from "./itemList/ItemList";
import "./itemListContainer.css";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import flyerPhoto from "../../../images/flyer.png";

const ItemListContainer = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [flyer, setFlyer] = useState(true);

  useEffect(() => {
    const itemCollection = collection(db, "productos");
    setFlyer(true);
    setLoading(true)

    const categorizar = () => {
      const q = query(itemCollection, where("category", "==", id));
      setFlyer(false);
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
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }, [id]);

  return (
    <div className="itemListContainer">
      {loading ? (
        <div className="loader-line"></div>
      ) : (
        <>
          {flyer === true && (
            <section>
              <div className="div-container">
                <img src={flyerPhoto} alt="flyer" />
                <a href="#itemList">
                  <button> ▼ </button>
                </a>
              </div>
            </section>
          )}
          <div id="itemList">
            <ItemList products={items} />
          </div>
        </>
      )}
    </div>
  );
};

export default ItemListContainer;
