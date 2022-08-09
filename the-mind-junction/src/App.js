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
import Write from './components/pages/Write';
import {BrowserRouter as Router, Routes, Route ,Link} from 'react-router-dom';

function App() {
  const user = false;
  return (
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={user ? <Home/> : <Signp/>} />
        <Route path="/dashboard" element={<Dashh/>} />
        <Route path="/login" element={user ? <Home/> :  <Login/>} />
        <Route path="/signup" element={user ? <Home/> : <Signup/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/write" element={user ? <Write/> : <Signup/>} />
        </Routes>
      </Router>
  );
}

export default App;
