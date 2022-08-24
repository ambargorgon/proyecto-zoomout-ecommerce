import React from 'react'
import Navbar from './Navbar/Navbar'
import './header.css'

const Header = () => {
  return (
    <header className='header'>
        <h1 className='logo-header'>ZoomOut</h1>
        <Navbar status={true}/>
    </header>
  )
}

export default Header;