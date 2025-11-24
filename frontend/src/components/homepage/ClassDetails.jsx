export default function ClassDetails ({ classData, toggleClear }) {
 return (
    <div className="classData-details">
        <h1>{classData.name} Quick Glance</h1>
     <strong>Name:</strong> {classData.name} <br />
     <strong>Hit Die:</strong>  D{classData.hit_die} <br />
     <strong>Subclass:</strong>  {classData.subclasses.map((s) => s.name)}
     <strong>Proficiencies:</strong>  {classData.proficiencies.map((p) => {
        return(<ul key={p.index}>
          <li>{p.name}</li>
        </ul>)
      })}

      <button onClick={toggleClear} alt="Exit Details View">X</button>
    </div>
  )
}