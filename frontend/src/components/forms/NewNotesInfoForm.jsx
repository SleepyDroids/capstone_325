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
        // defaultValue={
        //   "Any additional details, campaign notes can go in here."
        // }
        rows="5"
        cols="33"
      ></textarea>
    </div>
  );
}
