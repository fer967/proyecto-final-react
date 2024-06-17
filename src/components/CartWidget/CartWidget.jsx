
import { useContext } from 'react';
import'./CartWidget.css';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartWidget(){
    const{totalCont} = useContext(CartContext);
    return(
        <Link to='/cart' style={{display: totalCont > 0? 'block':'none'}} >
            <button className='icono'>🛒{totalCont}</button>
        </Link>
    );
}


