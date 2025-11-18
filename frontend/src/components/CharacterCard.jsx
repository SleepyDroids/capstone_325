export default function CharacterCard({ data }) {
  return (
    <div className="character-card">
      <h2>{data.name}</h2>
      <ul>
        <li>Class: {data.charClass}</li>
        <li>Race: {data.race}</li>
      </ul>
    </div>
  );
}
