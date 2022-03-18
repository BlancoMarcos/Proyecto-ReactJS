function Header() {

    return(
        <header className='mainHeader'>
         <div className='logoHeader'>
          <img
          src='logoMessi.png'
          className='logoImg'
          />
         </div>
         <ul className= 'navMenu'>
             <li><button>Inicio</button></li>
             <li><button>Tienda</button></li>
             <li><button>Nosotros</button></li>
             <li><button>Contacto</button></li>
         </ul>
     </header>
    )
}
export default Header
