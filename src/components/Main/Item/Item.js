import './Item.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import ItemCount from "../ItemCount/ItemCount";
import Button from '@mui/material/Button'

export default function Cards({ data }) {
    const {title, price, stock, image} = data

    return (
        <Card className='formatCard' sx={{maxWidth: 320,}}>
            <img className='imgCard' src={`./${image}`} alt={image}/>
            <CardContent className="itemCard">
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.primary">
                    Precio: ${price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Cantidad disponible: {stock}
                </Typography>
                    {/* <ItemCount stock={stock}/> */}
                <Button variant="contained" color="success">Agregar al carrito</Button>
            </CardContent>
        </Card>
      );
    }