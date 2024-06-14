import { useContext } from 'react';
import './Cart.css';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';

export default function Cart(){
        const{cart,clearCart,totalCont,total} = useContext(CartContext);
        if(totalCont === 0){           
            return(
                <div>
                    <h1>no hay item</h1>
                    <Link to='/' className='Option'>productos</Link>
                </div>
            )
        }
        return(
            <div className='cart'>
                {cart.map(p => <CartItem key={p.id} {...p}/>)}
                <h3>total: ${total}</h3>
                <button onClick={()=>clearCart()}className='button' >limpiar carrito</button>    
                <Link to='/checkout' className='Option'>checkout</Link>
            </div>
        );
    }


