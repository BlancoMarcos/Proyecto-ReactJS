import Container from '@mui/material/Container'
import { useContext } from 'react';
import { Button } from '@mui/material';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';

//Components
import CartContext from '../../Context/CartContext';
import ItemCount from '../../components/Main/ItemCount/ItemCount';

// Estilo

import './Cart.css'

const Cart = () => {
    const { cartProducts, deleteProduct, calculeTotalPrice } = useContext(CartContext)
    console.log("cartProducts:", cartProducts)
    return(
        <Container>
            <div className='formatCart' >
                
                {cartProducts.map( (cartProduct) => {
                    const { price, image, title, talle, id, stock } = cartProduct
                    return(
                        <div className="cart-item"  key={id}>
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
                            <div>
                                <ItemCount className='itemCount'/>
                            </div>
                            <DeleteForeverSharpIcon fontSize='large' onClick={() => deleteProduct(cartProduct)} className='btnCart'/>
                        </div>
                    )
                })}
                
                <div className="card-item">
                    <Button >Continuar comprando</Button>
                    <div >
                        <div >
                            <p>Subtotal</p>
                            <span>$ {calculeTotalPrice}</span>
                        </div>
                        <div >
                            <p>Total</p>
                            <span>$ {calculeTotalPrice}</span>
                        </div>
                        <Button >Completar Compra</Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Cart