import React from 'react'
import CartWidget from './CartWidget'
import './navbar.css'
import estilos from '../../Footer/footer.module.css'

const Navbar = (props) => {
  if(props.status){
  return (
    <>
      <nav className='navBar'>
              <ul className='ul__navbar'>
                  <li className='li__navbar'><a href="https://www.google.com">Productos</a></li>
                  <li className='li__navbar'><a href="https://www.google.com">Nosotros</a></li>
                  <li className='li__navbar'><a href="https://www.google.com">Contacto</a></li>
              </ul>
      </nav>
      <CartWidget />
    </>
  )}else{
    return(
      <nav className={estilos.navbar}>
            <ul className='ul__navbar'>
                <li className='li__navbar'><a href="https://www.google.com">Productos</a></li>
                <li className='li__navbar'><a href="https://www.google.com">Nosotros</a></li>
                <li className='li__navbar'><a href="https://www.google.com">Contacto</a></li>
            </ul>
      </nav>
    )
  }
}

export default Navbar