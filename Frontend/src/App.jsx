import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import AuthPage from './Pages/AuthPage'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/auth'} element={<AuthPage />} />
          <Route path={'*'} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
