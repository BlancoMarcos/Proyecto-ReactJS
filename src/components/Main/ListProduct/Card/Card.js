import React,{useState, useEffect} from 'react'
import './Card.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Cards({dataProduct}) {
  const {title, price, stock, image } = dataProduct
  const [ count, setCount ] = useState(0)
  const [ countTest, setCountTest ] = useState(0)

     
const addStock = () => {
  setCount(count + 1)
}
const removeStock = () => {
  setCountTest(countTest - 1)
}
return (
    <Card className='formatCard' sx={{ maxWidth: 320, }}>
      <img className='imgCard' src={`./${image}`} alt={image}/>
      <CardContent className="itemCard">
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography className="itemPrice" color="text.primary">
          Precio: ${price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Cantidad disponible: {stock}
        </Typography>
        <div className='buttonCard'>
          <Button variant="contained" color="success">
            Agregar al carrito
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default Cards