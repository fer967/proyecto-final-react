import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(      // root esta en el index.html
  <React.StrictMode>                                              
    <App />
  </React.StrictMode>,
)

// inyecta aplicacion y la renderiza dentro del root