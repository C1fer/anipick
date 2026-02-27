import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Toaster } from 'sonner';
import { AppRouter } from './pages/router';
import { FiltersProvider } from './context/FiltersContext';
import { PicksProvider } from './context/PicksContext';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FiltersProvider>
      <PicksProvider>
          <AppRouter />
      </PicksProvider>
    </FiltersProvider>
    <Toaster richColors position="top-right" />
  </StrictMode>
)
