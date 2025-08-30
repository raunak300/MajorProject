import { useState,useEffect } from 'react'
import './App.css'
import Home from './Pages/Home'
import AuthPage from './Pages/AuthPage'
import { BrowserRouter, useNavigate } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { useAppStore } from './Storage/store'
import axios from 'axios'
import { VERIFY_API } from "@/API/apicalls";
import FlippingBook from "./Components/FlippingBook"
import Public from './Pages/Public'
import Preference from "./Pages/Preference"



function App() {
  const logged = useAppStore(state => state.logged);
  const setLogged = useAppStore(state => state.checkLoggedIn);

  const checkToken = async () => {
    try {
      const res = await axios.get(VERIFY_API, {
        withCredentials: true, // important: sends cookie
      });
      if (res.data.valid) {
        setLogged(true); // update Zustand store
      } else {
        setLogged(false);
        
      }
    } catch (err) {
      setLogged(false);
      console.log("Token check failed", err.response?.data);
    }
  };

  useEffect(() => {
    checkToken(); // call on app load
  }, []);
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/auth'} element={<AuthPage />} />
          <Route path="/journal" element={<ProtectedRoute component={FlippingBook} />} />
          <Route path={'/public'} element={<ProtectedRoute component={Public} />} />
          <Route path="/preferences" element={<Preference />} />
          <Route path={'*'} element={<Home />} />
        
        </Routes>
      </BrowserRouter>
    </>
  )
}
{/* <Route path="/" element={<ProtectedRoute component={Home} />} /> */}

export default App;

function ProtectedRoute({ component: Component }) {
  const logged = useAppStore(state => state.logged);
  const navigate = useNavigate();

  useEffect(() => {
    if (!logged) {
      navigate("/auth");
    }
  }, [logged, navigate]);

  // Only render the component if logged in
  return logged ? <Component /> : null;
}


