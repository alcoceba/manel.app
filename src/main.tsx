import './index.scss';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import About from './pages/About/About.tsx';
import Home from './pages/Home/Home.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  </StrictMode>,
);
