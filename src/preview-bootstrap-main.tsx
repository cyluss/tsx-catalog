import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './preview-bootstrap.css'
import PreviewApp from './PreviewApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode><PreviewApp /></StrictMode>
)
