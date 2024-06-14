import { useState } from "react";
import { createContext } from "react";

// lo que tenemos que consumir
export const ProductContext = createContext(false);

// el que provee accaso al contexto
export function ProductProvider({children}){
    const[products, setProducts] = useState([{id:1, title:'bombo', price:200}]);

    return(
        <ProductContext.Provider value={[products, setProducts]}>  
            {children}
        </ProductContext.Provider>
    );
}
