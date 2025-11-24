import { Tooltip } from "react-tooltip";

export default function ClassDetails({ classData, toggleClear }) {
  return (
    <div className="classData-details">
      <div
        data-tooltip-id="close-details-tooltip"
        data-tooltip-content="Click here to close details view."
        className="classData-close-wrapper"
      >
        <button
          aria-label="Close class details."
          className="classData-close"
          onClick={toggleClear}
          alt="Exit Details View"
        >
          X
        </button>
      </div>
      <Tooltip id="close-details-tooltip" />
      <h3>{classData.name} Quick Glance</h3>
      <strong>Name:</strong> {classData.name} <br />
      <strong>Hit Die:</strong> D{classData.hit_die} <br />
      <strong>Subclass:</strong> {classData.subclasses.map((s) => s.name)}{" "}
      <br />
      <strong>Proficiencies:</strong>{" "}
      {classData.proficiencies.map((p) => {
        return (
          <ul key={p.index}>
            <li>{p.name}</li>
          </ul>
        );
      })}
    </div>
  );
}
