import React,{useState} from "react"
import Button from '@mui/material/Button'

// Estilos

import './ItemCount.css'

const ItemCount = ({stock, initial, action}) => {
    const [count, setCount] = useState(initial)

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
            <div className="btnCount">
                <Button onClick={handleDecrease} variant="contained" color="success" disabled={count === 1 ? true : false}>
                    <p className="btn">-</p>
                </Button>
                <p>{count}</p>
                <Button onClick={handleIncrease} color="success" variant="contained" disabled={count === stock ? true : false}>
                    <p className="btn">+</p>
                </Button>
            </div>
            <div className="spaceBtn">
                <Button  className="btnBuy" onClick={(e) => action(e, count)} variant="contained" color="success">Agregar al carrito</Button>
            </div>
        </div>
    )
}
export default ItemCount