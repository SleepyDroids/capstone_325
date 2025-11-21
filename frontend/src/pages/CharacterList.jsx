import CharacterCard from "../components/CharacterCard";
import CharacterListFilters from "../components/CharacterListFilters";

import { useState, createContext } from "react";

const FilterContext = createContext();

export default function CharacterList({ data, addToFaves }) {
  // Initialize filters to all meaning, "show all charatcers, do not filter them"
  const [filters, setFilters] = useState({
    species: "all",
    charClass: "all",
    favorites: "all",
  });

  function handleFilterChange(e) {
    // destructuring the event object as name will refer to the select name and value is the option
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  // sets state on change (e.g. if the class selector says "Bard", filter through the characters and show all characters with "Bard" as their class)

  const filteredCharacters = data.filter((c) => {
    // console.log(filters);
    // multiple checks to filter through a character (e.g. if the character class "Bard" matches the value of the option "Bard", show the user all "Bards")
    // (e.g. Bob will appear in specific class "bard" and "favorites" for example, but if I change the species to "tiefling" --> Bob will disappear because the third checked failed)
    // essentially (Bob won't appear if TTF, but will appear if all checks evaluate to true as in ("all" or "matched") === true)
    return (
      (filters.charClass === "all" ||
        c.charClass.toLowerCase().trim() ===
          filters.charClass.toLowerCase().trim()) &&
      (filters.species === "all" ||
        c.race.toLowerCase().trim() === filters.species.toLowerCase().trim()) &&
      (filters.favorites === "all" || c.isFavorite === true)
    );
  });

  // selector needs a string value and a state value so that the onChange in the selector will actually have the page render according to favorite status
  // can chain methods, so an additional variable for filter was unnecessary
  // now the ternary reads as --> if this selected option "favorites" is equal to the state variable, only show the filtered results
  // otherwise revert to showing up all the characters

  return (
    <>
      <FilterContext.Provider value={{ filters, handleFilterChange }}>
        <CharacterListFilters
          // filters={filters}
          // handleFilterChange={handleFilterChange}
          FilterContext={FilterContext}
        />
        <div className="character-container">
          {filteredCharacters.map((c) => (
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

/*
        <div className="character-container">
          {(filters.charClass === "all" || filters.species === "all" || filters.favorites === "all") ? data.map((c) => (
              <CharacterCard data={c} addToFaves={addToFaves} key={c._id} />
            )) : filteredCharacters.map((c) => (
            <CharacterCard data={c} addToFaves={addToFaves} key={c._id} />
          ))}
        </div>
*/
