import { createContext, useState } from 'react';

export const CartContext = createContext({cart:[]});

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    console.log(cart)  

    const addItem = (item, cont)=>{
        if(!isInCart(item.id)){
            setCart(prev => [...prev, {...item, cont}])
        } else{
            console.error('el producto ya fue agregado')
        }
    }

    const removeItem = (itemId)=>{
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = ()=>{
        setCart([])
    }

    const isInCart = (itemId)=>{
        return cart.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{cart,addItem,removeItem,clearCart}}>
            {children}
        </CartContext.Provider>
    );
}


// --- actividad 5 ---
/*import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, qty) => {  //implementa la funcionalidad para agregar un producto al carrito
    }

    const removeList = () => {	//implementa la funcionalidad para dejar el carrito vacío
    }

    const deleteItem = (id) => {	//implementa la funcionalidad para borrar un producto del carrito
    }

    return (
        <CartContext.Provider value={{cartList, addToCart, removeList, deleteItem}}>
            { children }
        </CartContext.Provider>
    );
}
export default CartContextProvider; */

