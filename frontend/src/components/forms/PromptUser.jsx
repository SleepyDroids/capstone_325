export default function PromptUser({
  details,
  setShowConfirm,
  handleDeleteCharacter,
}) {
  return (
    <div id="overlay">
      <div className="prompt-container">
        <p>Are you sure you wish to delete <span className="char-delete">{details.name}</span>?</p>
        <button onClick={() => handleDeleteCharacter(details._id)}>
          Yes
        </button>{" "}
        <button onClick={() => setShowConfirm(false)}>Cancel</button>
      </div>
    </div>
  );
}
