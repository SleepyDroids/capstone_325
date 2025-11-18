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
import Homepage from "./components/Homepage";

function App() {
  const [characters, setCharacters] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    const lookAtTheseDudes = async () => setCharacters(await getAllCharacters());
    lookAtTheseDudes();
  }, [])

  console.log(characters)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage data={characters} />} />
        <Route
          path="/characters"
          element={<CharacterList data={characters} />}
        />
        <Route path="/characters/new" element={<CharacterForm data={characters} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
