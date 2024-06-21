import './CartItem.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export default function CartItem() {
    const { cart, removeItem } = useContext(CartContext);

    return cart.map((product) => {
        return (
            <div key={product.id} className='item-cart'>
                <section>
                    <p>{product.title} </p>
                    <p>$ {product.price}</p>
                    <p>cantidad:{product.cont}</p>
                    <p>subtotal:$ {product.price * product.cont}</p>
                </section>
                <section>
                    <button onClick={() => removeItem(product.id)} className='delete'>eliminar</button>
                </section>
            </div>);
    });
}




