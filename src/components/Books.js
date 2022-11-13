import React, { useContext } from 'react';
import bookImg from '../assets/book.png'

import UserC from '../contexts/UserC';

import '../styles/Books.css';
import BookEdit from './BookEdit';
import BookDelete from './BookDelete';
import BookInfo from './BookInfo';


export default function Books(props) {

    // Variable utilisateur
    const {userId} = useContext(UserC)

    return userId ? (
        <div className="container">
            <div className="Books">
                <div className='row'>
                    {props.books.map((book, index) => 
                    <div className='col-sm-3' key={book.id}>
                        <div className="card" >
                            <img className="card-img-top" src={bookImg} alt="Card cap" />
                            <div className="card-body" title={book.id}>
                                <h5 className="card-title">{book.bookName}</h5>
                                <p className="card-text"></p>
                                <BookInfo book={book}/>
                                <BookEdit book={book} />
                                
                                
                                <BookDelete book={book} deleteBook={props.deleteBook}/>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
                
            </div>
        </div>
        
        
    ) : (
        <div className="container">
            <div className="Books">
                <div className='row'>
                    {props.books.map((book, index) => 
                    <div className='col-sm-3 ' key={book.id}>
                        <div className="card" >
                            <img className="card-img-top" src={bookImg} alt="Card cap" />
                            <div className="card-body" title={book.id}>
                                <h5 className="card-title">{book.bookName}</h5>
                                <p className="card-text"></p>
                                <BookInfo book={book}/>

                            </div>
                        </div>
                    </div>
                    )}
                </div>
                
            </div>
        </div>
        
    )
}