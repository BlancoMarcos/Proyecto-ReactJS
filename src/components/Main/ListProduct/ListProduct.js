import './ListProduct.css'
import Card from './Card/Card'

const ListProduct = () => {
    return(
        <div className="divClass">
            <Card titulo='PSG' talle='L' precio={2000} stock={10}/>
            <Card titulo='Barcelona' talle='M' precio={3000} stock={15}/>
            <Card titulo='Entrenamiento' talle='M' precio={4000} stock={4}/>
            <Card titulo='Argentina' talle='XL' precio={1500} stock={7}/>
        </div>
    )
}

export default ListProduct