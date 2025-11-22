import { Routes, Route, useNavigate } from "react-router";

export default function HomepageTitle() {
  return (
    <>
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
        <button className="mainBtn" onClick={() => navigate("/characters")}>
          View all characters
        </button>
        <button className="mainBtn" onClick={() => navigate("/characters/new")}>
          Create a character
        </button>
        <button className="mainBtn" onClick={() => navigate("/profile")}>
          View Profile
        </button>
      </div>
    </>
  );
}
