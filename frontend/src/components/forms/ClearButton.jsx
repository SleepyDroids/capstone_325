export default function ClearButton({ clearInputs }) {
  return (
    <div className="form-submit">
      <button type="button" className="formBtn" onClick={clearInputs}>Reset Fields</button>
    </div>
  );
}
