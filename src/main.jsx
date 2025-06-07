import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

//Menu List
import Layout from "./components/Layout.jsx";
import GuessTheCharacter from './views/GuessCharacter.jsx'
import GuessTheAnime from './views/GuessAnime.jsx';
import GuessTheOpening from './views/GuessOpening.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<GuessTheAnime />} />
          <Route path="characters" element={<GuessTheCharacter />} />
          <Route path="opening" element={<GuessTheOpening />} />
          <Route path="anidle" element={<GuessTheCharacter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
