import logo from './logo.svg';
import './App.css';
import Status from './Status';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from './Components/Sidebar/Sidebar';
import Login from './Components/Login/Login';

import Home from './Components/Home/Home';

function App() {
  return (
    <div className='container'>
      <Sidebar />
      <div className="leftContainer">
        
      </div>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
    
  );
}

export default App;
