import React, { useContext } from "react";
import { HiOutlineHeart } from "react-icons/hi";
import { FcLike } from "react-icons/fc";
import "./widgets.css";
import { FavContext } from "../../../context/FavContext";
import { Link } from "react-router-dom";

const FavWidget = () => {
  const { favoritos, eliminarItem } = useContext(FavContext);

  return (
    <div className="favWidget">
      <div className="favoritos">
        <button className="white-heart">
          <HiOutlineHeart size={20} />
        </button>
        <button className="red-heart">
          <FcLike size={20} />
        </button>
        <div className="drop-content">
          {favoritos.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/item/${item.id}`}>
                  <div className="favs-container">
                    <img src={item.img} className="img-favs" alt="item" />
                    <h2 className="h2-favs">{item.title}</h2>
                    <button onClick={() => eliminarItem(item)}>X</button>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FavWidget;
