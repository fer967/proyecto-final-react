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
            <div className='orden'>
                <h1>muchas gracias por tu compra !!!</h1>
                <p>tu numero de pedido es : {pedidoId}</p>
            </div>
        )
    }

    return (
        <div >
            <form onSubmit={handleSubmit(comprar)} className='checkout'>
                <input type="text" placeholder="ingrese su nombre" {...register("nombre")} />
                <input type="text" placeholder="ingrese su phone" {...register("telefono")} />
                <input type="email" placeholder="ingrese su email" {...register("email")} />
                <input type="email" placeholder="confirme su email" {...register("email")} />
                <button type="submit" className='Option'>comprar</button>
            </form>
        </div>
    );
}

























