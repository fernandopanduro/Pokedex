import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { PokemonProvaider } from './assets/context/PokemonContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokemonProvaider>
      <App />
    </PokemonProvaider>
  </React.StrictMode>,
)
