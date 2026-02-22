import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Bootstrap 제거 — preview iframe이 격리해서 로드
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
