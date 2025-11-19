import avatar6 from "../assets/avatars/6.png"

export default function CharacterCard({ data }) {
  return (
    <div className="character-card">
      <h2>{data.name}</h2>
    <img src={avatar6} alt={`Portrait image of ${data.name}`} />
      <ul>
        <li>Class: {data.charClass}</li>
        <li>Race: {data.race}</li>
        <li>Background: {data.background}</li>
      </ul>
    </div>
  );
}
