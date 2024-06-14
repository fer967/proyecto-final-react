import './CartItem.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export default function CartItem(){
    const{removeItem} = useContext(CartContext);
    
    return(
        <div>
            <p>titulo</p>
            <p>precio:</p>
            <p>cantidad:</p>
            <p>subtotal:</p>
            <button onClick={()=>removeItem()}className='button' >x</button>
        </div>
    );
}


/*  const total = cart.reduce((acc,item)=>acc + item.price, 0);

removeItem,title,price,cont,totalCont

<h2>{title}</h2>
<p>precio:{price}</p>
<p>cantidad:{cont}</p>
<p>subtotal:{totalCont}</p>

<p>total:{total}</p> */