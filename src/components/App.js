import '../styles/App.css';
import Menu from './Menu.js'
import { Route, Routes } from 'react-router-dom';

import Register from './Register';
import Home from './Home';

function App() {
  return (
    <div className='App'>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      
    </div>
    
  );
}

export default App;
