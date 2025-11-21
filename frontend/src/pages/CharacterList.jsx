import CharacterCard from "../components/CharacterCard";
import CharacterListFilters from "../components/CharacterListFilters";

import { useState, createContext } from "react";

const FilterContext = createContext();

export default function CharacterList({ data, addToFaves, fav, setFav }) {
  // dealing with multiple filter options, so using useState to manage both species and class
  // since they should be similar and instead of making individual useStates like I did with favorites
  // will figure out how to convert it if I can get it to work with species and class
  const [filters, setFilters] = useState({
    species: "",
    charClass: "",
    level: ""
  });

  function handleFilterChange(e) {
    // destructuring the event object as name will refer to the select name and value is the option
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const filteredCharacters = data.filter((c) => {
    return (
      (filters.charClass === "" ||
        c.charClass.toLowerCase() === filters.charClass.toLowerCase()) &&
      (filters.species === "" ||
        c.race.toLowerCase() === filters.species.toLowerCase())
    );
  });

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
      <FilterContext.Provider value={{ filters, handleFilterChange }}>
        <CharacterListFilters
          fav={fav}
          handleSelectFavChange={handleSelectFavChange}
          // filters={filters}
          // handleFilterChange={handleFilterChange}
          FilterContext={FilterContext}
        />
        <div className="character-container">
          {filters.charClass || filters.species === "all" ? data.map((c) => (
              <CharacterCard data={c} addToFaves={addToFaves} key={c._id} />
            )) : filteredCharacters.map((c) => (
            <CharacterCard data={c} addToFaves={addToFaves} key={c._id} />
          ))}
        </div>
      </FilterContext.Provider>
    </>
  );
}

/*
   {fav === "favorites"
          ? data
              .filter((c) => c.isFavorite === true)
              .map((c) => (
                <CharacterCard data={c} addToFaves={addToFaves} key={c._id} />
              ))
          : data.map((c) => (
              <CharacterCard data={c} addToFaves={addToFaves} key={c._id} />
            ))}


                  {filteredCharacters.map((c) => (
            <CharacterCard data={c} addToFaves={addToFaves} key={c._id} />
          ))}
*/
