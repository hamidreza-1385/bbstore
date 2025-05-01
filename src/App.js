import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';

import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <CartProvider>
      <Router basename='/store'>
        <Navbar />
        <Container className="mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Container>
      </Router>
    </CartProvider>
  );
}

export default App;
