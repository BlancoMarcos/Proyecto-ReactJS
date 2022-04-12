import { Container } from "@mui/material"
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React,{ useState, useEffect } from "react";
import Box from '@mui/material/Box';

// Estilo

import './ItemDetail.css'

// Components

import ItemCount from "../ItemCount/ItemCount";


const DetailPage = ({data}) => {

    const{title, price, stock, description, image} = data

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
                        <Typography paragraph className="btnCardDetail">
                            <ItemCount stock={stock}/>
                        </Typography>
                    </div>
                </div>
            </Container>
          
        );
      }

export default DetailPage
