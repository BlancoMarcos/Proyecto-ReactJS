import CardWidget from '../Icon/Icon';
import Button from '@mui/material/Button';
import './NavBar.css';

function Header() {

    return(
        <header className='header'>
            <div className='logoHeader'>
                <img src='logoMessi.png' className='logoImg'/>
            </div>
            <ul className= 'navMenu'>
             <li><Button variant="outlined">Inicio</Button></li>
             <li><Button variant="outlined">Nosotros</Button></li>
             <li><Button variant="outlined">Tienda</Button></li>
             <li><Button variant="outlined">Contacto</Button></li>
            </ul>
            <CardWidget />
        </header>
        )
}

export default Header
