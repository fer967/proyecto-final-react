
//--- FIREBASE---

import { useEffect } from "react";
import { useState } from "react";
import { getProducts, filterProdsByPrice, updateProduct } from "../firebase/firebase";


export default function ProductsComponent(){

    const[myProds, setMyProds] = useState([]);

    useEffect(() => {
        getProducts().then(products => setMyProds(products));
        /*filterProdsByPrice(400).then((products) => setMyProds(products));*/
    }, []);

    const handleUpdate = async(event)=>{
        await updateProduct(event.target.id, {price: 100});
        /*location.reload();  // parpadea en el ejemplo d la profe  */
        getProducts().then(products => setMyProds(products));  // anda mejor ( para no repetir pongo esto dentro de funcion obtenerProductos)
    }

    return(
        <>
        {myProds.map((prod) => (
        <div key={prod.id}>
            <h4>{prod.title}</h4>
            <p>${prod.price} - {prod.category}</p> 
            <button onClick={handleUpdate} id={prod.id}>actualizar precio producto</button>
        </div>))}
        </>
    );
}