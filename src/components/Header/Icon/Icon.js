// React
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom';

// MUI
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

// Context
import CartContext from '../../../Context/CartContext';

// Estilo
import './Icon.css'

const CartWidget = () => {
    const { cartQty, cartProducts, removeItem, cleanCart, cantidad } = useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    console.log("cartProducts: ", cartProducts)

    return (
        <div className='buyIcon'>
            <ShoppingCartIcon  className='icon'
                onClick={handleClick}
                fontSize='large'
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            />
            <div className='countProduct'>
                <p>{cartQty()}</p>             
            </div>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                className='buyIcon'
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'scroll',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                    },
                    '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    },
                    },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                <p className='titleCart'>Carrito de Compras</p>
                <Divider />
                    {cartProducts.map( (cartProduct) => {
                        return(
                            <MenuItem  key={cartProduct.id}>
                                <div className='modal'>
                                    <div>
                                        <img className='modalImg' src={`../${cartProduct.image}`} /> 
                                    </div>
                                    <div className='modalText'>
                                        <strong>{cartProduct.title}</strong>
                                        <p>$ {cartProduct.price * cartProduct.cantidad}</p>
                                        <p>Cantidad: {cartProduct.cantidad}</p>
                                    </div>
                                    <div className='modalDelete'>
                                        <DeleteIcon onClick={removeItem}/>
                                    </div>
                                </div>
                            </MenuItem>
                        )
                    })} 
                <Divider />
                <div>
                    <div className='cleanCart'>
                        <Button onClick={cleanCart} className='btn-spacing' variant="contained" color="success">Vaciar carrito</Button> 
                    </div>
                    <div className='buyCart'>
                        <Button variant="contained" color="success"><Link to="/cart">Iniciar la compra</Link></Button> 
                    </div>
                </div>
            </Menu>
        </div>
    )
}

export default CartWidget