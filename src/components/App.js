import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/App.css';
import Menu from './Menu.js'
import { Route, Routes } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import { useState } from 'react';
import { hasAuthenticated } from '../services/AuthApi';
import Auth from '../contexts/Auth';
import AuthenticatedRoute from './AuthenticatedRoute';
import MyProfile from './MyProfile';
import Footer from './Footer';


function App() {

  const[isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated())

  return (
    <Auth.Provider value={{isAuthenticated, setIsAuthenticated}} >
      <div className='App'>
        <script>
            <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
            <script src="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
        </script>

        <Menu/>
        
        <div className="container text-center">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/myprofile" element={<MyProfile />} />
          </Routes>
          <br></br>
          <Footer/>
        </div>
      </div>
      <ToastContainer />
    </Auth.Provider>
    
  );
}

export default App;
