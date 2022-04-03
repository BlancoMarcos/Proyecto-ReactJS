import { mockProducts } from "../Products/Products";
import React,{useEffect, useState} from "react";
import Cards from "../Item/Item";
import './ItemList.css'

const ListProducts = () => {

    const[products, setProducts] = useState([])

    // Cramos una promesa para que nos devuelva los productos
    const getProducts = () => {
        return new Promise ((resolve, reject) => {
            return resolve(mockProducts)
        })
    }
    // Usamos useEffect para poder visualizar los datos
    useEffect(() => {
        getProducts().then(( data ) => {
            setProducts( data )
        })
    }, [])


    return(
        <div className="cardContainer">
            {products.map ((product) => {
                return(
                    <Cards data={product} key={product.id}/>
                )
            })}
        </div>  
            )
}

export default ListProducts;