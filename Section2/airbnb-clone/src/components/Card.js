import React from 'react'


function Card({image, rating, reviewcount, country, title, price, openSpots}) {
  let badgeText =''
  if (openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (country === "Online") {
      badgeText = "ONLINE"
  }
  
  return (
    <div className='card'>
        {badgeText ? <div className="card--badge">{badgeText}</div> : null}
        <img src={process.env.PUBLIC_URL + `/images/${image}`} className='card--image'/>
        <div className="card--stats">
          <img src={process.env.PUBLIC_URL + '/images/star.png'} className='card--star'/>
          <span> {rating} </span>
          <span className='gray'> ({reviewcount}) • </span>
          <span className='gray'>{country}</span>
        </div>
        <p className='card--title'>{title}</p>
        <p className='card--price'><span className='bold'>From ${price}</span> / person</p>
    </div>
  )
}

export default Card