export default function CharacterListFilters({
  filters, handleFilterChange
}) {

  return (
    <div className="filters">
      <label htmlFor="fav-select">Favorites Sort by:</label>
      <select
        value={filters.favorites}
        onChange={handleFilterChange}
        name="favorites"
        className="drop-down"
        id="fav-select"
      >
        <option value="all">All characters</option>
        <option value="favorites">Favorites Only</option>
      </select>

      <label htmlFor="class-select">Class Sort By: </label>
      <select
        value={filters.charClass}
        onChange={handleFilterChange}
        name="charClass"
        className="drop-down"
        id="class-select"
      >
        <option value="all">All classes</option>
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

      <label htmlFor="species-select">Species Sort By: </label>
      <select
        value={filters.species}
        onChange={handleFilterChange}
        name="species"
        className="drop-down"
        id="species-select"
      >
        <option value="all">All species</option>
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
    </div>
  );
}
