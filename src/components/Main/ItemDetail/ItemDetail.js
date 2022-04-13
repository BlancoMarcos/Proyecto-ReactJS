import { Container } from "@mui/material"
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React,{ useContext, useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

// Estilo

import './ItemDetail.css'

// Components

import ItemCount from "../ItemCount/ItemCount";

// Context
import CartContext from '../../../Context/CartContext';


const DetailPage = ({data}) => {

    const{title, price, stock, description, image, id} = data
    const navigate = useNavigate()
    const { cartProducts, addProductToCart } = useContext(CartContext);

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
            <Container>
                <div  className="cardDetail">
                    <div className="btnCard">
                        <img  className="imgCard" src={`../${image}`} alt={title}/>
                    </div>
                    <div>
                        <Box>
                            <CardContent>
                                <Typography className="titleCard" component="div" variant="h4">
                                    {title}
                                </Typography>
                                <Typography className="priceCard" component="div" variant="h5">
                                    ${price}
                                </Typography>
                                <Typography className="textCard" variant="h6" color="text.primary" component="div">
                                    {description}
                                </Typography>
                                <Typography className="stockCard" variant="p" color="text.secundary" component="div">
                                    Artículos disponibles: {stock}
                                </Typography>
                            </CardContent>
                        </Box>
                        <ItemCount className="itemCount" stock={stock}/>
                        <div className="btnDetail">
                            <Link to='/' className="linkBox">
                                <Button variant="contained" color="success">Seguir en la Tienda</Button>
                            </Link>
                            <Button onClick={addToCart} variant="contained" color="success">Agregar al carrito</Button>
                            <Link to='/cart' className="linkBox">
                                <Button variant="contained" color="success">Finalizar compra</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
          
        );
      }

export default DetailPage
