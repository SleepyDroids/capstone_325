export default function ClearButton({ clearInputs }) {
  return (
    <div className="form-submit">
      <button type="button" className="formBtn formBtn-secondary" onClick={clearInputs}>Reset All Fields</button>
    </div>
  );
}
