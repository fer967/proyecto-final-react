
//--- CONTEXT ---
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ItemCard from "./ItemCard";

export default function ProductsContainer(){
    const[products, setProducts] = useContext(ProductContext);
    return(
        <>
        <section>
            {products.map(product => <ItemCard product={product} key={product.id}/>)}
        </section>
        </>
    );
}