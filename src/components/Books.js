import React, { useEffect, useState } from 'react';
import bookImg from '../assets/book.png'

export default function Books() {
    const [books, setBooks]= useState([
        {
            name:"Mon premier livre",
            empruntable:true
        },
    ]);
    const [pop, setPop] = useState(false)

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('http://localhost:2000/books')
            .then(response => response.json())
            .then(data => setBooks(data));
    }, []);
    console.log( books[0])
    
    

    return (
        <div className="Books">
            <div className='row'>
                {books.map((book, index) => 
                <div className='col'>
                    <div className="card" >
                        <img className="card-img-top" src={bookImg} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Book {index} {book.id} {book.bookName}</h5>
                            <p className="card-text">ISBN : {book.isbn} Stock : {book.stock} Prix : {book.price}</p>
                            <button  className="btn btn-primary">Voir ce livre</button>
                        </div>
                    </div>
                </div>
                )}
                

                
            </div>
            
            <ul>
               
            </ul>
        </div>
        
    )
}