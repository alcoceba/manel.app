import './index.scss';

import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import BaseTemplate from './templates/Base/Base.tsx';
import Career from './pages/Career/Career.tsx';
import Home from './pages/Home/Home.tsx';
import NextjsExplorer from './pages/NextjsExplorer/NextjsExplorer.tsx';
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
          path="/career"
          element={
            <BaseTemplate>
              <Career />
            </BaseTemplate>
          }
        />
        <Route
          path="/nextjs-explorer"
          element={
            <BaseTemplate>
              <NextjsExplorer />
            </BaseTemplate>
          }
        />
      </Routes>
    </Router>
  </StrictMode>,
);
