// Importing hooks
import { useState, useEffect } from "react";

// Importing routes
import { Routes, Route, Navigate } from "react-router";

// Importing function to retrieve data from the API
import getAllCharacters from "../services/character-api.js";
import { BASE_URL } from "../services/character-api.js";

// Importing pages / components
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import CharacterList from "./pages/CharacterList.jsx";
import CharacterForm from "./pages/CharacterForm.jsx";
import CharacterDetails from "./pages/CharacterDetails.jsx";
import Homepage from "./components/Homepage";

function App() {
  const [characters, setCharacters] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorite, setFavorite] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setCharacters(await getAllCharacters());
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // console.log(characters);

  if (isLoading) {
    return (
      <div>
        Loading, please wait. Will replace this later with something cleaner.
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  async function toggleFavorite(id) {
 // There's no request body and it should work by passing an id
    try {
      const response = await fetch(`${BASE_URL}/characters/${id}/fav`, {
        method: "PATCH",
        // body: JSON.stringify(character),
        headers: {
          "Content-Type": "application/json",
        }
      });
      const toggleFavorite = await response.json();
      console.log(toggleFavorite);
      // this should return the character object with a flipped bool
    } catch (e) {
      console.log(e);
    }
    // setFavorite(toggleFavorite.isFavorite)
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage data={characters} />} />
        <Route
          path="/characters"
          element={
            <CharacterList data={characters} addToFaves={toggleFavorite} favStatus={favorite} />
          }
        />
        <Route
          path="/characters/details/:name"
          element={<CharacterDetails data={characters} />}
        />
        <Route
          path="/characters/new"
          element={<CharacterForm data={characters} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
