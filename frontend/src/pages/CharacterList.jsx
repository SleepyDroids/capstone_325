import CharacterCard from "../components/CharacterCard";

import { Link } from "react-router";

export default function CharacterList({ data }) {
  console.log(data);

  return (
    <div className="character-container">
      {data.map((c) => {
        return (
          <Link to={`/characters/details/${c.name}`} key={c._id}>
            <CharacterCard data={c} />
          </Link>
        );
      })}
    </div>
  );
}
