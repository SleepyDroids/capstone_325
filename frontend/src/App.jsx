// Importing hooks
import { useState, useEffect } from "react";

// Importing routes
import { Routes, Route, Navigate } from "react-router";

// Importing function to retrieve data from the API
import getAllCharacters from "../services/character-api.js";

// Importing pages / components
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import CharacterList from "./pages/CharacterList.jsx";
import CharacterForm from "./pages/CharacterForm.jsx";

console.log(getAllCharacters);

import Homepage from "./components/Homepage";

function App() {
  const [characters, setCharacters] = useState(null);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage data={characters} />} />
        <Route
          path="/characters"
          element={<CharacterList data={characters} />}
        />
        <Route path="/characters/create" element={<CharacterForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
