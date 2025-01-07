import './index.scss';

import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import About from './pages/About/About.tsx';
import BaseTemplate from './templates/Base/Base.tsx';
import Home from './pages/Home/Home.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <BaseTemplate>
              <Home />
            </BaseTemplate>
          }
        />
        <Route
          path="/about"
          element={
            <BaseTemplate>
              <About />
            </BaseTemplate>
          }
        />
      </Routes>
    </Router>
  </StrictMode>,
);
