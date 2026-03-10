import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Toaster } from 'sonner';
import { AppRouter } from './pages/router';
import { FiltersProvider } from './context/FiltersContext';
import { PicksProvider } from './context/PicksContext';
import { MediaTypeProvider } from './context/MediaTypeContext';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MediaTypeProvider>
      <FiltersProvider>
        <PicksProvider>
            <AppRouter />
        </PicksProvider>
      </FiltersProvider>
    </MediaTypeProvider>
    <Toaster richColors position="top-right" />
  </StrictMode>
)
