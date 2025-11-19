export default function NewNotesInfoForm({ notesInfo, inputNotesInfo }) {
  return (
    <div className="form-notes">
      <label htmlFor="notes">
        <h3>Notes / Additional Details</h3>
      </label>

      <textarea
        value={notesInfo.notes}
        onChange={(e) => inputNotesInfo({ notes: e.target.value })}
        className="input-notes"
        id="notes"
        name="notes"
      ></textarea>
    </div>
  );
}
