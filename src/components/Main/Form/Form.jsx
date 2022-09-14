import React from 'react'
import { useState } from 'react';
import "./form.css"

const Form = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState('');


    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(event.target.elements.nombre.value)
    };

    const handleChangeNombre = (event) =>{
        setNombre(event.target.value)
        console.log(event.target.value)
    }

    const handleChangeApellido = (event) => {
        setApellido(event.target.value)

    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }

  return (
    <form action='' className='form-container' onSubmit={handleSubmit}>
        <input type="text" placeholder='Nombre'  name="nombre" value={nombre} onChange={handleChangeNombre}/>
        <input type="text" placeholder="Apellido" name="apellido" value={apellido} onChange={handleChangeApellido}/>
        <input type="email" placeholder='E-mail'  name="email" value={email} onChange={handleChangeEmail}/>
        <button className='form-button'>Enviar</button>
    </form>
  ) 
}

export default Form