import './App.css';
import React from "react"
import { Routes, Route } from 'react-router-dom';
// Pages:
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShopAllPage from "./pages/ShopAllPage";

// Import Components
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <>
    <HeaderComponent />
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/shopAll" element={<ShopAllPage/>}/>
    </Routes>
      
    <FooterComponent />
    </>
      
    


  );
}

export default App;
