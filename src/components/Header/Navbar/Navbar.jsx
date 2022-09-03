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
                  <li className='li__navbar'>
                      <div className="dropdown">
                        <button className="dropbtn">Productos
                          <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                          <a href="https://www.google.com">Remeras</a>
                          <a href="https://www.google.com">Buzos</a>
                          <a href="https://www.google.com">Pantalones</a>
                        </div>
                    </div>
                  </li>
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