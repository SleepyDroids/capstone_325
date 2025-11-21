import CharacterCard from "../components/CharacterCard";
import CharacterListFilters from "../components/CharacterListFilters";

import { useState } from "react";

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
    // if all three checks evaluate to true, filter that character from data (characters state variable)
    // then below in the UI, map through that data and display the character with their respective card information
    return (
      (filters.charClass === "all" ||
        c.charClass.toLowerCase().trim() ===
          filters.charClass.toLowerCase().trim()) &&
      (filters.species === "all" ||
        c.race.toLowerCase().trim() === filters.species.toLowerCase().trim()) &&
      (filters.favorites === "all" || c.isFavorite === true)
    );
  });
  // console.log(filteredCharacters.length);
  // selector needs a string value and a state value so that the onChange in the selector will actually have the page render according to favorite status
  // can chain methods, so an additional variable for filter was unnecessary
  // now the ternary reads as --> if this selected option "favorites" is equal to the state variable, only show the filtered results
  // otherwise revert to showing up all the characters

  return (
    <>
      <CharacterListFilters
        filters={filters}
        handleFilterChange={handleFilterChange}
      />
      <div className="character-container">
        {/* filteredCharacters is an array so if no character matches the filtered critera,
        then the array is empty[] */}
        {filteredCharacters.length === 0 ? (
          <p>No character currently matches that criteria.</p>
        ) : (
          filteredCharacters.map((c) => (
            <CharacterCard data={c} addToFaves={addToFaves} key={c._id} />
          ))
        )}
      </div>
    </>
  );
}

/*
don't ask what i was thinking here, absolutely wild
i forgor filteredShips is an ACTUAL array
       {filteredCharacters.map((c) => {
        if (c.charClass !== filters.charClass || c.race !== filters.species) {
          return <p key={c._id}>No character currently matches that criteria.</p>
        }
         return <CharacterCard data={c} addToFaves={addToFaves} key={c._id} />
       })}

       {filteredCharacters.map((c) => (
            <CharacterCard data={c} addToFaves={addToFaves} key={c._id} />
          ))}

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

For future reference about the useContext: 
- With useContext, I was creating a new context that was stored the state variable for filtered and the handler for the selectors.
- Since I am only sending the props one layer/component down, the Context Provider was unnecessary 
- But good to know I can put multiple values into a context provider and then destructure it in the component that is using that context  
*/
