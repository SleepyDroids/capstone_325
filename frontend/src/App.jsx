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
import Profile from "./pages/Profile.jsx";

function App() {
  const [characters, setCharacters] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorite, setFavorite] = useState(false);

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

  console.log(characters);

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
    try {
      const response = await fetch(`${BASE_URL}/characters/${id}/fav`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const toggleFavorite = await response.json();
      console.log(toggleFavorite);
    } catch (e) {
      console.log(e);
    }

    const matchID = characters.map((c) => {
      if (c._id === id) {
        c.isFavorite = !c.isFavorite;
      }
      return c;
    });
    console.log(matchID);
    setFavorite(matchID);
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage data={characters} />} />
        <Route
          path="/profile"
          element={
            <Profile data={characters} fav={favorite} setFav={setFavorite} />
          }
        />
        <Route
          path="/characters"
          element={
            <CharacterList
              data={characters}
              addToFaves={toggleFavorite}
              fav={favorite}
              setFav={setFavorite}
            />
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
