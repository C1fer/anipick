import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@fontsource/mochiy-pop-one';

import { Toaster } from 'sonner';
import { AppRouter } from './pages/router';
import { FiltersProvider } from './context/FiltersContext';
import { PicksProvider } from './context/PicksContext';
import { ErrorBoundary } from './components/ErrorBoundary';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <FiltersProvider>
        <PicksProvider>
            <AppRouter />
        </PicksProvider>
      </FiltersProvider>
      <Toaster richColors={true} position="top-right" />
    </ErrorBoundary>
  </StrictMode>
)
