
//--- FIREBASE---
import { useState } from "react";
import { addOrder } from "../firebase/firebase";

export default function AddOrders() {
    const[orderId, setOrderId] = useState(null);
    const newOrder = {
        buyer:{
            name:'Juan',
            phone:'112233',
            email:'Juan@gmail'
        },
        items:[
            {
                id:'a1b2c3',
                title:'guitarra',
                price:'200'
            }
        ],
        total:200
    }
    const handleClick = ()=>{
        addOrder(newOrder).then(id => setOrderId(id));
    }

    return (
        <>
            <button onClick={handleClick}>Enviar nueva orden de pedido</button>
            {orderId && <p>nueva orden de pedido generada id: {orderId}</p>}
        </>
    );
}