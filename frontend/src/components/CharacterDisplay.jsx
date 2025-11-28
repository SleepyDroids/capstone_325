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
                <strong>Background:</strong> {details.background}
              </li>
            )}
          </ul>

          <div className="character-level-box">
            <span className="details-level-label">Level:</span>{" "}
            <span className="character-level-value">{details.level}</span>
          </div>
        </div>

        <div className="character-portrait">
          <img src={testPortrait} alt={`Portrait of ${details.name}`} />
        </div>
      </div>

      <section className="character-stat-bars">
        <h2>Current Stats</h2>
        <StatProgress details={details} />
      </section>

      <section className="character-notes">
        <h2>Additional Lore</h2>
        <p>{details.notes}</p>
      </section>
    </section>
  );
}
