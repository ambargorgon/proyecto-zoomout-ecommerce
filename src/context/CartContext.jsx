import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, cantidad) => {
    if (isInCart(item.id)) {
      sumarCantidad(item, cantidad);
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
  };

  const sumarCantidad = (item, cantidad) => {
    const cartUpdated = cart.map((prod) => {
      if (prod.id === item.id) {
        const updated = {
          ...prod,
          cantidad: prod.cantidad + cantidad,
        };
        return updated;
      } else {
        return prod;
      }
    });
    setCart(cartUpdated);
  };

  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  const removeItem = (itemId) => {
    setCart(cart.filter((prod) => prod.id !== itemId));
  };

  const clear = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addItem, clear, removeItem }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
