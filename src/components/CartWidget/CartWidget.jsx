
import { useContext } from 'react';
import'./CartWidget.css';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartWidget(){
    const{totalCont} = useContext(CartContext);

    // link a Cart OK
    return(
        <Link to='/cart' >
            <button className='icono'>🛒0</button>
            {totalCont}
        </Link>
    );
}


//--- no aparece en navbar ---
/*className='cart-widget' style={{display:totalCont > 0 ? 'block' : 'none'}}*/