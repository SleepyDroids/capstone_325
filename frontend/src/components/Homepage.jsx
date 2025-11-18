// Importing routes
import { Routes, Route, useNavigate } from "react-router";

// Importing pages / components
import CharacterList from "../pages/CharacterList.jsx"
import CharacterForm from "../pages/CharacterForm.jsx"

export default function Homepage() {

  const navigate = useNavigate()

  return (
    <main>
      <div id="container">
        <div className="main-text">
          <h1>Character Cubby</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            repudiandae eius incidunt amet atque qui nihil nesciunt doloribus,
            excepturi dicta est a nam dolorem alias placeat mollitia, id fugiat
            architecto?
          </p>
   
        </div>

    <div className="main-btns">

      <button className="mainBtn" onClick={() => navigate("/characters") }>View all characters</button> 
      <button className="mainBtn">Create a character</button>
    </div>

      </div>
    </main>
  );
}
