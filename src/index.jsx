import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Favorite from './pages/Favorite'
import Error from './components/Error'
import {
  BrowserRouter,
  Routes,
  Route,
 } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="favorites" element={<Favorite />} />
      <Route  path="*" element={<Error />} /> 
    </Routes>
  </BrowserRouter>
    
  </React.StrictMode>
);


