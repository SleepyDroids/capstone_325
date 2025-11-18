import CharacterCard from "./CharacterCard"

export default function CharacterList({ data }) {

  return (
    <div className="character-container">
      <CharacterCard data={data} />
      </div>
  )
}