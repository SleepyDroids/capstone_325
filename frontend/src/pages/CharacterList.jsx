import CharacterCard from "../components/CharacterCard";
import CharacterListFilters from "../components/CharacterListFilters";

export default function CharacterList({ data, addToFaves, fav, setFav }) {

  function handleSelectFavChange(e) {
    if (e.target.value === "all") {
      setFav("all");
    } else {
      setFav("favorites");
    }
  }

  // selector needs a string value and a state value so that the onChange in the selector will actually have the page render according to favorite status
  // can chain methods, so an additional variable for filter was unnecessary
  // now the ternary reads as --> if this selected option "favorites" is equal to the state variable, only show the filtered results
  // otherwise revert to showing up all the characters

  return (
    <>
      <CharacterListFilters fav={fav} data={data} handleSelectFavChange={handleSelectFavChange} />
      <div className="character-container">
        {fav === "favorites"
          ? data
              .filter((c) => c.isFavorite === true)
              .map((c) => (
                <CharacterCard
                  data={c}
                  addToFaves={addToFaves}
                  key={c._id}
                />
              ))
          : data.map((c) => (
              <CharacterCard
                data={c}
                addToFaves={addToFaves}
                key={c._id}
              />
            ))}
      </div>
    </>
  );
}
