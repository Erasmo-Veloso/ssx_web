import React, { useEffect, useState } from 'react'
import KabanSquare from './components/Kaban/KabanSquare'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LoginPage'
import Turmas from './pages/Turmas'
import Trimestres from './pages/Trimestres'
import KabanPage from './pages/KabanPage'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/kaban' element={<KabanPage/>}/>
        <Route path='turmas' element={<Turmas/>}/>
        <Route path="/trimestres/:id" element={<Trimestres/>}/>
      </Routes>
    </div>
  )
}

export default App
