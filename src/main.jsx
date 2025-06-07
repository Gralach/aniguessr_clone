import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

//Menu List
import Layout from "./components/Layout.jsx";
import GuessTheCharacter from './views/GuessCharacter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<GuessTheCharacter />} />
          <Route path="characters" element={<GuessTheCharacter />} />
          <Route path="opening" element={<GuessTheCharacter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
