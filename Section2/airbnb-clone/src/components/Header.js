import React from 'react'

function Header() {
  return (
    <nav>
        <img src={process.env.PUBLIC_URL + '/images/airbnb-logo.png'} alt='airbnb logo'/>

    </nav>
  )
}

export default Header