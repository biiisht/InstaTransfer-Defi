import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Components/Home"
import Navbar from './Components/Navbar';
import Governance from './Components/Governance';
import Transfer from './Components/Transfer';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
      <Route path="/" element={<><Navbar /> <Home /></>}/>
      <Route path="/governance" element={<Governance/>}/>
      <Route path="/transfer" element={<><Navbar /> <Transfer/></>}/>
      
      </Routes>
    </Router> 
    </div>
  );
}

export default App;
