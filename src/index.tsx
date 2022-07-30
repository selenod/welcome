import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './components/header';
import Part0 from './components/part0';
import Part1 from './components/part1';
import Part2 from './components/part2';
import Part3 from './components/part3';
import Footer from './components/footer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Part0 />
      <Part1 />
      <Part2 />
      <Part3 />
      <Footer />
    </Router>
  </React.StrictMode>
);
