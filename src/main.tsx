import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes, Route } from "react-router";
import { Root } from './pages/Root';
import { AnimePickPage } from './pages/anime/AnimePickPage';
import { MangaPickPage } from './pages/manga/MangaPickPage';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={Root}>
        <Route index={true} Component={AnimePickPage} />
        <Route path='anime' Component={AnimePickPage} />
        <Route path='manga' Component={MangaPickPage} />
      </Route>
    </Routes>
  </BrowserRouter>
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
)
