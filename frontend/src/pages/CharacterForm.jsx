import { useState, useRef } from "react";

/*
MVP Needs to be done: 
- Form successfully creates a post request, everything is able to pass through schema
- Additional validation in form at least for the required fields (name, race, class)

Would be nice, stretch goals:
- Stat randomizer if user doesn't feel like in putting stats themselves
- localStorage persistence if user accidentally refreshes the form during input, not all their data is lost ('cos that would legit make me cry if it happened to me) 
    a. localStorage also needs to clear out AFTER user submits a character so the old character info isn't just sitting there in the forms
*/

export default function CharacterForm({ data }) {
  return (
    <div className="form-container">
      <form>
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
          <select name="race" id="race" required>
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
          <select name="charClass" id="charClass" required>
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
          <input type="number" id="level" name="level" min="1" max="20" />
        </div>

        <div className="form-stats">
          <h3>Stats</h3>

          <label htmlFor="stat_stre">Strength:</label>
          <input type="number" id="stat_stre" name="stat_stre" min="1" />

          <label htmlFor="stat_dex">Dexterity:</label>
          <input type="number" id="stat_dex" name="stat_dex" min="1" />

          <label htmlFor="stat_con">Constitution:</label>
          <input type="number" id="stat_con" name="stat_con" min="1" />

          <label htmlFor="stat_int">Intelligence:</label>
          <input type="number" id="stat_int" name="stat_int" min="1" />

          <label htmlFor="stat_wis">Wisdom:</label>
          <input type="number" id="stat_wis" name="stat_wis" min="1" />

          <label htmlFor="stat_cha">Charisma:</label>
          <input type="number" id="stat_cha" name="stat_cha" min="1" />
        </div>

        <div className="form-notes">
          <label htmlFor="notes">
            <h3>Notes / Additional Details</h3>
          </label>

          <textarea id="notes" name="notes" rows="5" cols="33">
            Example: My character is a hot headed half-orc bard, who's crossed
            the wrong people one too many times and now is on the run from
            several loan sharks.
          </textarea>
        </div>

        <div className="form-subimt">
          <button className="submitBtn">Create Character</button>
        </div>
      </form>
    </div>
  );
}
