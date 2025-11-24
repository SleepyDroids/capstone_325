import testPortrait from "../assets/avatars/6.png";

export default function CharacterDisplay({ details }) {
  return (
    <>
      <div className="character-portrait">
        <img src={testPortrait} alt={`Portrait of ${details.name}`} />
      </div>

      <div className="character-details">
        <h1>{details.name}</h1>
        <ul>
          <li>
            <span className="details-text">Species: </span>
            {details.race}
          </li>
          <li>
            <span className="details-text">Class: </span>
            {details.charClass}
          </li>
          {details.background && (
            <li>
              <span className="card-text">Background:</span>{" "}
              {details.background}
            </li>
          )}
        </ul>
      </div>

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
              <td>
                {details.stats && (
                  <span className="stat-num">{details.stats.str}</span>
                )}
              </td>
            </tr>
            <tr>
              <td>Dexterity</td>
              <td>
                {details.stats && (
                  <span className="stat-num">{details.stats.dex}</span>
                )}
              </td>
            </tr>
            <tr>
              <td>Constitution</td>
              <td>
                {details.stats && (
                  <span className="stat-num">{details.stats.con}</span>
                )}
              </td>
            </tr>
            <tr>
              <td>Intelligence</td>
              <td>
                {details.stats && (
                  <span className="stat-num">{details.stats.int}</span>
                )}
              </td>
            </tr>
            <tr>
              <td>Wisdom</td>
              <td>
                {details.stats && (
                  <span className="stat-num">{details.stats.wis}</span>
                )}
              </td>
            </tr>
            <tr>
              <td>Charisma</td>
              <td>
                {details.stats && (
                  <span className="stat-num">{details.stats.cha}</span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="character-notes">
        <p>{details.notes}</p>
      </div>
    </>
  );
}
