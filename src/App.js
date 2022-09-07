import React, { useCallback, useState } from 'react';
import { BrowserRouter } from '../node_modules/react-router-dom/index';
import { Route, Routes } from '../node_modules/react-router-dom/index';
import NewsPage from './components/NewsPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewsPage />} />
        <Route path=":category" element={<NewsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
