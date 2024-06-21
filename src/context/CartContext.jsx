import { createContext, useState,useEffect } from 'react';

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

    const total =  cart.reduce((acc,el) => acc + el.price * el.cont, 0);

    const totalCont = cart.reduce((acc,el) => acc + el.cont, 0);

    return (
        <CartContext.Provider value={{cart,addItem,removeItem,clearCart,total,totalCont}}>
            {children}
        </CartContext.Provider>
    );
}

