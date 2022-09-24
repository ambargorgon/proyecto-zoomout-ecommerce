import { useContext, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import "./form.css";
import { db } from "../../../firebaseConfig";
import { CartContext } from "../../../context/CartContext";

const Form = () => {
  const { cart, precioTotal, clear } = useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [emailVer, setEmailVer] = useState("")

  const [compraId, setCompraId] = useState('')

  const mostrarId = (id) => {
    setCompraId(id)
  }

  if(compraId){
    return <h3 className="mensaje">Gracias por comprar con nosotros, tu id de compra es {compraId}</h3>
  }

  const handleSubmit = (event) => {

    emailVer !== email ? alert("Inserta el mismo mail").event.preventDefault() :

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

  const handleChangeEmailVerification= (event) => {
    setEmailVer(event.target.value);
  }

  return (
    <>
      <h2>Por favor completa con tus datos:</h2>
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
          placeholder="E-mail Nuevamente"
          required
          name="email"
          value={emailVer}
          onChange={handleChangeEmailVerification}
        />
        <button className="form-button">Enviar</button>
      </form>
    </>
  );
};

export default Form;
