
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { useParams } from 'react-router-dom';

export default function ItemListContainer({ greeting }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();
    useEffect(() => {
        setLoading(true)
        const collectionRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')
        getDocs(collectionRef).then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data }
            })
            setProducts(productsAdapted)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [categoryId]);
    return (
        <div className='container'>
            <h2>{greeting}</h2>
            <ItemList products={products} />
        </div>
    );
}




















