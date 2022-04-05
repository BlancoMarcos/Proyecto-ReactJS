import { Container } from "@mui/material"
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import { useParams } from "react-router-dom";
import React,{ useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import CardActions from '@mui/material/CardActions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';


// Estilo

import './ItemDetail.css'

// Components

import { mockProducts } from "../Products/Products";
import ItemCount from "../ItemCount/ItemCount";


const DetailPage = () => {
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

    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
      })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      }));
      
        const [expanded, setExpanded] = React.useState(false);
      
        const handleExpandClick = () => {
          setExpanded(!expanded);
        };

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
                        <Box className="btnCardDetail">
                            <Typography paragraph>
                                <ItemCount stock={product.stock}/>
                            </Typography>
                            <Button variant="contained" color="success">Agregar al carrito</Button>
                        </Box>
                    </div>
                </div>
            </Container>
          
        );
      }

export default DetailPage
