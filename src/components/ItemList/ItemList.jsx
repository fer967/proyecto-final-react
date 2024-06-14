import './ItemList.css';
import Item from '../Item/Item';

export default function ItemList({products}){
    return(
        <div>
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    );
}