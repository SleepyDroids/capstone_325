import { useState, useRef } from "react";

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
*/

export default function CharacterForm({ data, newCharacter }) {
// useState is about to get crazy for this form, currently have 12 inputs to account for

  return (
    <div className="form-container">
      <form onSubmit={newCharacter}>
        <div className="form-character">
          <h2>General Info</h2>
          <label htmlFor="name">Character Name:</label>
          <input
            type="text"
            id="name"
            name="character_name"
            className="char-input"
            required
          />
          <br />

          <label htmlFor="race">Race:</label>
          <select className="input-race" name="race" id="race" required>
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
          <select className="input-class" name="charClass" id="charClass" required>
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
            type="text"
            id="background"
            name="character_bg"
            className="char-input"
          />
        </div>

        <div className="form-level">
          <label htmlFor="level">Level (1-20):</label>
          <input className="input-level" type="number" id="level" name="level" min="1" max="20" />
        </div>

        <div className="form-stats">
          <h3>Stats</h3>

          <label htmlFor="stat_stre">Strength:</label>
          <input className="input-stat" type="number" id="stat_stre" name="stat_stre" min="1" />

          <label htmlFor="stat_dex">Dexterity:</label>
          <input className="input-stat" type="number" id="stat_dex" name="stat_dex" min="1" />

          <label htmlFor="stat_con">Constitution:</label>
          <input className="input-stat" type="number" id="stat_con" name="stat_con" min="1" />

          <label htmlFor="stat_int">Intelligence:</label>
          <input className="input-stat" type="number" id="stat_int" name="stat_int" min="1" />

          <label htmlFor="stat_wis">Wisdom:</label>
          <input className="input-stat" type="number" id="stat_wis" name="stat_wis" min="1" />

          <label htmlFor="stat_cha">Charisma:</label>
          <input className="input-stat" type="number" id="stat_cha" name="stat_cha" min="1" />
        </div>

        <div className="form-notes">
          <label htmlFor="notes">
            <h3>Notes / Additional Details</h3>
          </label>

          <textarea className="input-notes" id="notes" name="notes" defaultValue={"Any additional details, campaign notes can go in here."} rows="5" cols="33">
           
          </textarea>
        </div>

        <div className="form-subimt">
          <button className="submitBtn">Create Character</button>
        </div>
      </form>
    </div>
  );
}
