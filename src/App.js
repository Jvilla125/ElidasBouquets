import './App.css';
import React from "react"
import { Routes, Route } from 'react-router-dom';
// Pages:
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

// Import Components
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <>
    <HeaderComponent />
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
    </Routes>
      
     <FooterComponent />
    </>
      
    


  );
}

export default App;
