import { useState, useReducer, useRef } from "react";
import { useFormStatus } from "react-dom";
import { useMultipageForm } from "../useMultipageForm";

import { BASE_URL } from "../../services/character-api.js";

/*
MVP Needs to be done: 
- Form successfully creates a post request, everything is able to pass through schema
- Additional validation in form at least for the required fields (name, race, class)

Would be nice, stretch goals:
- Stat randomizer if user doesn't feel like in putting stats themselves
- localStorage persistence if user accidentally refreshes the form during input, not all their data is lost ('cos that would legit make me cry if it happened to me) 
    a. localStorage also needs to clear out AFTER user submits a character so the old character info isn't just sitting there in the forms
    b. Also with localStorage it saves all data as STRINGS but my schema only accepts numbers so when it reverts back to an object, 
       I need to make sure my number values are still there
- Would also like to implement an "isActive" toggle on a character but will ONLY consider that once baseline form POST request works
- Pop up message or page redirect when a submission is successful???
    a. useFormStatus hook to display the data that has been sent to the user back to the server?
*/

export default function CharacterForm({ data, newCharacter }) {
  // useState for paginated form / alternatively 3 different useStates for different pieces of the data
  // onChange checks the values

  // const { pages, page } = useMultipageForm([
  //   <div>Page 1</div>,
  //   <div>Page 2</div>,
  //   <div>Page 3</div>,
  // ]);

  const initialBase = {
    name: "",
    race: "",
    charClass: "",
    background: "",
    level: 1,
  };

  const initialStats = {
    stats: {
      str: 1,
      dex: 1,
      con: 1,
      int: 1,
      wis: 1,
      cha: 1,
    },
  };

  const initialNotes = {
    notes: "",
  };

  const [baseInfo, setBaseInfo] = useState(initialBase);
  const [statsInfo, setStatsInfo] = useState(initialStats);
  const [notesInfo, setNotesInfo] = useState(initialNotes);

  function inputBaseInfo(inputs) {
    setBaseInfo((prev) => {
      return { ...prev, ...inputs };
    });
  }

  function inputStatsInfo(inputs) {
    console.log(inputs);
    setStatsInfo((prev) => {
      return { ...prev, stats: { ...prev.stats, ...inputs } };
    });
  }

  function inputNotesInfo(input) {
    setNotesInfo((prev) => {
      return { ...prev, ...input };
    });
  }
  async function handleNewSubmit(e) {
    e.preventDefault();
    const character = {
      name: baseInfo.name,
      race: baseInfo.race,
      charClass: baseInfo.charClass,
      background: baseInfo.background,
      level: baseInfo.level,
      stats: {
        str: statsInfo.stats.str,
        dex: statsInfo.stats.dex,
        con: statsInfo.stats.con,
        int: statsInfo.stats.int,
        wis: statsInfo.stats.wis,
        cha: statsInfo.stats.cha,
      },
      notes: notesInfo.notes,
    };

    try {
      const response = await fetch(`${BASE_URL}/characters`, {
        method: "POST",
        body: JSON.stringify(character),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const newCharacter = await response.json();
      // console.log(newCharacter);
    } catch (e) {
      console.log(e);
    }
    setBaseInfo(initialBase);
    setStatsInfo(initialStats);
    setNotesInfo(initialNotes);
  }

  return (
    <div className="form-container">
      {/* {page} */}
      <form onSubmit={handleNewSubmit}>
        <div className="form-character">
          <h2>General Info</h2>
          <label htmlFor="name">Character Name:</label>
          <input
            value={baseInfo.name}
            onChange={(e) => inputBaseInfo({ name: e.target.value })}
            type="text"
            id="name"
            name="character_name"
            className="char-input"
            autoFocus
            required
          />
          <br />

          <label htmlFor="race">Race:</label>
          <select
            value={baseInfo.race}
            onChange={(e) => inputBaseInfo({ race: e.target.value })}
            className="input-race"
            name="race"
            id="race"
            required
          >
            <option value="Human">Human</option>
            <option value="Dragonborn">Dragonborn</option>
            <option value="Dwarf">Dwarf</option>
            <option value="Elf">Elf</option>
            <option value="Half-Elf">Half-Elf</option>
            <option value="Half-Orc">Half-Orc</option>
            <option value="Halfling">Halfling</option>
            <option value="Tiefling">Tiefling</option>
            <option value="Gnome">Gnome</option>
          </select>

          <label htmlFor="charClass">Class:</label>
          <select
            value={baseInfo.charClass}
            onChange={(e) => inputBaseInfo({ charClass: e.target.value })}
            className="input-class"
            name="charClass"
            id="charClass"
            required
          >
            <option value="Barbarian">Barbarian</option>
            <option value="Bard">Bard</option>
            <option value="Cleric">Cleric</option>
            <option value="Druid">Druid</option>
            <option value="Monk">Monk</option>
            <option value="Fighter">Fighter</option>
            <option value="Paladin">Paladin</option>
            <option value="Ranger">Ranger</option>
            <option value="Rogue">Rogue</option>
            <option value="Sorcerer">Sorcerer</option>
            <option value="Warlock">Warlock</option>
            <option value="Wizard">Wizard</option>
          </select>

          <br />
          <label htmlFor="background">Background:</label>
          <input
            value={baseInfo.background}
            onChange={(e) => inputBaseInfo({ background: e.target.value })}
            type="text"
            id="background"
            name="character_bg"
            className="char-input"
          />
        </div>

        <div className="form-level">
          <label htmlFor="level">Level (1-20):</label>
          <input
            value={baseInfo.level}
            onChange={(e) => inputBaseInfo({ level: Number(e.target.value) })}
            className="input-level"
            type="number"
            id="level"
            name="level"
            min="1"
            max="20"
          />
        </div>

        <div className="form-stats">
          <h3>Stats</h3>

          <label htmlFor="stat_stre">Strength:</label>
          <input
            value={statsInfo.stats.str}
            onChange={(e) => inputStatsInfo({ str: e.target.value })}
            className="input-stat"
            type="number"
            id="stat_stre"
            name="stat_str"
            min="1"
          />

          <label htmlFor="stat_dex">Dexterity:</label>
          <input
            value={statsInfo.stats.dex}
            onChange={(e) => inputStatsInfo({ dex: e.target.value })}
            className="input-stat"
            type="number"
            id="stat_dex"
            name="stat_dex"
            min="1"
          />

          <label htmlFor="stat_con">Constitution:</label>
          <input
            value={statsInfo.stats.con}
            onChange={(e) => inputStatsInfo({ con: e.target.value })}
            className="input-stat"
            type="number"
            id="stat_con"
            name="stat_con"
            min="1"
          />

          <label htmlFor="stat_int">Intelligence:</label>
          <input
            value={statsInfo.stats.int}
            onChange={(e) => inputStatsInfo({ int: e.target.value })}
            className="input-stat"
            type="number"
            id="stat_int"
            name="stat_int"
            min="1"
          />

          <label htmlFor="stat_wis">Wisdom:</label>
          <input
            value={statsInfo.stats.wis}
            onChange={(e) => inputStatsInfo({ wis: e.target.value })}
            className="input-stat"
            type="number"
            id="stat_wis"
            name="stat_wis"
            min="1"
          />

          <label htmlFor="stat_cha">Charisma:</label>
          <input
            value={statsInfo.stats.cha}
            onChange={(e) => inputStatsInfo({ cha: e.target.value })}
            className="input-stat"
            type="number"
            id="stat_cha"
            name="stat_cha"
            min="1"
          />
          <button type="button" className="randomBtn">
            Randomize Stats?
          </button>
        </div>

        <div className="form-notes">
          <label htmlFor="notes">
            <h3>Notes / Additional Details</h3>
          </label>

          <textarea
            value={notesInfo.notes}
            onChange={(e) => inputNotesInfo({ notes: e.target.value })}
            className="input-notes"
            id="notes"
            name="notes"
            // defaultValue={
            //   "Any additional details, campaign notes can go in here."
            // }
            rows="5"
            cols="33"
          ></textarea>
        </div>

        <div className="form-subimt">
          <button className="clearBtn" disabled>
            Clear all fields
          </button>
          <button className="submitBtn">Create Character</button>
        </div>
      </form>
    </div>
  );
}

// function Submit() {
//   const status = useFormStatus();
//   console.log(status.data);
//   return (

//   );
// }
