import React, { useEffect, useState } from 'react';

export default function Books() {
    const [books, setBooks]= useState([
        {
            name:"Mon premier livre",
            empruntable:true
        },
    ]);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('http://localhost:2000/books')
            .then(response => response.json())
            .then(data => setBooks(data));
    }, []);
    console.log( books[0])
    
    

    return (
        <div className="bookList">
            <h4>Liste des livres :</h4>

            <ul>
                {books.map((book, index) => 
                    <li key={index}>
                        Livre n°{index} -({book.id}) {book.bookName} ISBN : {book.isbn} Stock : {book.stock} Prix : {book.price}
                    </li>
                )}
            </ul>
        </div>
        
    )
}