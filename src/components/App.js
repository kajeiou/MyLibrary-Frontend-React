import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react';
import { hasAuthenticated } from '../services/AuthApi';
import UserC from '../contexts/UserC';

import React from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Foot from './Foot';

import Home from './Home';
import Register from './Register';
import Login from './Login';
import MyProfile from './MyProfile';
import Users from './Users.js';

function App() {

  const[userId, setUserId] = useState(hasAuthenticated())

  return (
    <UserC.Provider value={{userId, setUserId}} >
        <video autoPlay loop muted id='video'>
          <source src='/videos/video-1.mp4' type='video/mp4'/>
        </video>
      <div className='App'>
        <script>
            <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
            <script src="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
        </script>

        <Navbar/>              
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/users" element={<Users/>} />
          </Routes>
          <br></br>
          <Foot/>
        
      </div>
      
      <ToastContainer />
    </UserC.Provider>
    
  );
}

export default App;
