import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/index.sass'
import 'bootstrap-icons/font/bootstrap-icons.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
