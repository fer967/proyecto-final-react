
import { useContext } from 'react';
import'./CartWidget.css';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartWidget(){
    const{totalCont} = useContext(CartContext);
    return(
        <Link to='/cart' >
            <button className='icono'>🛒</button>
            {totalCont}
        </Link>
    );
}


