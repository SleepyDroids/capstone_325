import seelah_placeholder from "../assets/avatars/seelah.jpg";
import { Link } from "react-router";

import { Tooltip } from "react-tooltip";

export default function CharacterCard({ data, addToFaves }) {
  return (
    <div className="character-card">
      <div className="character-card-top-section">
        <h2>{data.name}</h2>
        <a
          data-tooltip-id="level-tooltip"
          data-tooltip-content={`Level: ${data.level}`}
        >
          <img
            src={seelah_placeholder}
            alt={`Portrait image of ${data.name}`}
          />
        </a>
        <Tooltip id="level-tooltip" />
      </div>
      <ul>
        <li>
          <span className="card-text">Class:</span> {data.charClass}
        </li>
        <li>
          <span className="card-text">Species:</span> {data.race}
        </li>
        {data.background && (
          <li>
            <span className="card-text">Background:</span> {data.background}
          </li>
        )}
      </ul>
      <div className="character-card-btns">
        <button onClick={() => addToFaves(data._id)}>
          {data.isFavorite === true
            ? "Remove From Favorites"
            : "Add To Favorites"}
        </button>
        <Link to={`/characters/details/${data.name}`}>
          <button>View Details</button>
        </Link>
      </div>
    </div>
  );
}

/*
       <strong>Level: </strong> {data.level}
        <p>
          <strong>Strength:</strong> {data.stats.str} <br />
          <strong>Dexterity:</strong> {data.stats.dex} <br />
          <strong>Constitution:</strong> {data.stats.con} <br />
          <strong>Intelligence:</strong> {data.stats.int} <br />
          <strong>Wisdom:</strong> {data.stats.wis} <br />
          <strong>Charisma:</strong> {data.stats.cha} <br />
        </p>
*/
