import './Item.css';
import { Link } from 'react-router-dom';

export default function Item({ id, title, image, price, stock }) {
    return (
        <div className='single-item-container'>
            <img src={image} alt={title} />
            <section className='single-item'>
                <h2>{title}</h2>
                <p>precio: ${price}</p>
                <p>stock:{stock}</p>
                <Link to={`/item/${id}`} className="Option">ver detalles</Link>
            </section>
        </div>
    );
}