import { createContext, useState } from "react";

const CartContext = createContext([]);

const CartProvider = ({children}) =>{
    const [cartProducts, setCartProducts] = useState([]);

    //funciones
        const addProductToCart=(product)=>{

            const fProd = cartProducts.find(
                (cartProducts) => cartProducts.id === product.id
            )
    
            if (fProd) {
                fProd.stock += product.stock
                setCartProducts( [ ...cartProducts] )
            } else {
                setCartProducts( [ ...cartProducts, product ] )
            }
            
        }

    const calculeTotalPrice = () => {
        let total = 0

        cartProducts.map( (cartProduct) => {
           total = cartProduct.price + total
        })

        return total
    }

    const cartLength = () => {
        let largo = cartProducts.length;
        return largo
    }
    const restarUno = (id) => {
        const indiceEncontrado = cartProducts.findIndex((producto)=>{
            return producto.id === id;
        })
        if(indiceEncontrado === -1){
            return;
        }else{
            if (cartProducts[indiceEncontrado].cantidad>0){
                cartProducts[indiceEncontrado].cantidad -= 1;
            }
        }
    }
    const removeItem = (id) => {
        const indiceEncontrado = cartProducts.findIndex((product)=>{
            return product.id === id;
        })
        cartProducts.splice(indiceEncontrado, 1);
    }
    const cleanCart = () => {
        setCartProducts([]);
    }

    const deleteProduct = (product) => {
        setCartProducts(cartProducts.filter( cartProduct => cartProduct.id !== product.id))
    }

    const data = {
        cartProducts,
        addProductToCart,
        cartLength,
        calculeTotalPrice,
        restarUno,
        removeItem,
        cleanCart,
        deleteProduct
    }
    
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export {CartProvider}
export default CartContext