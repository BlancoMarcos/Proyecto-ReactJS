import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'

export default function ItemDetail({ data }) {

    return(
        <Card className='formatCard' sx={{maxWidth: 320,}}>
        <img className='imgCard' src={`./${data.image}`} alt={data.image}/>
        <CardContent className="itemCard">
            <Typography gutterBottom variant="h5" component="div">
                {data.title}
            </Typography>
            <Typography variant="body2" color="text.primary">
                {data.description}
            </Typography>
            <Typography variant="body2" color="text.primary">
                Precio: ${data.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Cantidad disponible: {data.stock}
            </Typography>
            <Button variant="contained" color="success">Agregar al carrito</Button>
        </CardContent>
    </Card>
    )
}