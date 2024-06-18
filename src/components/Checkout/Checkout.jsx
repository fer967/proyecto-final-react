import './Checkout.css';
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useForm } from 'react-hook-form';
import { collection,addDoc } from 'firebase/firestore';
import {db} from '../../firebase/firebase';

export default function Checkout() {
    const[pedidoId, setPedidoId] = useState('');
    const { cart, total, clearCart } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            buyer: data,
            items: cart,
            total: total
        }
        console.log(pedido);
        const ordersRef = collection(db,'orders');
        addDoc(ordersRef,pedido)
        .then((doc)=>{
            setPedidoId(doc.id);
            clearCart();
        })
    }
    if(pedidoId){
        return(
            <div>
                <h1>muchas gracias por tu compra !!!</h1>
                <p>tu numero de pedido es : {pedidoId}</p>
            </div>
        )
    }

    return (
        <div>
            <form onSubmit={handleSubmit(comprar)}>
                <input type="text" placeholder="nombre" {...register("nombre")} />
                <input type="email" placeholder="email" {...register("email")} />
                <input type="text" placeholder="phone" {...register("telefono")} />
                <button type="submit">comprar</button>
            </form>
        </div>
    );
}

























