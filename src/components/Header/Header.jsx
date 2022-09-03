import React from 'react'
import Navbar from './Navbar/Navbar'
import './header.css'
import logoEscrito from '../../images/zoomout-solo.png'

const Header = () => {
  return (
    <header className='header'>
        <h1 className='menu-burger'>menu</h1>
        <img className='logo-header-esc' src={logoEscrito} alt='logo_zout'/>
        <Navbar status={true}/>
    </header>
  )
}

export default Header;