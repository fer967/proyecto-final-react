import './Item.css';
import { Link } from 'react-router-dom';

export default function Item({id, title, image, price, stock}){
    return(
        <div>
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <p>precio: ${price}</p>
            <p>stock:{stock}</p>
            <Link to={`/item/${id}`} className="Option">ver detalles</Link>
        </div>
    );
}