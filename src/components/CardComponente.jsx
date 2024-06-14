export default function CardComponente({children, titulo}){
    return(
        <>
            <article style={{border:'1px solid black', padding:10}}>
                {children}
                <h3>{titulo}</h3>
            </article>
        </>
    );
}