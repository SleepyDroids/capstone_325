import { classFrequency, speciesFrequency } from "../../utils/utils.js";

export default function UserStats({ data }) {

const topClass = classFrequency(data)
const topSpecies = speciesFrequency(data)

  return (
    <div className="user-stats">
      <span className="profile-text">Current Statistics:</span>
      <ul>
        <li>
          <span className="details-text">Total:</span> {data.length}
        </li>
        <li>
          <span className="details-text">Most Used Class:</span> {topClass.name} ({topClass.count})
        </li>
        <li>
          <span className="details-text">Most Used Species:</span> {topSpecies.name} ({topSpecies.count})
        </li>
      </ul>
    </div>
  );
}
