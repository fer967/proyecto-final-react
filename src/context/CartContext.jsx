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


