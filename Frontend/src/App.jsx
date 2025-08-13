import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import AuthPage from './Pages/AuthPage'
import { BrowserRouter } from 'react-router-dom'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Home />
    </BrowserRouter>
    </>
  )
}

export default App
