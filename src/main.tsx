import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Toaster } from 'sonner';
import { AppRouter } from './pages/router';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster visibleToasts={1} theme='dark'/>
    <AppRouter />
  </StrictMode>
)
