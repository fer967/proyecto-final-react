import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useContext, useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export default function ItemDetail({ id, title, image, category, description, price, stock }) {
    const [contAdded, setContAdded] = useState(0);
    const { addItem } = useContext(CartContext);

         // modificacion (en prueba : renderiza duplicado en Cart)
        useEffect(() => {
            const agregar = ()=>{
                handleOnAdd();
            }
            window.addEventListener('onClick',agregar);
            return()=>{
                window.removeEventListener('onClick',agregar);
                }
        },[]);
    

        const handleOnAdd = (cont) => {
        setContAdded(cont)
        const item = { id, title, price }
        addItem(item, cont);
    }

    return (
        <div className='detail'>
            <section>
                <h2>{title}</h2>
                <picture>
                    <img src={image} alt={title} className='' />
                </picture>
                <p>categoria:{category}</p>
                <p>descripcion:{description}</p>
                <p>precio: ${price}</p>
            </section>
            <section>
                {contAdded > 0 ? (
                    <Link to='/cart' className='Option' >terminar compra</Link>
                ) : (
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                )
                }
            </section>
        </div>
    );
}

