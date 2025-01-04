import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export default function ItemDetail({ id, title, image, category, description, price, stock }) {
    const [contAdded, setContAdded] = useState(0);
    const { addItem } = useContext(CartContext);

    const onAdd = (cont) => {
        setContAdded(cont)
        const item = { id, title, price }
        addItem(item, cont);
    }


    // modificacion (en prueba : renderiza duplicado en Cart)
    /*useEffect(() => {
        const handleOnAdd = (cont) => {
            setContAdded(cont)
            const item = { id, title, price }
            addItem(item, cont);
        }
        document.addEventListener("click", handleOnAdd );
        return () => {
            document.removeEventListener("click", handleOnAdd  );
        }
    }, []);*/


    return (
        <div className='detail-container'>
            <section className='item-cont'>
                <picture>
                    <img src={image} alt={title} className='' />
                </picture>
                <section className='item-det'>
                    <h2>{title}</h2>
                    <p>categoria:{category}</p>
                    <p>descripcion:{description}</p>
                    <p>precio: ${price}</p>
                </section>
            </section>
            <section>
                {contAdded > 0 ? (
                    <Link to='/cart' className='Option' >terminar compra</Link>
                ) : (
                    <ItemCount initial={1} stock={stock} onAdd={onAdd} />
                )
                }
            </section>
        </div>
    );
}

/*

 const handleOnAdd = (cont) => {
        setContAdded(cont)
        const item = { id, title, price }
        addItem(item, cont);
    }

*/