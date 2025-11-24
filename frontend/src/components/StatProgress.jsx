export default function StatProgress({ details }) {
  return (
    <section className="stat-sections">
      <div className="stat-section-one">

        <label className="stat-label">
          <span className="stat-name">Strength:</span>{" "}
          {details.stats && (
            <div className="stat-bar-wrapper">
              <progress
                value={details.stats.str}
                max="50"
                className="stat-progress-str"
              >
                {details.stats.str}
              </progress>
              <span className="stat-progress-number">{details.stats.str}</span>
            </div>
          )}
        </label>

         <label className="stat-label">
          <span className="stat-name">Dexterity:</span>{" "}
          {details.stats && (
       <div className="stat-bar-wrapper">
              <progress
                value={details.stats.dex}
                max="50"
                className="stat-progress-dex"
              >
                {details.stats.dex}
              </progress>
              <span className="stat-progress-number">{details.stats.dex}</span>
            </div>
          )}
        </label>

          <label className="stat-label">
         <span className="stat-name">Constitution:</span>{" "}
          {details.stats && (
           <div className="stat-bar-wrapper">
              <progress
                value={details.stats.con}
                max="50"
                className="stat-progress-con"
              >
                {details.stats.con}
              </progress>
              <span className="stat-progress-number">{details.stats.con}</span>
            </div>
          )}
        </label>
      </div>

      <div className="stat-section-two">
        <label className="stat-label">
          <span className="stat-name">Intelligence:</span>{" "}
          {details.stats && (
          <div className="stat-bar-wrapper">
              <progress
                value={details.stats.int}
                max="50"
                className="stat-progress-int"
              >
                {details.stats.int}
              </progress>
              <span className="stat-progress-number">{details.stats.int}</span>
          </div>
          )}
        </label>

         <label className="stat-label">
          <span className="stat-name">Wisdom:</span>{" "}
          {details.stats && (
       <div className="stat-bar-wrapper">
              <progress
                value={details.stats.wis}
                max="50"
                className="stat-progress-wis"
              >
                {details.stats.wis}
              </progress>
              <span className="stat-progress-number">{details.stats.wis}</span>
            </div>
          )}
        </label>

         <label className="stat-label">
          <span className="stat-name">Charisma:</span>{" "}
          {details.stats && (
         <div className="stat-bar-wrapper">
              <progress
                value={details.stats.cha}
                max="50"
                className="stat-progress-cha"
              >
                {details.stats.cha}
              </progress>
              <span className="stat-progress-number">{details.stats.cha}</span>
            </div>
          )}
        </label>
      </div>
    </section>
  );
}
