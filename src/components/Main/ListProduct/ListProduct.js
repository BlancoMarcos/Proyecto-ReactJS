import React,{useState, useEffect} from 'react'
import Cards from '../Card/Card'
import mockProducts from '../Utils/MockProducts'

const ListProducts = ({}) => {

    const [products, setProducts] = useState([])

    // Creamos una promesa para que nos devuelva los productos
    async function getProducts() {
        let promise = new Promise ((resolve, reject) => {
            setTimeout(() => {resolve (mockProducts)}, 2000);
        })
        let result = await promise;
        return (result);
    }

    useEffect(() => {
        getProducts().then((dataProduct) => { //Con el "then" podemos visualizar los datos de la promesa
            setProducts(dataProduct) // Acá guardamos los datos en el state de productos.
        }).finally(() => {console.log("Finalizó la llamada")})
    }, [])

    return(
        <div className='divClass'>
            {products.map( ( product ) => {
                const {id} = product
                return(
                        <Cards dataProduct={product} key={id}/>
                    
                )
            })}
        </div>
    )
}

export default ListProducts;