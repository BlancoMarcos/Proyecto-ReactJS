//Componentes
import React,{useContext, useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import ModalCustom from '../../components/Main/Modal/Modal';

//Context
import CartContext from '../../Context/CartContext';

//Firebase
import database from '../../services/FirebaseConfig';
import { addDoc, collection } from 'firebase/firestore';

//MUI
import { Container } from '@mui/material';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';

//Estilos
import './Cart.css';


function Cart () {
    //VARIABLES
        //Contexto
        const {cartProducts, cartTotal, restarUno, addProductToCart, removeItem, cleanCart, deleteProduct} = useContext(CartContext);
        const navigate = useNavigate();
        const [hayProductos, setHayProductos] = useState(false);
        const [totalDelCart, setTotalDelCart] = useState(cartTotal);
        const [openModal, setOpenModal] = useState(false);
        const [finishedOrder, setFinishedOrder] = useState();
        const [loadingOrder, setLoadingOrder] = useState(true);

        const [formData, setFormData] = useState({
            name: '',
            surname: '',
            phone: '',
            email: ''
        })
        const [order, setOrder] = useState(
            {
                buyer: formData,
                items: cartProducts.map((cartProduct)=>{
                    return{
                        id: cartProduct.id,
                        title: cartProduct.title,
                        cantidad: cartProduct.cantidad,
                        price: cartProduct.price
                    }
                }),
                total: cartTotal()
            }
        );
    //FUNCIONES
        const handleOneLess = (id) =>{
            restarUno(id);
            setTotalDelCart(cartTotal);
        }
        const handleOneMore = (product, uno) =>{
            addProductToCart(product, uno);
            setTotalDelCart(cartTotal);
        }
        const handleDeleteItem = (id) => {
            removeItem(id);
            setTotalDelCart(cartTotal);
        }
        const handleDeleteCart = () =>{
            cleanCart();
            setTotalDelCart(0);
        }
        const handleChange = (e) => {
            const {name, value} = e.target
            setFormData({
                ...formData,
                [name]: value
            })
        }
        const handleClose = () =>{
            if(finishedOrder){
                cleanCart();
                navigate('/');
            }else{
                setOpenModal(false)
            }
        }
        const handleSubmit = (e) => {
            e.preventDefault();
            setOrder({...order, buyer: formData});
            let prevOrder = {...order, buyer: formData};
            sendOrder(prevOrder);
        }
        const sendOrder = async(prevOrder) => {
            setLoadingOrder(false);
            const orderFirebase = collection(database, 'ordenes');
            const orderDoc = await addDoc(orderFirebase, prevOrder);
            console.log("orden generada: ", orderDoc.id)
            setFinishedOrder(orderDoc.id)
            setLoadingOrder(true);
        }
        //useEffect
        useEffect(()=>{
            if(totalDelCart > 0){
                setHayProductos(true)
            }else{
                setHayProductos(false)
            }
        },[totalDelCart])
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
                        <Button variant="contained" color="success" onClick={()=>{setOpenModal(true)}}>Completar compra</Button>
                </div>
            </div>
            <ModalCustom handleClose={()=>handleClose()} open={openModal}>
                {finishedOrder?(
                    <div className='postMessage'>
                        <h3>Su orden se gener?? correctamente</h3>
                        <p>N??mero de orden: <strong>{finishedOrder}</strong></p>
                        <p>??Muchas gracias por su compra!</p>
                    </div>
                ):(loadingOrder?(
                    <div className='formBuy'>
                        <h2>Formulario de Compra</h2>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Nombre/s</label>
                                <input type="text" name='name' placeholder='Ingrese su nombre o nombres'
                                    onChange={handleChange}
                                    value={formData.name}
                                />
                            </div>
                            <div>
                                <label>Apellido/s</label>
                                <input type="text" name='surname' placeholder='Ingrese su apellido o apellidos'
                                    onChange={handleChange}
                                    value={formData.surname}
                                />
                            </div>
                            <div>
                                <label>Tel??fono</label>
                                <input type="number" name='phone' placeholder='Ingrese su tel??fono de contacto'
                                    onChange={handleChange}
                                    value={formData.phone}
                                />
                            </div>
                            <div>
                                <label>Email</label>
                                <input type="mail" name='email' placeholder='Ingrese la direcci??n  de correo'
                                    onChange={handleChange}
                                    value={formData.email}
                                />
                            </div>
                            <div>
                                <Button variant="contained" color="success" type="submit">Enviar</Button>
                            </div>
                        </form>
                    </div>
                    
                ):(
                    <h2>Procesando solicitud...</h2>
                )
                )}
            </ModalCustom>
        </Container>
    )
}

export default Cart