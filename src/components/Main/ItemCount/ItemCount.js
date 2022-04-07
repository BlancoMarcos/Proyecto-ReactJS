import React,{useState} from "react"
import Button from '@mui/material/Button'
import { Link } from "react-router-dom"

// Estilos

import './ItemCount.css'

const ItemCount = ({stock, addProduct}) => {
    const [count, setCount] = useState(1)

    const onAdd = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }

    const offAdd = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    return(
        <div className="btnBox">
            <div className="itemCount">
                <Button className="btnCount" onClick={offAdd} variant="contained" color="success" disabled={count === 1 ? true : false}>-</Button>
                    <p>{count}</p>
                <Button onClick={onAdd} variant="contained" color="success" disabled={count === stock ? true : false}>+</Button>
            </div>
            <div>
                <Link to='/cart' className="linkBox">
                    <Button onClick={() => addProduct(count)} variant="contained" color="success">Agregar al carrito</Button>
                </Link> 
            </div>
        </div>
    )
}
export default ItemCount