import React from "react";
import Navbar from "./Navbar/Navbar";
import "./header.css";
import logoEscrito from "../../images/zoomout-solo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img className="logo-header-esc" src={logoEscrito} alt="logo" />
      </Link>
      <Navbar status={true} />
    </header>
  );
};

export default Header;
