import './Card.css'
import React,{ useState } from 'react'
import ItemCount from "./ItemCount/ItemCount"

function Card({titulo, precio, talle, stock}) {

  return(
    <div className='formatCard'>
      <h2>{titulo}</h2>
      <p>Precio: ${precio}</p>
      <p>Talle: {talle}</p>
      <p>Stock Disponible: {stock}</p>
      <ItemCount stock={stock}/>
    </div>
  )
}

export default Card