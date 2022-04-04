import Container from '@mui/material/Container'
import './ErrorPage.css'

const NotFound = () => {
    return(
        <Container>
            <h1 className='formatBox'>Error 404</h1>
            <p className='pageNotFound'>Página no encontrada</p>
        </Container>
    )
}

export default NotFound