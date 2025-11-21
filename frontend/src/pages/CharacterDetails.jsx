import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { BASE_URL } from "../../services/character-api";

import EditFormOverlay from "../components/forms/EditFormOverlay";
// import EditButtons from "../components/forms/EditButtons";
import PromptUser from "../components/forms/PromptUser";
import CharacterDisplay from "../components/CharacterDisplay";

export default function CharacterDetails({ data, setData }) {
  const [details, setDetails] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [editValues, setEditValues] = useState({});

  const navigate = useNavigate();
  const { name } = useParams();

  useEffect(() => {
    const character = data.find((c) => c.name === name);
    if (character) {
      setDetails(character);
    }
  }, [details]);

  // Edit button handler
  function toggleEditing() {
    setEditValues({
      name: details.name,
      background: details.background,
      level: details.level,
      stats: {
        str: details.stats.str,
        dex: details.stats.dex,
        con: details.stats.con,
        int: details.stats.int,
        wis: details.stats.wis,
        cha: details.stats.cha,
      },
      notes: details.notes,
    });
    setIsEditing((prev) => !prev);
    // console.log(editValues);
  }

  async function handleSubmitEdit(e) {
    e.preventDefault();
    const editedCharacter = {
      name: editValues.name,
      race: details.race,
      charClass: details.charClass,
      background: editValues.background,
      level: editValues.level,
      stats: {
        str: Number(editValues.stats.str),
        dex: Number(editValues.stats.dex),
        con: Number(editValues.stats.con),
        int: Number(editValues.stats.int),
        wis: Number(editValues.stats.wis),
        cha: Number(editValues.stats.cha),
      },
      notes: editValues.notes,
      _id: details._id,
    };
    try {
      const response = await fetch(`${BASE_URL}/characters/${details._id}`, {
        method: "PUT",
        body: JSON.stringify(editedCharacter),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const edits = await response.json();
      console.log(edits);
      setIsEditing((prev) => !prev);
      const newData = data.map((c) =>
        // Checks if characer ID matches the changed ID
        // they we want to give it the changed data (editedCharacter)
        // give back same data but as a copied object to React reacts
        c._id === details._id
          ? editedCharacter
          : { ...c, stats: { ...c.stats } }
      );
      setData(newData);
      navigate(`/characters/details/${editValues.name}`);
    } catch (e) {
      console.log(e);
    }
  }

  function inputEdits(inputs) {
    setEditValues((prev) => {
      return { ...prev, ...inputs, stats: { ...prev.stats, ...inputs.stats } };
    });
  }

  async function handleDeleteCharacter(id) {
    console.log("character has been deleted");
    try {
      const character = await fetch(`${BASE_URL}/characters/${details._id}`, {
        method: "DELETE",
      });
      const deleted = data.filter((c) => c._id !== id);
      console.log(deleted);
      // setShowConfirm(false);
      navigate("/characters");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <CharacterDisplay details={details} />

      <div className="character-details-btns">
        {details.stats && (
          <>
            <button onClick={toggleEditing}>Edit Character</button>
            <button onClick={() => setShowConfirm(true)}>
              Delete Character
            </button>
          </>
        )}
      </div>

      {isEditing && (
        <EditFormOverlay
          data={details}
          editValues={editValues}
          inputEdits={inputEdits}
          onSaveEdits={handleSubmitEdit}
          setIsEditing={setIsEditing}
        />
      )}

      {showConfirm && (
        <PromptUser
          details={details}
          setShowConfirm={setShowConfirm}
          handleDeleteCharacter={handleDeleteCharacter}
        />
      )}
    </>
  );
}
