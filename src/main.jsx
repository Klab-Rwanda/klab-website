import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './dashboard/styles/global.scss'
import AppProvider, { AuthContext } from './context/AppProvider'



ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider> 
    <App />
  </AppProvider>
);
