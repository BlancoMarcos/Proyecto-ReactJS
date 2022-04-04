import Container from '@mui/material/Container'

// Components

import TitleMain from '../../components/Main/TextMain/TitleMain';
import ListProducts from '../../components/Main/ItemList/ItemList'

const HomeProducts = () => {
    return(
        <Container>
            <TitleMain  title={'En esta tienda encontrarás las camisetas de Lionel Messi'} />
            <ListProducts />
        </Container>
    )
}

export default HomeProducts