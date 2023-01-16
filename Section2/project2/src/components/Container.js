import React from 'react'
import locat from '../images/locat.png';
function Container({img, location, title, date, description, link}) {
    return (
        <div className='item'>
            <img src={img} className='img-cont'/>
            <div className='text-cont'>
                <div className='main-text'>
                    <img src={locat} className='icon'/>
                    <span className='location'>{location}</span>
                    <a href={link} target="_blank"> View in google maps</a>
                </div>
                <h1 className='text-tit'>{title}</h1>
                <p className='date'>{date}</p>
                <p className='description'>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Container