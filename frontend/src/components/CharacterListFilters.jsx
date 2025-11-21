export default function CharacterListFilters({ fav, handleSelectFavChange, data }) {
    return(
      <div className="filters">
              <label htmlFor="fav-select">Sort by:</label>
              <select
                value={fav}
                onChange={handleSelectFavChange}
                name="favorites"
                className="drop-down"
                id="fav-select"
              >
                <option value="all">All characters</option>
                <option value="favorites">Favorites Only</option>
              </select>
            </div>
    )
}