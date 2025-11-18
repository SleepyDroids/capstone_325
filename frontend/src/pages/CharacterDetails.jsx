import { useEffect, useState } from "react"

import { useNavigate, useParams } from "react-router"

export default function CharacterDetails({ data }) {
const [details, setDetails] = useState({})

  const navigate = useNavigate();

  const { _id, name } = useParams();

  useEffect(() => {
    const character = data.find((c) => c.name === name );
    if (character) { setDetails(character) } 
  }, [details])

  return (
    <div className="character-details">
      <h1>{details.name}</h1>
      </div>
  )
}