import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import "./form.css";
import { db } from "../../../firebaseConfig";

const Form = ({ cart, precioTotal, clear, mostrarId }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const order = {
      buyer: { nombre, apellido, email },
      items: cart,
      total: precioTotal(),
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then((res) => {
      mostrarId(res.id);
      clear();
    });
  };



  const handleChangeNombre = (event) => {
    setNombre(event.target.value);
  };

  const handleChangeApellido = (event) => {
    setApellido(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <form action="" className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        required
        name="nombre"
        value={nombre}
        onChange={handleChangeNombre}
      />
      <input
        type="text"
        placeholder="Apellido"
        required
        name="apellido"
        value={apellido}
        onChange={handleChangeApellido}
      />
      <input
        type="email"
        placeholder="E-mail"
        required
        name="email"
        value={email}
        onChange={handleChangeEmail}
      />
      <input
        type="email"
        placeholder="E-mail"
        required
        name="email"
        value={email}
        onChange={handleChangeEmail}
      />
      <button className="form-button">Enviar</button>
    </form>
  );
};

export default Form;
