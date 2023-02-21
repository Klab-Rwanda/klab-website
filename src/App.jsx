import React from 'react';
import './App.css';
import './styles/globals.scss';
import { BrowserRouter } from 'react-router-dom';
import Index from './Routes/Index';

function App() {
  return (
    <BrowserRouter>
      <Index />
    </BrowserRouter>
  );
}

export default App;
