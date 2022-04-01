import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const ItemDetail = ({data}) => {
    return(
        <Container className='container-general'> 
            <div className='container-detail'>
            <div className='container-detail__img'>
                <img src={data.image} alt="Camiseta Argentina" />
            </div>
            <div className='container-detail__info'>
                <h3 className='info__title'>{data.title}</h3>
                <p className='info__text'>$ {data.price}</p>
                <p className='info__text'>12 cuotas sin interes de ${(data.price/12).toFixed(2)}</p>
                <p className='info__subtitle'>STOCK: {data.stock}</p>
                <p className='info__subtitle'>DETALLE</p>
                <p className='info__text detail__text'>{data.description}</p>
                <Button className='detail__btn-buy'>COMPRAR</Button>
            </div>
            </div>
        </Container>
    )
}

export default ItemDetail