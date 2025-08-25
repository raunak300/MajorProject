import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import AuthPage from './Pages/AuthPage'
import { BrowserRouter } from 'react-router-dom'
import FlippingBook from './Components/FlippingBook'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Home />
    </BrowserRouter>
    {/* <FlippingBook/> */}
    </>
  )
}

export default App
