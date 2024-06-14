import { useState } from 'react';
import './ItemDetailContainer.css';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc,getDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import ItemDetail from '../ItemDetail/ItemDetail';

export default function ItemDetailContainer(){
    const[product, setProduct] = useState(null);
    const[loading, setLoading] = useState(true);
    const{itemId} = useParams();

    useEffect(()=>{
        setLoading(true)
        const docRef = doc(db,'products',itemId)
            getDoc(docRef).then(response => {
                const data = response.data()
                const productAdapted = {id:response.id, ...data}
                setProduct(productAdapted)
            })
            .finally(()=>{
                setLoading(false)
            })
    }, [itemId])

    return(
        <div className='detail-cont'>
            <ItemDetail {...product}/>
        </div>
    );
}