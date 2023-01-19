import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/index.scss'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.scss'
import { ThemeProvider } from './components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

