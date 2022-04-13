import React,{useState} from "react"
import Button from '@mui/material/Button'

// Estilos

import './ItemCount.css'

const ItemCount = ({stock, initial}) => {
    const [count, setCount] = useState(1)

    const handleIncrease = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }

    const handleDecrease = () => {
        if(count > initial) {
            setCount(count - 1)
        }
    }

    return(
        <div className="btnBox">
            <div className="itemCount">
                <Button onClick={handleDecrease} variant="contained" color="success" disabled={count === 1 ? true : false}>-</Button>
                    <p>{count}</p>
                <Button onClick={handleIncrease} variant="contained" color="success" disabled={count === stock ? true : false}>+</Button>
                {/* <Button onClick={add} variant="contained" color="success">Agregar al carrito</Button> */}
            </div>
        </div>
    )
}
export default ItemCount