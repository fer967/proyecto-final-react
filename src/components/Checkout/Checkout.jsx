import { useContext, useState } from 'react';
import './Checkout.css';
import { Timestamp, addDoc, collection, doc, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore';
import { CartContext } from '../../context/CartContext';
import {db} from '../../firebase/firebase';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

export default function Checkout() {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const { cart, total, clearCart } = useContext(CartContext);
    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)

        try{
            const objOrder = {
                buyer: { name, phone, email },
                items: cart,
                total: total,
                date: Timestamp.fromDate(newDate())
            }
            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, 'products')
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodCont = productAddedToCart?.cont
                if (stockDb >= prodCont) {
                    batch.update(doc.ref, { stock: stockDb - prodCont })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (stockDb >= prodCont) {
                batch.update(doc.ref, { stock: stockDb - prodCont })
            } else {
                outOfStock.push({ id: doc.id, ...dataDoc })
            }

            if (outOfStock.length === 0) {
                await batch.commit()
                const orderRef = collection(db, 'orders')
                const orderAdd = await addDoc(orderRef, objOrder)
                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error('hay productos fuera de stock')
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        } 
    }

    if (loading) {
        return
        <h1>se esta generando la orden</h1>
    } if (orderId) {
        return
        <h1>el id de su orden es : {orderId}</h1>
    }

    return (
        <div className='checkout'>
            <h1>checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    )
}