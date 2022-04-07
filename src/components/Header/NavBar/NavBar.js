import { Link } from 'react-router-dom';

// Estilos

import './NavBar.css';

// Components

import CardWidget from '../Icon/Icon';

function Header() {

    return(
        <header className='header'>
            <div className='logoHeader'>
                <Link to={`/`}>
                    <img src='../logoMessi.png' className='logoImg' alt='LogoMessi'/>
                </Link>
            </div>
            <ul className= 'navMenu'>
                <li>
                    <a Link to={'/'} href='/'>HOME</a>
                </li>
                <li>
                    <a Link to={'/contacto'} href='/contacto'>CONTACTO</a>
                </li>
            </ul>
            <CardWidget />
        </header>
        )
}

export default Header
