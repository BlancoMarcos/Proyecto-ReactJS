import './ListProduct.css'
import Card from './Card/Card'

const ListProduct = () => {
    return(
        <div className="divClass">
            <Card titulo='PSG' talle='L' precio={2000}/>
            <Card titulo='Barcelona' talle='M' precio={3000}/>
            <Card titulo='Entrenamiento' talle='M' precio={4000}/>
            <Card titulo='Argentina' talle='XL' precio={1500}/>
        </div>
    )
}

export default ListProduct