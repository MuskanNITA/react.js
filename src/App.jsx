import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Vision from './Vision';
import Navbar from './Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
