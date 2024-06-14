import './CheckoutForm.css';
import { useState } from "react";


export default function CheckoutForm({onConfirm}){
    const[name, setName] = useState('');
    const[phone, setPhone] = useState('');
    const[email, setEmail] = useState('');

    const handleConfirm = (event)=>{
        event.preventDefault()
        const userData = {name,phone,email}
        onConfirm(userData)
    }

    return(
        <div>
            <form onSubmit={handleConfirm} className='form'>
                <label className='label'>
                    nombre
                    <input className='input' type="text" value={name} onChange={({target}) => setName(target.value)}/>
                </label>
                <label className='label'>
                    telefono
                    <input className='input' type="text" value={phone} onChange={({target}) => setPhone(target.value)}/>
                </label>
                <label className='label'>
                    email
                    <input className='input' type="email" value={email} onChange={({target}) => setEmail(target.value)}/>
                </label>
                <section>
                    <button type='submit'>crear orden</button>
                </section>
            </form>
        </div>
    );
}