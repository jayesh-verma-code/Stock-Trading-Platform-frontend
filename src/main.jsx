import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'tailboot-lite/css/responsive.css';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './components/Home/HomePage.jsx'
import AboutPage from './components/About/AboutPage.jsx'
import SignupPage from './components/Signup/SignupPage.jsx'
import PricingPage from './components/Pricing/PricingPage.jsx'
import ProductPage from './components/Product/ProductPage.jsx'
import SupportPage from './components/Support/SupportPage.jsx'
import NotFound from './NotFound.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar />
   <Routes>
     <Route path='/' element={<HomePage/>} />
     <Route path='/signup' element={<SignupPage/>} />
     <Route path='/about' element={<AboutPage/>} />
     <Route path='/product' element={<ProductPage/>} />
     <Route path='/pricing' element={<PricingPage/>} />
     <Route path='/support' element={<SupportPage/>} />
     <Route path='*' element={<NotFound/>} />
   </Routes>
   <Footer />
  </BrowserRouter>
)
