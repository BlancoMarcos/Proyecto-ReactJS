// Components
import TitleMain from '../../components/Main/TextMain/TitleMain';
import ListProducts from '../../components/Main/ItemList/ItemList'

const HomeProducts = () => {
    return(
        <div>
            <TitleMain  title={'En esta tienda encontrarás las camisetas de Lionel Messi'} />
            <ListProducts />
            
        </div>
    )
}

export default HomeProducts