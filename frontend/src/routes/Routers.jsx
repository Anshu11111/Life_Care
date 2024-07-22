import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from '../pages/Home'
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Services from '../pages/Services';
import Doctors from '../pages/Doctors/Doctors';
import DoctorsDetails from '../pages/Doctors/DoctorDetails';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/doctors" element={<Doctors/>} />
      <Route path="/doctors/:id" element={<DoctorsDetails/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Signup/>} />
      <Route path="/contact" element={<Contact/>} />

    </Routes>
  )
}

export default Routers

