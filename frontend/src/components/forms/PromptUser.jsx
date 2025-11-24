export default function PromptUser({
  details,
  setShowConfirm,
  handleDeleteCharacter,
}) {
  return (
    // lets assistive tech know this is modal dialog
    <div className="confirm-overlay" role="dialog" aria-modal="true">
      <div className="prompt-container">
        <p>Are you sure you wish to delete <span className="char-delete">{details.name}</span>?</p>

        <div className="confirm-actions">
        <button className="formBtn" onClick={() => handleDeleteCharacter(details._id)}>
          Yes
        </button>{" "}
        <button className="formBtn formBtn-secondary" onClick={() => setShowConfirm(false)}>Cancel</button>
        </div>

      </div>
    </div>
  );
}
