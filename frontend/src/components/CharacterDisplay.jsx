import testPortrait from "../assets/avatars/6.png";
import StatProgress from "./StatProgress";

export default function CharacterDisplay({ details }) {
  return (
    <section className="character-details-page">

<div className="character-header">
      <div className="character-header-text">
        <h1 className="character-header-name">{details.name}</h1>


        <ul className="character-meta-list">
          <li className="character-details-label">
            <strong>Species: </strong>
            {details.race}
          </li>
          <li className="character-details-label">
            <strong>Class: </strong>
            {details.charClass}
          </li>
          {details.background && (
            <li className="character-details-label">
              <strong>Background:</strong>{" "}
              {details.background}
            </li>
          )}
        </ul>
      </div>

      </div>

            <div className="character-portrait">
        <img src={testPortrait} alt={`Portrait of ${details.name}`} />
      </div>

      <div className="character-level-box">
 
          <span className="details-level-label">Level:</span> <span className="character-level-value">{details.level}</span>
 
      </div>

      <section className="character-stat-bars">
        <h2>Current Stats</h2>
        {/* <table className="stats-table">
          <caption>{details.name} Stat Table</caption>
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
        </table> */}

          <StatProgress details={details} />
      </section>

      <section className="character-notes">
        <h2>Additional Lore</h2>
        <p>{details.notes}</p>
      </section>
</section>
  );
}
