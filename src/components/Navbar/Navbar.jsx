import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className='navBar'>
            <h1 className='logo-header'>ZoomOut</h1>
            <ul>
                <li><a href="https://www.google.com">Productos</a></li>
                <li><a href="https://www.google.com">Nosotros</a></li>
                <li><a href="https://www.google.com">Contacto</a></li>
            </ul>
    </nav>
  )
}

export default Navbar