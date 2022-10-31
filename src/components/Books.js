import React, { useEffect, useState, useContext } from 'react';
import bookImg from '../assets/book.png'
import Auth from '../contexts/Auth';
export default function Books() {
    const {isAuthenticated} = useContext(Auth)
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

    return isAuthenticated ? (
        <div className="Books">
            <div className='row'>
                <div className='col-12'>
                    <button className='btn btn-success'>Ajouter un nouveau livre</button>
                </div>
            </div>
            <br></br>
            <div className='row'>
                {books.map((book, index) => 
                <div className='col' style={{maxWidth:"300px"}}>
                    <div className="card" >
                        <img className="card-img-top" src={bookImg} alt="Card image cap" />
                        <div className="card-body" title={book.id}>
                            <h5 className="card-title">{book.bookName}</h5>
                            <p className="card-text">ISBN : {book.isbn} <br/>Stock : {book.stock} <br/>Prix : {book.price}</p>
                            <button className="btn w-100 btn-block btn-primary">Voir ce livre</button>
                            <button className="btn w-100 btn-block btn-secondary">Éditer ce livre</button>
                            <button className="btn w-100 btn-block btn-danger">Supprimer ce livre</button>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
        
    ) : (
        <div className="Books">
            <div className='row'>
                {books.map((book, index) => 
                <div className='col' style={{maxWidth:"300px"}}>
                    <div className="card" >
                        <img className="card-img-top" src={bookImg} alt="Card image cap" />
                        <div className="card-body" title={book.id}>
                            <h5 className="card-title">{book.bookName}</h5>
                            <p className="card-text">ISBN : {book.isbn} <br/>Stock : {book.stock} <br/>Prix : {book.price}</p>
                            <button  className="btn btn-primary">Voir ce livre</button>
                        </div>
                    </div>
                </div>
                )}
            </div>
            
        </div>
    )
}