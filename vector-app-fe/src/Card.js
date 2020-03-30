import React, { useState } from 'react'
import './App.css'

export const Card = ({type, title, position, image, isLoading, closeModal}) => {

    return(isLoading) ? <div className='loading'>Loading...</div> : (
        <div>
            <h3 className='card-title'>{title}</h3>
            <img 
                src={image} 
                className='card'
            />
        </div>
    )
}

