import CharacterCard from "../components/CharacterCard";



export default function CharacterList({ data, addToFaves }) {
  console.log(data);

  

  return (
    <div className="character-container">
      {data.map((c) => {
        return <CharacterCard data={c} addToFaves={addToFaves} key={c._id} />;
      })}
    </div>
  );
}
