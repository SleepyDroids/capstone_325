import { useNavigate } from "react-router";

export default function HomepageTitle() {

    const navigate = useNavigate()

  return (
    <>
      <div className="main-text">
        <h1>Character Cubby</h1>
        <p>
         Keep track of every hero, spell-slinger, and disaster bard in one cozy corner of the multiverse.
        </p>
      </div>

      <div className="main-btns">
        <button className="formBtn mainBtn" onClick={() => navigate("/characters")}>
          Browse your party
        </button>
        <button className="formBtn mainBtn" onClick={() => navigate("/characters/new")}>
          Forge a new character
        </button>
        <button className="formBtn mainBtn" onClick={() => navigate("/profile")}>
          Dungeon Master's Screen
        </button>
      </div>
    </>
  );
}
