
import React, { useEffect, useState, useContext } from 'react';
import BookAdd from './BookAdd.js'
import Books from './Books.js'
import UserC from '../contexts/UserC';
import { getAllBooks } from '../services/BookApi';

export default function Home() {
    const {userId} = useContext(UserC)

    const [books, setBooks]= useState([
        {
           bookName: "Un livre vide"
        },
    ]);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        getAllBooks()
            .then(data => setBooks(data));
    }, []);

    function addBook(newBook) {
        setBooks([...books, newBook ])
    }
    function deleteBook(bookId) {
        setBooks(current =>
            current.filter(book => {
              return book._id !== bookId;
            }),
        );
    }

    return (
        
        <div className="Home">
            <br/>
            <div className='row'>
                <div className='col-12 text-center'>
                    
                    {userId ? <BookAdd addBook={addBook}/> : ''} {
                        
                    }

                </div>
            </div>
            <br></br>

            <Books books={books} deleteBook={deleteBook}/> 

        </div>
    )
}