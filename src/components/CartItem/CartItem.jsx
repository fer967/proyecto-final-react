import './CartItem.css';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';

export default function CartItem(){
    const{removeItem,cart} = useContext(CartContext);
    return(
        <div>
            <p>titulo:{cart.title} </p>
            <p>precio:{cart.price}</p>
            <p>cantidad:</p>
            <p>subtotal:</p>
            <button onClick={()=>removeItem()}className='button' >x</button>
        </div>
    );
}


