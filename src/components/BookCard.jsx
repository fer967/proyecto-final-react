
import './BookCard.css';

export default function BookCard({book}){
    return(
        <>
        <article className="wrapper">
            <img src={book.image} alt={book.title} />
            <div>
                <h4>{book.title}</h4>
                <button>ver detalles</button>
            </div>
        </article>
        </>
    );
}

