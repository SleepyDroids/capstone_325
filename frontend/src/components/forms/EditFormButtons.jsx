export default function EditFormButtons({ toggleEditing }) {
    return (
        <>
             <button onClick={toggleEditing}>Edit Character</button>
          <button>Delete Character</button>
        </>
    )
}