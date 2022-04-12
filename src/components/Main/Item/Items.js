import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom';
import React,{ useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';

// Estilo

import './Items.css'

// Context
import CartContext from '../../../Context/CartContext';

export default function Cards({ data }) {
    const {title, price, image, id, stock} = data

    // Creamos una const con "useNavigate" para reemplazarla por "Link"
    const navigate = useNavigate()
    const { cartProducts, addProductToCart } = useContext(CartContext)
    const changePage = () => {
        navigate(`/productos/${id}`)
        console.log("Cart products: ", cartProducts)
    }

    const addToCart = (e) => {
        e.stopPropagation()
        console.log("Productos agregados: ", cartProducts)
        addProductToCart(data)

    }

    return (

            <Card sx={{maxWidth: 290,}} className="cardBox" onClick={changePage}>
                <img className='itemCard' src={`./${image}`} alt={image}/>
                <CardContent>
                    <Typography className="titleBox" gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography gutterBottom variant="h6" color="text.primary">
                        $ {price}
                    </Typography>
                    <Button onClick={addToCart} variant="contained" color="success">Agregar al carrito</Button>
                </CardContent>
            </Card>
      )}