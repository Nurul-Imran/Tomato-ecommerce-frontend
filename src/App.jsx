import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Error from './pages/Error/Error';
import Navbar from './components/Navbar/Navbar';
import Signup from './components/Signup/Signup';

const App = () => {
  const [isOpenSignUp, setIsOpenSignUp] = useState(false);
  return (
    <>
      { isOpenSignUp && <Signup setIsOpenSignUp={setIsOpenSignUp} /> }
      <Navbar setIsOpenSignUp={setIsOpenSignUp} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App