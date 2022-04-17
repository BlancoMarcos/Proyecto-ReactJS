//Componentes
import React,{useContext, useEffect, useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import CartContext from '../../../Context/CartContext';
import { Button } from '@mui/material';
import { Card } from '@mui/material';
import { Typography } from '@mui/material';

//Estilos
import './Items.css';

function Item({data}) {
    const {title, image, price, stock, id} = data;
    const [productQuantity, setProductQuantity] = useState(0);
    const [mostrarItemCount, setMostrarItemCount] = useState(true);
    const {addProductToCart} = useContext(CartContext);
    
    const onAdd = (e, count) => {
        if(!!e & productQuantity<1){
            setProductQuantity(count);
        }
    }
    useEffect(()=>{
        if(productQuantity>0){
            setMostrarItemCount(false);
            addProductToCart(data, productQuantity);
        }
    },[productQuantity]) 
    return(
        <Card sx={{maxWidth: 320,}} className="cardBox">
            <Link to={`/category/${id}`}>
            <img src={image} className="cardItem__img" alt={title}></img>
            </Link>
            <Typography gutterBottom variant="h5" component="div">
                {title}
            </Typography >
            <Typography gutterBottom variant="h6" color="text.primary">
                ${price}
            </Typography >
            {mostrarItemCount ?(
                <ItemCount stock={stock} initial={1} action={onAdd}/>
                ):( <Link className="btnBuy" to="/cart">
                        <Button variant="contained" color="success">Finalizar Compra</Button>
                    </Link>
                    )
            }
        </Card>
    )
}

export default Item;