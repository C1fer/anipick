import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Toaster } from 'sonner';
import { AppRouter } from './pages/router';
import { FiltersProvider } from './context/FiltersContext';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FiltersProvider>
      <AppRouter />
    </FiltersProvider>
    <Toaster richColors position="top-right" />
  </StrictMode>
)
