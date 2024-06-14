
// --- CONTADOR---
import { useEffect, useRef } from "react";
import { useState } from "react";

export default function RefBasico(){
    const[cont, setCont]= useState(0);
    const clicks= useRef(0);

    useEffect(()=>{
        alert('esta cambiando la variable cont o se esta montando el componente')
    }, [cont])

    const handleInc=()=>{
        setCont(cont+1);
        clicks.current++;
        console.log(clicks.current);
    }

    const handleDec=()=>{
        setCont(cont-1);
        clicks.current++;
        console.log(clicks.current);
    }

    return(
        <>
            <h3>contador con Ref</h3>
            <section>
                <button onClick={handleInc}>incrementar</button>
                <p>{cont}</p>
                <button onClick={handleDec}>decrementar</button>
            </section>
        </>
    );
}
