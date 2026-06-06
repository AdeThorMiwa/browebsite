import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Privacy from './pages/Privacy.tsx'
import Riders from './pages/Riders.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/riders" element={<Riders />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
