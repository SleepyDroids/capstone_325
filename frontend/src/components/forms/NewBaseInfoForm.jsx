export default function NewBaseInfoForm({ inputBaseInfo, baseInfo }) {
  return (
    <>
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
    </>
  );
}
