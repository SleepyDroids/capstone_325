import avatar6 from "../assets/avatars/6.png";
import { Link } from "react-router";

export default function CharacterCard({ data, addToFaves, favStatus }) {
  return (
    <div className="character-card">
      <h2>{data.name}</h2>
      <img src={avatar6} alt={`Portrait image of ${data.name}`} />
      <p>Is this a favorite? {data.isFavorite === true ? "No" : "Yes"}</p>
      <ul>
        <li>
          <span className="card-text">Class:</span> {data.charClass}
        </li>
        <li>
          <span className="card-text">Race:</span> {data.race}
        </li>
        <li>
          <span className="card-text">Background:</span> {data.background}
        </li>
      </ul>
      <div className="character-card-btns">
        <button onClick={() => addToFaves(data._id)}>
          {data.isFavorite === true ? "Remove From Favorites" : "Add To Favorites" }
        </button>
        <Link to={`/characters/details/${data.name}`}>
          <button>View Details</button>
        </Link>
      </div>
    </div>
  );
}
