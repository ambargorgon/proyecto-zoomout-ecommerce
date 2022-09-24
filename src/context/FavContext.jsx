import { useEffect } from "react";
import { createContext, useState } from "react";

export const FavContext = createContext();

const FavProvider = (props) => {
  const [favoritos, setFavoritos] = useState([]);

  const isInFavs = (id) => {
    return favoritos.some((product) => product.id === id);
  };

  const eliminarItem = (item) => {
    setFavoritos(favoritos.filter((prod) => prod.id !== item.id));
  };

  const addFavorito = (item) => {
    if (isInFavs(item.id) === true) {
      eliminarItem(item);
    } else {
      setFavoritos([...favoritos, { ...item }]);
    }
  };

  useEffect(() => {
    console.log(favoritos);
  }, [favoritos]);

  return (
    <FavContext.Provider value={{ favoritos, addFavorito, eliminarItem }}>
      {props.children}
    </FavContext.Provider>
  );
};

export default FavProvider;
