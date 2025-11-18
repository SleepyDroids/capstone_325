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
import CharacterDetails from "./pages/CharacterDetails.jsx"
import Homepage from "./components/Homepage";

function App() {
  const [characters, setCharacters] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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

  // submit function will be built in here for now for convenience 
  async function handleNewSubmit(e) {
    e.preventDefault();
    console.log('Character has been submitted to the DB');
    // don't know if inputRef or controlled inputs are best in this instance?
    
    // const newCharacter = {
    //   name: name,
    //   race: race,
    //   charClass: bard,
    //   background: background,
    //   level: 12,
    //   stats: {
    //     str: 1,
    //     dex: 1,
    //     con: 1,
    //     int: 1,
    //     wis: 1,
    //     cha: 1
    //   }

    // }
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage data={characters} />} />
        <Route
          path="/characters"
          element={<CharacterList data={characters} />}
        />
        <Route
          path="/characters/details/:name"
          element={<CharacterDetails data={characters} />}
        />
        <Route
          path="/characters/new"
          element={<CharacterForm data={characters} newCharacter={handleNewSubmit} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
