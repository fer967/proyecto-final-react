import './ItemList.css';
import Item from '../Item/Item';

export default function ItemList({products}){
    return(
        <div className='list'>
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    );
}