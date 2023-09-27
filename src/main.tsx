import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { CepProvider } from './context/CepContext.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CepProvider>
      <App />
    </CepProvider>
  </React.StrictMode>,
)
