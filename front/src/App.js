import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import ContactoPage from './pages/ContactoPage'
import NovedadesPage from './pages/NovedadesPage'
import PlanesPage from './pages/PlanesPage'
import SignPage from './pages/SignPage'

import Links from './components/layout/Links'

import './App.css'



const App = () => {

  return (

    <>
      <BrowserRouter>
        <Links />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/planes' element={<PlanesPage />} />
          <Route path='/novedades' element={<NovedadesPage />} />
          <Route path='/contacto' element={<ContactoPage />} />
          <Route path='/signup' element={<SignPage />} />
        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App
