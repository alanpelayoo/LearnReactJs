import React from 'react'
import logo from '../assets/react-icon.png';

function Header(props) {

  return (
    <nav className={props.light ? 'light': ''}>
      <img src={logo} className='nav--icon'/>
      <h3 className="nav--logo_text">ReactFacts</h3>
      <button className='button' onClick={props.handler}>{props.light ? "dark": "light"}</button>

    </nav>
  )
}

export default Header