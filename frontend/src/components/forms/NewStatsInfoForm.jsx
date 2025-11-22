export default function NewStatsInfoForm({ statsInfo, inputStatsInfo, initialStats, setStatsInfo }) {
  function resetStats() {
    setStatsInfo(initialStats);
  }

  return (
    <div className="form-stats">
      <h3>Stats</h3>

      <label htmlFor="stat_stre">Strength:</label>
      <input
        value={statsInfo.stats.str}
        onChange={(e) => inputStatsInfo({ str: Number(e.target.value) })}
        className="input-stat"
        type="number"
        id="stat_stre"
        name="stat_str"
        min="1"
      />

      <label htmlFor="stat_dex">Dexterity:</label>
      <input
        value={statsInfo.stats.dex}
        onChange={(e) => inputStatsInfo({ dex: Number(e.target.value) })}
        className="input-stat"
        type="number"
        id="stat_dex"
        name="stat_dex"
        min="1"
      />

      <label htmlFor="stat_con">Constitution:</label>
      <input
        value={statsInfo.stats.con}
        onChange={(e) => inputStatsInfo({ con: Number(e.target.value) })}
        className="input-stat"
        type="number"
        id="stat_con"
        name="stat_con"
        min="1"
      />

      <label htmlFor="stat_int">Intelligence:</label>
      <input
        value={statsInfo.stats.int}
        onChange={(e) => inputStatsInfo({ int: Number(e.target.value) })}
        className="input-stat"
        type="number"
        id="stat_int"
        name="stat_int"
        min="1"
      />

      <label htmlFor="stat_wis">Wisdom:</label>
      <input
        value={statsInfo.stats.wis}
        onChange={(e) => inputStatsInfo({ wis: Number(e.target.value) })}
        className="input-stat"
        type="number"
        id="stat_wis"
        name="stat_wis"
        min="1"
      />

      <label htmlFor="stat_cha">Charisma:</label>
      <input
        value={statsInfo.stats.cha}
        onChange={(e) => inputStatsInfo({ cha: Number(e.target.value) })}
        className="input-stat"
        type="number"
        id="stat_cha"
        name="stat_cha"
        min="1"
      />
      <button type="button" className="formBtn">
        Randomize Stats
      </button>

        <button type="button" className="formBtn" onClick={resetStats}>
        Reset Stats
      </button>
    </div>
  );
}
