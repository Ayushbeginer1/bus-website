
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Map from './component/map.jsx';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
