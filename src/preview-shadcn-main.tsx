import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './preview-shadcn.css'
import PreviewApp from './PreviewApp'
import { Toaster } from './components/ui/sonner'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PreviewApp />
    <Toaster />
  </StrictMode>
)
