import React from "react";
import CartWidget from "./CartWidget";
import "./navbar.css";
import estilos from "../../Footer/footer.module.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  if (props.status) {
    return (
      <>
        <nav className="navBar">
          <ul className="ul__navbar">
            <li className="li__navbar">
              <div className="dropdown">
                <Link to="/">
                  <button className="dropbtn">
                    Productos
                    <i className="fa fa-caret-down"></i>
                  </button>
                </Link>
                <div className="dropdown-content">
                  <Link to="/category/remeras">Remeras</Link>
                  <Link to="/category/buzos">Buzos</Link>
                  <Link to="/category/pantalones">Pantalones</Link>
                </div>
              </div>
            </li>
            <li className="li__navbar">
              <a href="https://www.google.com">Nosotros</a>
            </li>
            <li className="li__navbar">
              <a href="https://www.google.com">Contacto</a>
            </li>
          </ul>
        </nav>
        <CartWidget />
      </>
    );
  } else {
    return (
      <nav className={estilos.navbar}>
        <ul className="ul__navbar">
          <li className="li__navbar">
            <Link to="/">Productos</Link>
          </li>
          <li className="li__navbar">
            <a href="https://www.google.com">Nosotros</a>
          </li>
          <li className="li__navbar">
            <a href="https://www.google.com">Contacto</a>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Navbar;
