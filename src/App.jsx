import React, { useRef, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Agence from './pages/Agence'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'
import Navbar from './components/Navigation/Navbar'
import FullscreenNav from './components/Navigation/FullscreenNav'

const App = () => {
  return (
    <>      
        <FullscreenNav/>
        {/* <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='projects' element={<Projects />} />
          <Route path='agence' element={<Agence />} />
        </Routes> */}
    </>
  )
}

export default App