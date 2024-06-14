import './BookList.css';
import { useEffect, useState } from 'react';
import BookCard from './BookCard.jsx';
import { getBooks } from '../asyncMock.js';


export default function BookList(){
    const[books, setBooks] = useState([]);

    useEffect(() => {
        getBooks('https://api.itbook.store/1.0/new').then((datosRecibidos) =>
            setBooks(datosRecibidos.books)
        );
    }, []);

    return(
        <>
        <section className='contenedor'>
            {books.map((book) => {
                <BookCard key = {book.isbn13} book = {book}/>
            })}
        </section>
        </>
    );
}
