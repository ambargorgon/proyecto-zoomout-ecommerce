import React, { useContext } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./widgets.css";
import { FavContext } from "../../../context/FavContext";
import { Link } from "react-router-dom";

const FavWidget = () => {
  const { favoritos, eliminarItem } = useContext(FavContext);

  return (
    <div className="favWidget">
      <div className="favoritos">
        <button className="white-heart">
          <AiOutlineHeart size={20} />
        </button>
        <button className="red-heart">
          <AiFillHeart size={20} />
        </button>
        {favoritos.length === 0 ? (
          <div className="drop-content">
            <h4 className="msje-favs">Aún no has añadido favoritos</h4>
          </div>
        ) : (
          <div className="drop-content">
            {favoritos.map((item) => {
              return (
                <div key={item.id}>
                  <div className="favs-container">
                    <Link to={`/item/${item.id}`}>
                      <img src={item.img} className="img-favs" alt="item" />
                      <h2 className="h2-favs">{item.title}</h2>
                    </Link>
                    <button onClick={() => eliminarItem(item)}>X</button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavWidget;
