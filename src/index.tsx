import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header';
import Introduce from './components/introduce';
import Feature from './components/feature';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <Introduce />
    <Feature />
  </React.StrictMode>
);
