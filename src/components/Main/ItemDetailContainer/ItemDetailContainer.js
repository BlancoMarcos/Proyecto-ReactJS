import React,{useState, useEffect} from 'react'
import { mockProduct } from '../Products/ProductDetail'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
    
    const [items, setItems] = useState([])
    
    // Cramos una promesa para que nos devuelva los productos
    const getItems = () => {
        return new Promise ((resolve, reject) =>{
            return resolve(mockProduct)
        })
    }

     // Usamos useEffect para poder visualizar los datos
    
    
    
     // useEffect(() => {
    //     setTimeout(() => {
    //         getItems().them(( data ) => {
    //             setItems( data )
    //         })
    //     }, 2000)
    // }, [])
    

    useEffect(() => {
        getItems().then(( data ) => {
            setItems( data )
        })
    })

    return (
        <div>
            {console.table('Item detalle: ', items)}
            <ItemDetail data={items} />
        </div>
    )
}

export default ItemDetailContainer