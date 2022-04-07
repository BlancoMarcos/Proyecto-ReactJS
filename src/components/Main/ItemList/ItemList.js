import React,{useEffect, useState} from "react";
import { Container } from "@mui/material";

// Estilo

import './ItemList.css'

// Components

import { mockProducts } from "../Products/Products";
import Cards from "../Item/Items";
import { useParams } from "react-router-dom";


const ListProducts = (props) => {
    
    const {category} = useParams()
    const [products, setProducts] = useState([])

    // Cramos una promesa para que nos devuelva los productos
    const getProducts = () => {
        return new Promise ((resolve, reject) => {
            return resolve(mockProducts)
        })
    }
    // Usamos useEffect para poder visualizar los datos
    useEffect( () => {
        setProducts([])
        getProducts().then( (productos) => {
            category ? filterProductByCategory(productos, category) : setProducts(productos)
        })
    }, [category])

    const filterProductByCategory = (array , category) => {
        return array.map( (product, i) => {
            if(product.category === category) {
               return setProducts(products => [...products, product]);
            }
        })
    }


    return(
        <div className="cards">
            <Container fixed className="ultimosProductos">
                <h2>{props.title}</h2>
            </Container>
            {products.map ((product) => {
                return(
                        <Cards data={product} key={product.id}/>
                )
            })}
        </div>  
            )
}

export default ListProducts;