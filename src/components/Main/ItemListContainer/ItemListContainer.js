//React
import React,{ useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

// Componentes
import { mockProducts } from "../Products/Products";

//Pages
import DetailPage from '../../../pages/ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        filterProductById(mockProducts, id)
    }, [id])

    const filterProductById = (array, id) => {
        return array.map((product) => {
            if(product.id == id) {
                return setProduct(product)
            }
        })
    }

    return (
        <div>
            <DetailPage data={product} />
        </div>
    )
}

export default ItemDetailContainer