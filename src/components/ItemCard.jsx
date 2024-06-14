
//--- context ---
export default function ItemCard({product}){
    return(
        <section>
            <h2>{product.id}</h2>
            <p>{product.title}</p>
            <p>Price ${product.price}</p>
        </section>
    );
}