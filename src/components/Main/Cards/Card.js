import './Card.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card className="formatCard" sx={{ maxWidth: 240 }}>
      <CardMedia
        component="img"
        height="280"
        image="argTit.webp"
        alt="Argentinta Titular"
      />
      <CardContent>
        <Typography className="formatTitle" gutterBottom variant="h5" component="div">
          Argentina Titular
        </Typography>
        <Typography className="formatPrice">
          AR$ 8.000
        </Typography>
      </CardContent>
      <CardActions className="formatBtn">
        <Button size="small">Agregar</Button>
        <Button size="small">Cantidad</Button>
      </CardActions>
    </Card>
  );
}