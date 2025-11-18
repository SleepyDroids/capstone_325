
// Importing routes
import { Routes, Route, Navigate } from "react-router";

export default function Homepage() {
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

      <button>View all characters</button> 
      <button>Create a character</button>
    </div>

      </div>
    </main>
  );
}
