import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <BrowserRouter>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar handleOrderPopup={handleOrderPopup} />
          <Routes>
            <Route path='/' element={<Home handleOrderPopup={handleOrderPopup} orderPopup={orderPopup} setOrderPopup={setOrderPopup} />} />
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
