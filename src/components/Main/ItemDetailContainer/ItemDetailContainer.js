import { useState, useEffect } from "react";
import mockProduct from "../Utils/MockProducts";
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [props, setProps] = useState({})

    const getProduct = () => {
        return new Promise((resolve, reject) => {
            return resolve(mockProduct)
        })
    }

    useEffect( () => {
        getProduct().then( (producto) => {
            setProps(producto)
            //console.log("Llamada al mock:", producto)
        }).finally( () => {
            console.log("Termino la llamada")
        })
    }, [])

    return (
        <>
            
            <ItemDetail props={props}/>
        </>
    )
}

export default ItemDetailContainer