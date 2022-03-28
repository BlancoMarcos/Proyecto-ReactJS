import './ListProduct.css'
import React,{useState, useEffect} from 'react'
import Card from "../ListProduct/Card/Card"

const ListProducts = () => {
    // Creamos una constante para mostrar los productos
    const mockProducts = [{
        id: 1,
        title: "Argentina Titular",
        price: 8000,
        stock: 40,
        image: "argTit.webp"
    },
    {
        id: 2,
        title: "Argentina Entrenamiento",
        price: 6000,
        stock: 15,
        image: "argAfa.webp"
    },
    {
        id: 3,
        title: "PSG Titular",
        price: 10000,
        stock: 15,
        image: "psgTit.webp"
    },
    {
        id: 4,
        title: "PSG Suplente",
        price: 12000,
        stock: 20,
        image: "psgSup.webp"
    },
    {
        id: 5,
        title: "PSG Alternativa",
        price: 14000,
        stock: 15,
        image: "psgAlt.webp"
    }]

    const [products, setProducts] = useState ([])

    // Creamos una promesa para que nos devuelva los productos
    const getProducts = () => {
        return new Promise ((resolve, reject) => {
            return resolve (mockProducts)
        })
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
                        <Card dataProduct={product} key={id}/>
                    
                )
            })}
        </div>
    )
}

export default ListProducts