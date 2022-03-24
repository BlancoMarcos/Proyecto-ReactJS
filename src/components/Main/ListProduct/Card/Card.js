import './Card.css'

function Card({titulo, precio, talle}) {
  return(
    <div className='formatCard'>
      <h2>{titulo}</h2>
      <p>Precio: ${precio}</p>
      <p>Talle: {talle}</p>
      <button>Comprar</button>
    </div>
  )
}

export default Card