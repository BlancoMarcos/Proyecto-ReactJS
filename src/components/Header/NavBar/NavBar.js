import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';

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
            <Button className='prodBox'
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                >
                <Link to={'/'} href='#fade-menu'>Productos</Link>
            </Button>
            <Menu
                id="productos"
                MenuListProps={{
                'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                >
                <MenuItem onClick={handleClose}>
                    <Link to={'/argentina'}>Argentina</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to={'/psg'}>PSG</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to={'/barcelona'}>Barcelona</Link>
                </MenuItem>
            </Menu>
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
