import CharacterCard from "../components/CharacterCard";

export default function CharacterList({ data, addToFaves, fav, setFav }) {

  const sortByFavorite = data.filter((c) => {
   c.isFavorite === false ? true : c 

  })

  return (
    <>
      <div className="filters">
        <label htmlFor="favorites">Sort by:</label>
        <select name="favorites" className="drop-down" id="fav-select">
          <option>Favorites Only</option>
          <option>All characters</option>
        </select>
      </div>
      <div className="character-container">
        {data.map((c) => {
          return <CharacterCard data={c} addToFaves={addToFaves} key={c._id} />;
        })}
      </div>
    </>
  );
}
