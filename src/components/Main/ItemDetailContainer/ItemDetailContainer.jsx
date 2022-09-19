import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./itemDetail/ItemDetail";
import "./itemDetail/itemDetail.css";
import { db } from "../../../firebaseConfig";
import { getDoc, doc, collection } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const itemCollection = collection(db, "productos");
    const ref = doc(itemCollection, id);
    getDoc(ref)
      .then((res) => {
        setItem({
          id: res.id,
          ...res.data(),
        });
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
