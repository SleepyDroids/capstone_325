export default function PromptUser({ details, setShowConfirm, handleDeleteCharacter }) {
    return (
        <div className="prompt-container">
            <p>Are you sure you wish to delete {details.name}?</p>
            <button onClick={() => handleDeleteCharacter(details._id)}>Yes</button> <button onClick={() => setShowConfirm(false)}>Cancel</button>
        </div>
    )
}