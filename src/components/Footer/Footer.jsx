import React from 'react'
import Navbar from '../Navbar/Navbar'
import estilos from './footer.module.css' 

const Footer = () => {
  return (
    <footer className={estilos.footer}>
      <div>Footer</div> 
      <Navbar/>
    </footer>
  )
}

export default Footer