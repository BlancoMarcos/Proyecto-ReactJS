//Componentes
import React,{useEffect, useState, useContext} from "react";
import ItemCount from "../ItemCount/ItemCount";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import CartContext from "../../../Context/CartContext";
import { Container, Typography } from "@mui/material";
import { CardContent } from "@mui/material";
import { Box } from "@mui/material";
//Estilos
import './ItemDetail.css';

function ItemDetail ({data}){
    
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
        <Container>
            <div className="cardDetail">
                <div className="btnCard">
                    <img className="imgCard" src={`../${data.image}`} alt={data.title}></img>
                </div>
                <div className="mainItemDetail__details">
                    <Box>
                        <CardContent>
                            <Typography className="titleCard" component="div" variant="h4">
                                {data.title}
                            </Typography>
                            <Typography className="priceCard" variant="h6" color="text.primary" component="div">
                                $ {data.price}
                            </Typography>
                            <Typography className="textCard" variant="h6" color="text.primary" component="div">
                                {data.description}
                            </Typography>
                            <Typography className="stockCard" variant="p" color="text.secundary" component="div">
                                Artículos disponibles: {data.stock}
                            </Typography>
                        </CardContent>
                    </Box>
                    
                    {mostrarItemCount ?(
                        <ItemCount stock={data.stock} initial={1} action={onAdd} className="itemCount"/>
                        ):(
                            <div className="spacebtn">
                                <Link className="btnBuy" to="/">
                                    <Button variant="contained" color="success">Seguir Comprando</Button>
                                </Link>
                                <Link className="btnBuy" to="/cart">
                                    <Button variant="contained" color="success">Finalizar Compra</Button>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </Container>
    )
}

export default ItemDetail;