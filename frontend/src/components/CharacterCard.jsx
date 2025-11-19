import avatar6 from "../assets/avatars/6.png";
import { Link } from "react-router";

export default function CharacterCard({ data }) {
  return (
    <div className="character-card">
      <h2>{data.name}</h2>
      <img src={avatar6} alt={`Portrait image of ${data.name}`} />
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
        <button>Add to Faves</button>
        <Link to={`/characters/details/${data.name}`}>
          <button>View Details</button>
        </Link>
      </div>
    </div>
  );
}
