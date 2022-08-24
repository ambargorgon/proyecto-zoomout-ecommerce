import React from 'react'
import Navbar from '../Header/Navbar/Navbar'
import estilos from './footer.module.css' 

const Footer = () => {
  return (
    <footer className={estilos.footer}>
      <Navbar status={false} />
    </footer>
  )
}

export default Footer