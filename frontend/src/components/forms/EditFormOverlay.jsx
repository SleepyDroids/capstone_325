export default function EditFormOverlay({ data, editValues, inputEdits, onSaveEdits, cancelEdit }) {
  return (
    <div id="edit-form">
      <form>
        <div className="form-character">
          <label htmlFor="name">Character Name:</label>
          <input
            value={editValues.name}
            onChange={(e) => inputEdits({ name: e.target.value })}
            type="text"
            id="name"
            name="character_name"
            className="char-input"
            autoFocus
            required
          />

          <p>
            <span className="details-text">Species:</span> {data.race}
          </p>
          <p>
            <span className="details-text">Class:</span> {data.charClass}
          </p>

          <label htmlFor="background">Background:</label>
          <input
            value={editValues.background}
            onChange={(e) => inputEdits({ background: e.target.value })}
            type="text"
            id="background"
            name="character_bg"
            className="char-input"
          />
        </div>
        <div className="form-level">
          <label htmlFor="level">Level (1-20):</label>
          <input
            value={editValues.level}
            onChange={(e) => inputEdits({ level: Number(e.target.value) })}
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
            value={editValues.stats.str}
            onChange={(e) => inputEdits({ stats: { str: e.target.value } })}
            className="input-stat"
            type="number"
            id="stat_stre"
            name="stat_str"
            min="1"
          />

          <label htmlFor="stat_dex">Dexterity:</label>
          <input
            value={editValues.stats.dex}
           onChange={(e) => inputEdits({ stats: { dex: e.target.value } })}
            className="input-stat"
            type="number"
            id="stat_dex"
            name="stat_dex"
            min="1"
          />

          <label htmlFor="stat_con">Constitution:</label>
          <input
            value={editValues.stats.con}
         onChange={(e) => inputEdits({ stats: { con: e.target.value } })}
            className="input-stat"
            type="number"
            id="stat_con"
            name="stat_con"
            min="1"
          />

          <label htmlFor="stat_int">Intelligence:</label>
          <input
            value={editValues.stats.int}
        onChange={(e) => inputEdits({ stats: { int: e.target.value } })}
            className="input-stat"
            type="number"
            id="stat_int"
            name="stat_int"
            min="1"
          />

          <label htmlFor="stat_wis">Wisdom:</label>
          <input
            value={editValues.stats.wis}
      onChange={(e) => inputEdits({ stats: { wis: e.target.value } })}
            className="input-stat"
            type="number"
            id="stat_wis"
            name="stat_wis"
            min="1"
          />

          <label htmlFor="stat_cha">Charisma:</label>
          <input
            value={editValues.stats.cha}
           onChange={(e) => inputEdits({ stats: { cha: e.target.value } })}
            className="input-stat"
            type="number"
            id="stat_cha"
            name="stat_cha"
            min="1"
          />
        </div>
        <div className="form-notes">
          <label htmlFor="notes">
            <h3>Notes / Additional Details</h3>
          </label>

          <textarea
            value={editValues.notes}
            onChange={(e) => inputEdits({ notes: e.target.value })}
            className="input-notes"
            id="notes"
            name="notes"
          ></textarea>
        </div>
        <button onClick={onSaveEdits}>Save</button> <button type="button" onClick={cancelEdit}>Cancel</button>
      </form>
    </div>
  );
}
