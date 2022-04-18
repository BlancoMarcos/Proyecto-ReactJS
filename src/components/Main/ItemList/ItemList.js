//Componentes
import React,{useState, useEffect} from "react";
import Item from "../Item/Items";
import { mockProducts } from "../Products/Products";
import { nanoid } from 'nanoid';
import { useParams } from "react-router-dom";
//Estilos
import './ItemList.css';

const ItemList = () =>{
    const [products, setProducts] = useState([]);
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    //Promesa para obtener los productos
    const getProducts = () => {
        let promise = new Promise ((resolve, reject)=>{
            setTimeout(() => {resolve (mockProducts)}, 2000);
        })
        let result = promise;
        return (result);
    }
    //Efecto de montaje para obteneter el listado de productos
    useEffect(()=>{
        setProducts([])//Vacío el array para que se limpie y no se acumulen items
        getProducts().then((dataproductos)=>{
            setLoading(false);
            id ? filterByCategory(dataproductos, id) : setProducts(dataproductos)
        })
    },[id])
    //filtro de productos por categoría
    const filterByCategory = (array, category) =>{
        return array.map((product)=>{
            if(product.type == category){
                return setProducts(products => [...products, product])
            }
        })
    }
    
    return(
        <div className="cards">
            {loading?(
                <h2>Cargando...</h2>
            ):(
                <>
                {products.map((product)=>{
                    return(
                        <Item data={product} key={nanoid()}/>
                    )
                })}
                </>
            )}
        </div>
    )
}

export default ItemList;