//Estilos
import './Footer.css'

const Footer = () => {
    return(
    <footer className='footerBox'>
        <div className="footer">
            <div className='footer__flex'>
                <a href="https://api.whatsapp.com/send?phone=5491169226082"><img className="icon" src="../Whatsapp.png" alt="Contacto Whatsapp"/></a>
                <a href="https://www.linkedin.com/in/marcosnblanco/"><img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/1200px-Linkedin_icon.svg.png"
                        alt="Contacto LinkedIn"/></a>
                <a href="mailto:blancomarcos.93@gmail.com"><img className="icon" src="../Gmail.png"
                        alt="Contacto correo electrónico"/></a>
            </div>
        </div>
    </footer>
    )
}

export default Footer
