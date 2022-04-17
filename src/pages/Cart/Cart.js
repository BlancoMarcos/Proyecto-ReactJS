import Container from '@mui/material/Container'
import { useContext } from 'react';
import { Button } from '@mui/material';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import { Link } from 'react-router-dom';

//Components
import CartContext from '../../Context/CartContext';
import ItemCount from '../../components/Main/ItemCount/ItemCount';

// Estilo

import './Cart.css'

const Cart = () => {
    const { cartProducts, deleteProduct, calculeTotalPrice, cleanCart } = useContext(CartContext)
    console.log("cartProducts:", cartProducts)
    return(
        <Container>
            <div>
            <div className='btnCart'>
                <Button onClick={cleanCart} variant="contained" color="error">Vaciar carrito</Button> 
                <Button variant="contained" color="success"><Link to={'/'}>Continuar comprando</Link></Button>
            </div>
                
                {cartProducts.map( (cartProduct) => {
                    const { price, image, title } = cartProduct
                    return(
                        <div className="cart-item"  key={cartProduct.id}>
                            <img src={`./${image}`} className='imgCart'/>
                            <div className='infoCart'>
                                <div className='titleCart'>
                                    <p>Producto</p>
                                </div>
                                <div >
                                    <p>{title}</p>
                                </div>
                            </div>
                            <div className='infoCart'>
                                <div className='titleCart'>
                                    <p>Precio</p>
                                </div>
                                <div >
                                    <p>$ {price}</p>
                                </div>
                            </div>
                            <DeleteForeverSharpIcon fontSize='large' onClick={() => deleteProduct(cartProduct)} className='btnDelete'/>
                        </div>
                    )
                })}
                
                <div className="boxBuy">
                    <div >
                        <div >
                            <p >Total: ${calculeTotalPrice()}</p>
                        </div>
                        <Button variant="contained" color="success">Completar compra</Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Cart