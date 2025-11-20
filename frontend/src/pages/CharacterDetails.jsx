import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { BASE_URL } from "../../services/character-api";

import EditFormOverlay from "../components/forms/EditFormOverlay";
import EditButtons from "../components/forms/EditButtons";

export default function CharacterDetails({ data }) {
  const [details, setDetails] = useState({});
  const [isEditing, setIsEditing] = useState(false);
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
        str: editValues.stats.str,
        dex: editValues.stats.dex,
        con: editValues.stats.con,
        int: editValues.stats.int,
        wis: editValues.stats.wis,
        cha: editValues.stats.cha,
      },
      notes: editValues.notes,
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
      navigate(`/characters/details/${editValues.name}`);
      // slight bug where if anything but the name is edited on the page, still shows old stats
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
      navigate("/characters");
    } catch (e) {
      console.log(e);
    }
  }

  function handleEditCancel() {
    setIsEditing(false)
  }

  return (
    <>
      <div className="character-details">
        <h1>{details.name}</h1>
        <ul>
          <li>
            <span className="details-text">Species: </span>
            {details.race}
          </li>
          <li>
            <span className="details-text">Class: </span>
            {details.charClass}
          </li>
          <li>
            <span className="details-text">Background: </span>
            {details.background}
          </li>
        </ul>

        <div className="character-statblock">
          <p className="char-level">
            <span className="details-text">Level:</span> {details.level}
          </p>

          <table className="stats-table">
            {/* <caption>{details.name} Stat Table</caption> */}
            <thead>
              <tr>
                <th>Stat</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Strength</td>
                <td>
                  {details.stats && (
                    <span className="stat-num">{details.stats.str}</span>
                  )}
                </td>
              </tr>
              <tr>
                <td>Dexterity</td>
                <td>
                  {details.stats && (
                    <span className="stat-num">{details.stats.dex}</span>
                  )}
                </td>
              </tr>
              <tr>
                <td>Constitution</td>
                <td>
                  {details.stats && (
                    <span className="stat-num">{details.stats.con}</span>
                  )}
                </td>
              </tr>
              <tr>
                <td>Intelligence</td>
                <td>
                  {details.stats && (
                    <span className="stat-num">{details.stats.int}</span>
                  )}
                </td>
              </tr>
              <tr>
                <td>Wisdom</td>
                <td>
                  {details.stats && (
                    <span className="stat-num">{details.stats.wis}</span>
                  )}
                </td>
              </tr>
              <tr>
                <td>Charisma</td>
                <td>
                  {details.stats && (
                    <span className="stat-num">{details.stats.cha}</span>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="character-notes">
          <p>{details.notes}</p>
        </div>

        <div className="character-details-btns">
          {details.stats && (
            <EditButtons
              toggleEditing={toggleEditing}
              onDelete={handleDeleteCharacter}
              details={details}
            />
          )}
        </div>
      </div>

      {isEditing && (
        <EditFormOverlay
          data={details}
          editValues={editValues}
          inputEdits={inputEdits}
          onSaveEdits={handleSubmitEdit}
          cancelEdit={handleEditCancel}
        />
      )}
    </>
  );
}
