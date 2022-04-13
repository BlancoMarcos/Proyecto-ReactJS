import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) =>{
    const [cartProducts, setCartProducts] = useState([]);
    //funciones
    const addProductToCart = (product, productQuantity) =>{
        //reviso si ya existe el producto en el carrito
        const indiceEncontrado = cartProducts.findIndex((producto)=>{
            return producto.id === product.id;
        })//si no existe lo agrego
        if(indiceEncontrado === -1){
            product.cantidad = productQuantity;
            setCartProducts(cartProducts => [...cartProducts, product]);
        }else{//si no, valido que no se quiera agrega más de lo que hay en stock
            if (product.stock < (product.cantidad + productQuantity)){
            }else{//si da el stock, sumo
                cartProducts[indiceEncontrado].cantidad += productQuantity;
            }
        }
    }
    const cartTotal = () => {
        let total = 0;
        cartProducts.map((product)=>{
            total = total + product.price*product.cantidad;
        });
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
        const indiceEncontrado = cartProducts.findIndex((producto)=>{
            return producto.id === id;
        })
        cartProducts.splice(indiceEncontrado, 1);
    }
    const cleanCart = () => {
        setCartProducts([]);
    }

    const data = {
        cartProducts,
        addProductToCart,
        cartLength,
        cartTotal,
        restarUno,
        removeItem,
        cleanCart
    }
    
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export {CartProvider}
export default CartContext