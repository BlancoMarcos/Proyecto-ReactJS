import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import { useParams } from 'react-router-dom';
import React,{useEffect} from 'react';

// Components

import { mockProducts } from '../Products/Products';

const ItemDetail = () => {
    const {id} = useParams

    useEffect (() => {
        filterProductById(mockProducts, id)
    }, [])

    const filterProductById = (array, id) => {
        return mockProducts.filter ((product) => {
            if(product.id == id) {
            return console.log("Producto filtrado: ", product)
        }
        })
    }

    return(
        <Card className='formatCard' sx={{maxWidth: 320,}}>
        
        <CardContent className="itemCard">
            <Typography gutterBottom variant="h5" component="div">
                Hola
            </Typography>
            <Typography variant="body2" color="text.primary">
            Hola
            </Typography>
            <Typography variant="body2" color="text.primary">
                Precio: $Hola
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Cantidad disponible: Hola
            </Typography>
            <Button variant="contained" color="success">Agregar al carrito</Button>
        </CardContent>
    </Card>
    )
}

export default ItemDetail