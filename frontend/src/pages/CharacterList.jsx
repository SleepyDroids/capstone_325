import CharacterCard from "../components/CharacterCard"

export default function CharacterList({ data }) {

  console.log(data)

  return (
    <div className="character-container">

      {/* {data.map((c) => {
        <CharacterCard data={c} key={c._id} />
      })} */}
      </div>
  )
}