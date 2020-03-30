import React from 'react'
import './App.css'

export const Card = ({type, title, position, image}) => {

    return(
        <div>
            <h3 className='card-title'>{title}</h3>
            <img src={image} className='card'></img>
        </div>
    )
}

