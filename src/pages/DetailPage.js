import { Container } from "@mui/material"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import { useParams } from "react-router-dom";
import React,{ useState, useEffect } from "react";

// Components

import { mockProducts } from "../components/Main/Products/Products";


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
    return(
        <Container>
            <Card className='formatCard' sx={{maxWidth: 320,}}>
                <img className='imgCard' src={`../${product.image}`} alt={product.title}/>
                <CardContent className="itemCard">
                    <Typography gutterBottom variant="h5" component="div">
                        {product.title} 
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        Precio: ${product.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Cantidad disponible: {product.stock}
                    </Typography>
                        {/* <ItemCount stock={stock}/> */}
                    <Button variant="contained" color="success">Agregar al carrito</Button>
                </CardContent>
            </Card>
        </Container>
    )
}

export default DetailPage