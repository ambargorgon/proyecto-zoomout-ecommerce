import React from "react";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import "./main.css";
import { Routes, Route } from "react-router-dom";
import { Cart } from './Cart/Cart';
import Form from "./Form/Form";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path='/form' element={<Form />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </main>
  );
};

export default Main;
