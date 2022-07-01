import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import Home from './components/pages/Home';
import Signp from './components/pages/Signup';
import Dashh from './components/pages/dashboard';
import Login from './components/pages/login';
import Signup from './components/pages/Signup';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import {BrowserRouter as Router, Routes, Route ,Link} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signp/>} />
        <Route path="/dashboard" element={<Dashh/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
