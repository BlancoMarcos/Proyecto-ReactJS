import React,{useState} from "react"
import Button from '@mui/material/Button'

// Estilos

import './ItemCount.css'

const ItemCount = ({stock}) => {
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
        <div className="itemCount">
            <Button onClick={offAdd} variant="contained" color="success">-</Button>
                <p>{count}</p>
            <Button onClick={onAdd} variant="contained" color="success">+</Button>        
        </div>
    )
}
export default ItemCount