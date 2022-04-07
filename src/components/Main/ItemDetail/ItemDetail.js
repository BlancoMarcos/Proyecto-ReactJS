import { Container } from "@mui/material"
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import { useParams } from "react-router-dom";
import React,{ useState, useEffect } from "react";
import Box from '@mui/material/Box';

// Estilo

import './ItemDetail.css'

// Components

import { mockProducts } from "../Products/Products";
import ItemCount from "../ItemCount/ItemCount";


const DetailPage = ({title, price, stock, descriotion, image}) => {
    const {id} = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        filterProductById(mockProducts, id)
    }, [id])

    const filterProductById = (array, id) => {
        return array.map((product) => {
            if(product.id == id) {
                return setProduct(product)
            }
        })
    }

    const addProduct = (cant) => {
        alert (`Has agregado ${cant} producto`)
    }

        return (
            <Container>
                <div  className="cardDetail">
                    <div className="btnCard">
                        <img  className="imgCard" src={`../${product.image}`} alt={product.title}/>
                    </div>
                    <div>
                        <Box>
                            <CardContent>
                                <Typography className="titleCard" component="div" variant="h4">
                                    {product.title}
                                </Typography>
                                <Typography className="priceCard" component="div" variant="h5">
                                    ${product.price}
                                </Typography>
                                <Typography className="textCard" variant="h6" color="text.primary" component="div">
                                    {product.description}
                                </Typography>
                                <Typography className="stockCard" variant="p" color="text.secundary" component="div">
                                    Artículos disponibles: {product.stock}
                                </Typography>
                            </CardContent>
                        </Box>
                        <Typography paragraph className="btnCardDetail">
                            <ItemCount stock={product.stock} addProduct={addProduct}/>
                        </Typography>
                    </div>
                </div>
            </Container>
          
        );
      }

export default DetailPage
