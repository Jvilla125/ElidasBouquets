import './App.css';
import React from "react"
import { Routes, Route } from 'react-router-dom';
// Pages:
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShopAllPage from "./pages/ShopAllPage";
import CartPage from './pages/CartPage';
import DeliveryOptionsPage from './pages/DeliveryOptionsPage';
import RefundPolicyPage from './pages/RefundPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import ProductDetailsPage from './pages/ProductDetailsPage';

// Import Components
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

// Util
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <>
    {/* Importing ScrollToTop will be included in all of the pages */}
    <ScrollToTop/>
    <HeaderComponent />
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/shopAll" element={<ShopAllPage/>}/>
      <Route path="/cart" element={<CartPage/>}/>
      <Route path="/delivery-options" element={<DeliveryOptionsPage/>}/>
      <Route path="/refund-policy" element={<RefundPolicyPage/>}/>
      <Route path="/termsofservice" element={<TermsOfServicePage/>} />
      <Route path="/product-details" element={<ProductDetailsPage/>} />
      <Route path="*" element="Page not exists 404" />
    </Routes>
      
    <FooterComponent />
    </>
      
    


  );
}

export default App;
