import React from "react";
import CartWidget from "./CartWidget";
import "./navbar.css";
import estilos from "../../Footer/footer.module.css";
import "./widgets.css"
import { Link } from "react-router-dom";
import FavWidget from "./FavWidget";

const Navbar = ({ status }) => {
  return (
    <>
      {status ? (
        <>
          <nav className="navBar">
            <ul className="ul__navbar">
              <li className="li__navbar">
                <div className="dropdown">
                  <Link to="/">
                    <button className="dropbtn">
                      Productos
                    </button>
                  </Link>
                  <div className="dropdown-content">
                    <Link to="/category/remeras">Remeras</Link>
                    <Link to="/category/buzos">Buzos</Link>
                    <Link to="/category/pantalones">Pantalones</Link>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
          <FavWidget/>
          <CartWidget />
        </>
      ) : (
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
      )}
    </>
  );
};

export default Navbar;
