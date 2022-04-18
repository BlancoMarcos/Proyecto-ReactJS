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
    const { cartProducts, deleteProduct, cartTotal, cleanCart, cantidad } = useContext(CartContext)
    console.log("cartProducts:", cartProducts)
    return(
        <Container>
            <div>
            <div className='btnCart'>
                <Button onClick={cleanCart} variant="contained" color="error">Vaciar carrito</Button> 
                <Button variant="contained" color="success"><Link to={'/'}>Continuar comprando</Link></Button>
            </div>
                
                {cartProducts.map( (cartProduct) => {
                    const { price, image, title, cantidad } = cartProduct
                    return(
                        <div className="cart-item"  key={cartProduct.id}>
                            <img src={`./${image}`} className='imgCart'/>
                            <div className='infoCart'>
                                <div className='titleCart'>
                                    <strong>Producto</strong>
                                </div>
                                <div >
                                    <p>{title}</p>
                                </div>
                            </div>
                            <div className='infoCart'>
                                <div className='titleCart'>
                                    <strong>Cantidad</strong>
                                </div>
                                <div>
                                    <p>{cantidad}</p>
                                </div>
                            </div>
                            <div className='infoCart'>
                                <div className='titleCart'>
                                    <strong>Precio</strong>
                                </div>
                                <div>
                                    <p>$ {price}</p>
                                </div>
                            </div>
                            <DeleteForeverSharpIcon fontSize='large' onClick={() => deleteProduct(cartProduct)} className='btnDelete'/>
                        </div>
                    )
                })}
                
                <div className="boxBuy">
                        <div className='priceTotal'>
                            <strong>Total: ${cartTotal()}</strong>
                        </div>
                        <Button variant="contained" color="success">Completar compra</Button>
                </div>
            </div>
        </Container>
    )
}

export default Cart