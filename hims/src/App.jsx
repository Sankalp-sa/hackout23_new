import { useState } from 'react'
import './App.css'
// import Navbar from './components/Navbar'
import Form from './components/form'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Registration from './components/registration'; 
import toast, { Toaster } from 'react-hot-toast';
import FindPatient from './components/FindPatient';


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Form />} />
      <Route path="/Registration" element={<Registration />} />
      <Route path="/BookPatient" element={<FindPatient />} />
      <Route path='*' element={<h1>404 Not Found</h1>} />
    </Routes>
    <Toaster/>
    </>
  )
}

export default App
