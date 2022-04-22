//React
import React,{useState} from 'react';
import { Link } from 'react-router-dom';

//MUI
import Button from '@mui/material/Button';

// Estilos
import './NavBar.css';

// Components
import CartWidget from '../Icon/Icon';

function Header() {
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <header className='header'>
            <div className='logoHeader'>
                <Link to={`/`}>
                    <img src='../logoMessi.png' className='logoImg' alt='LogoMessi'/>
                </Link>
            </div>
            <div className= 'navMenu'>
            <Button 
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                >
                <Link to={'/'} href='/'>HOME</Link>
            </Button>
            <Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                >
                <Link to={'/contact'} href='/contacto'>CONTACTO</Link>
            </Button>
            </div>
            <CartWidget />
        </header>
      );
}

export default Header
