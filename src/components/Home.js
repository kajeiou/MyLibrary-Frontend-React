
import React, { useEffect, useState, useContext } from 'react';
import BookAdd from './BookAdd.js'
import Books from './Books.js'
import UserC from '../contexts/UserC';

export default function Home() {
    const {userId} = useContext(UserC)
    return (
        
        <div className="Home">
            <br/>
            <div className='row'>
                <div className='col-12'>
                    
                    {userId ? <BookAdd/> : ''} {
                        
                    }

                </div>
            </div>
            <br></br>

            <Books/> 

            
        </div>
    )
}