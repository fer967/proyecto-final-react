
import './ItemCount.css';
import { useState } from 'react';

export default function ItemCount({ stock, initial, onAdd }) {
    const [cont, setCont] = useState(initial)
    const handleInc = () => {
        if (cont < stock) {
            setCont(cont + 1);
        }
    }
    const handleDec = () => {
        if (cont > 1) {
            setCont(cont - 1);
        }
    }
    return (
        <div className="container-count">
            <div className="controls">
                <button className="button" onClick={handleDec}>-</button>
                <p>{cont}</p>
                <button className="button" onClick={handleInc}>+</button>
            </div>
            <div>
                <button className="button" onClick={() => onAdd(cont)} disabled={!stock}>agregar al carrito</button>
            </div>
        </div>
    );
}

