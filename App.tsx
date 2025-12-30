
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import ProductDetail from './pages/ProductDetail';
import FlashSale from './pages/FlashSale';
import Brands from './pages/Brands';
import BrandDetail from './pages/BrandDetail';
import OrderProtection from './pages/OrderProtection';
import HelpCenter from './pages/HelpCenter';
import Preorder from './pages/Preorder';
import Checkout from './pages/Checkout';
import { useEffect } from 'react';

const App: React.FC = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-700">
      <Header />
      
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flash-sale" element={<FlashSale />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/brand/:id" element={<BrandDetail />} />
          <Route path="/order-protection" element={<OrderProtection />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/preorder" element={<Preorder />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
