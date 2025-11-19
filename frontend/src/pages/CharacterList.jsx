import CharacterCard from "../components/CharacterCard";



export default function CharacterList({ data }) {
  console.log(data);

  async function toggleFavorite() {
  console.log('add to faves')
}

  return (
    <div className="character-container">
      {data.map((c) => {
        return <CharacterCard data={c} addToFaves={toggleFavorite} key={c._id} />;
      })}
    </div>
  );
}
