import Button from '@mui/material/Button';
import './NavBar.css';
import { Link } from 'react-router-dom';

// Components

import CardWidget from '../Icon/Icon';

function Header() {

    return(
        <header className='header'>
            <div className='logoHeader'>
                <img src='logoMessi.png' className='logoImg' alt='LogoMessi'/>
            </div>
            <ul className= 'navMenu'>
                <li><Button variant="outlined">
                    <Link to={'/'}>Home</Link>
                    </Button></li>
                <li><Button variant="outlined">
                    <Link to={'/productos'}>Productos</Link>
                    </Button></li>
                <li><Button variant="outlined">
                    <Link to={'/contacto'}>Contacto</Link>
                    </Button></li>
            </ul>
            <CardWidget />
        </header>
        )
}

export default Header
