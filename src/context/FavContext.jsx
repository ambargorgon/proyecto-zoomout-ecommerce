import { createContext, useState } from "react";

export const FavContext = createContext();

const FavProvider = (props) => {
  const [favoritos, setFavoritos] = useState([]);

  const eliminarItem = (item) => {
    setFavoritos(favoritos.filter((prod) => prod.id !== item.id));
  };

  const addFavorito = (item) => {
    setFavoritos([...favoritos, { ...item }]);
  };

  return (
    <FavContext.Provider value={{ favoritos, addFavorito, eliminarItem }}>
      {props.children}
    </FavContext.Provider>
  );
};

export default FavProvider;
