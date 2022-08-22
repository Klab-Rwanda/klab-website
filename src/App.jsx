import React from 'react'
import './App.css'
import { BrowserRouter } from "react-router-dom";
import Index from './Routes/Index';
import { Provider } from "react-redux";
import { store } from './store/store';

function App() {
 

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Index />
      </Provider>
    </BrowserRouter>
  );
}

export default App
