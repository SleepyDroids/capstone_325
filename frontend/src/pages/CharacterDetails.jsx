import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router";

export default function CharacterDetails({ data }) {
  const [details, setDetails] = useState({});

  const navigate = useNavigate();

  const { name } = useParams();

  useEffect(() => {
    const character = data.find((c) => c.name === name);
    if (character) {
      setDetails(character);
    }
  }, [details]);

  // const { str, int, wis, cha, con, dex } = details.stats
  // console.log(details.stats)

  return (
    <div className="character-details">
      <h1>{details.name}</h1>
      <ul>
        <li>
          <span className="details-text">Race: </span>
          {details.race}
        </li>
        <li>
          <span className="details-text">Class: </span>
          {details.charClass}
        </li>
        <li>
          <span className="details-text">Background: </span>
          {details.background}
        </li>
      </ul>

      <div className="character-statblock">
        <p className="char-level">
          <span className="details-text">Level:</span> {details.level}
        </p>

<table className="stats-table">
    {/* <caption>{details.name} Stat Table</caption> */}
    <thead>
        <tr>
            <th>Stat</th>
            <th>Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Strength</td>
            <td>1</td>
        </tr>
        <tr>
            <td>Dexterity</td>
            <td>12</td>
        </tr>
        <tr>
            <td>Constitution</td>
            <td>3</td>
        </tr>
        <tr>
            <td>Intelligence</td>
            <td>4</td>
        </tr>
        <tr>
            <td>Wisdom</td>
            <td>5</td>
        </tr>
        <tr>
            <td>Charisma</td>
            <td>1</td>
        </tr>
    </tbody>
</table>

      </div>

      <div className="character-notes">
        <p>{details.notes}</p>
      </div>
    </div>
  );
}
