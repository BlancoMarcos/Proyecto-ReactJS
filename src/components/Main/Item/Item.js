import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'

// Estilo

import './Item.css'

export default function Cards({ data }) {
    const {title, price, image} = data

    return (
        <Card sx={{maxWidth: 290,}} className="cardBox">
            <img className='itemCard' src={`./${image}`} alt={image}/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography gutterBottom variant="h6" color="text.primary">
                    $ {price}
                </Typography>
                <Button variant="contained" color="success">Agregar al carrito</Button>
            </CardContent>
        </Card>
      )}