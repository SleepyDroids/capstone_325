export default function UserStats({ data }) {

  return (
    <div className="user-stats">
      <span className="profile-text">Current Statistics:</span>
      <ul>
        <li>
          <span className="details-text">Total:</span> {data.length}
        </li>
        <li>
          <span className="details-text">Top Class:</span> Paladin
        </li>
        <li>
          <span className="details-text">Top Species:</span> Gnome
        </li>
        <li>
          <span className="details-text">Highest Level:</span> 20
        </li>
      </ul>
    </div>
  );
}
