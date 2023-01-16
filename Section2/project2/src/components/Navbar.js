import React from 'react'
import logo from '../images/logo.png';

function Navbar() {
  return (
    <nav>
        <img src={logo} />
        <h1 className='nav-title'>my travel journal.</h1>
    </nav>
  )
}

export default Navbar