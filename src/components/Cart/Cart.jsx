import { useContext } from 'react';
import './Cart.css';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';

export default function Cart() {
    const { cart, clearCart, totalCont, total } = useContext(CartContext);
    if (totalCont === 0) {
        return (
            <div className='cart-empty'>
                <h1>el carrito esta vacio</h1>
                <Link to='/' className='Option'>productos</Link>
            </div>
        )
    }
    return (
        <div className='cart'>
            <section className='cart-item'>
                {cart.map(p => <CartItem key={p.id} {...p} />)}
            </section>
            <h3>total: ${total}</h3>
            <section className='button'>
                <button onClick={() => clearCart()} className='Option' >limpiar carrito</button>
                <Link to='/checkout' className='Option'>checkout</Link>
            </section>
        </div>
    );
}

