export default function EditButtons({ toggleEditing, onDelete, details }) {
    return (
        <>
             <button onClick={toggleEditing}>Edit Character</button>
          <button onClick={() => onDelete(details._id)}>Delete Character</button>
        </>
    )
}