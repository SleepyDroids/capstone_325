import { useState, useEffect } from "react";
import { BASE_URL } from "../../services/character-api.js";
import { generateStats } from "../utils/utils.js"

// Form components
import NewBaseInfoForm from "../components/forms/NewBaseInfoForm.jsx";
import NewStatsInfoForm from "../components/forms/NewStatsInfoForm.jsx";
import NewNotesInfoForm from "../components/forms/NewNotesInfoForm.jsx";
import SubmitButton from "../components/forms/SubmitButton.jsx";
import ClearButton from "../components/forms/ClearButton.jsx";

export default function CharacterForm({ data, setData }) {
  const initialBase = {
    name: "",
    race: "",
    charClass: "",
    background: "",
    level: 1,
  };

  const initialStats = {
    stats: {
      str: 1,
      dex: 1,
      con: 1,
      int: 1,
      wis: 1,
      cha: 1,
    },
  };

  const initialNotes = {
    notes: "",
  };

  const draftCharacter = {
    ...initialBase,
    ...initialStats,
    ...initialNotes,
  };

  // on first time load of page or if a character was submitted, there needs to be base data inside of localStorage
  // for useState to have default values to draw from otherwise the data returns back undefined and breaks the form
  const characterStorage = JSON.parse(
    // localStorage stores all data as strings, therefore it needs to be parsed back as an object
    // in this instance, the draftCharacter object has to be turned into a string first before it can be reverted back to its original state
    // and therefore be readable data to the state variables
    localStorage.getItem("characterCubby") || JSON.stringify(draftCharacter)
  );



  const [baseInfo, setBaseInfo] = useState(characterStorage);
  const [statsInfo, setStatsInfo] = useState(characterStorage);
  const [notesInfo, setNotesInfo] = useState(characterStorage);
  const [draftValues, setDraftValues] = useState(characterStorage);

  function inputBaseInfo(inputs) {
    setBaseInfo((prev) => {
      return { ...prev, ...inputs };
    });
    setDraftValues((prev) => {
      return { ...prev, ...inputs };
    });
  }

  function inputStatsInfo(inputs) {
    setStatsInfo((prev) => {
      return { ...prev, stats: { ...prev.stats, ...inputs } };
    });
    setDraftValues((prev) => {
      return { ...prev, stats: { ...prev.stats, ...inputs } };
    });
  }

  function inputNotesInfo(input) {
    setNotesInfo((prev) => {
      return { ...prev, ...input };
    });
    setDraftValues((prev) => {
      return { ...prev, ...input };
    });
  }

  useEffect(() => {
    localStorage.setItem("characterCubby", JSON.stringify(draftValues));
      console.log("Checking local storage data:", characterStorage);
  }, [draftValues]);

  async function handleNewSubmit(e) {
    e.preventDefault();
    const character = {
      name: baseInfo.name,
      race: baseInfo.race,
      charClass: baseInfo.charClass,
      background: baseInfo.background,
      level: baseInfo.level,
      stats: {
        str: statsInfo.stats.str,
        dex: statsInfo.stats.dex,
        con: statsInfo.stats.con,
        int: statsInfo.stats.int,
        wis: statsInfo.stats.wis,
        cha: statsInfo.stats.cha,
      },
      notes: notesInfo.notes,
    };

    try {
      const response = await fetch(`${BASE_URL}/characters`, {
        method: "POST",
        body: JSON.stringify(character),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const newCharacter = await response.json();
      console.log(newCharacter);
      setData((prev) => [...prev, newCharacter])
    } catch (e) {
      console.log(e);
    }
    setBaseInfo(initialBase);
    setStatsInfo(initialStats);
    setNotesInfo(initialNotes);
    localStorage.removeItem("characterCubby");
    // after a user submits a character, clear out that character's draft so it doesn't populate the form again when they go to make another character
  }
  /*
  Creating a new character issue with state: I post a character successfully to the backend, but I never tell React to update the data it has. 
  So I need to make a new copy (...) of the data and then add the newCharacter to the end of data array. 
  */

  function clearInputs() {
    setBaseInfo(initialBase);
    setStatsInfo(initialStats);
    setNotesInfo(initialNotes);
    localStorage.removeItem("characterCubby");
  }

  function resetStats() {
    setStatsInfo(initialStats);
    setDraftValues(initialStats);
  }

  function randomizeStats() {
    setStatsInfo((prev) => { return { ...prev, ...generateStats() }});
    setDraftValues((prev) => { return { ...prev, ...statsInfo}})
  }

  return (
    <div className="form-container">
      <form onSubmit={handleNewSubmit}>
        <NewBaseInfoForm baseInfo={baseInfo} inputBaseInfo={inputBaseInfo} />

        <NewStatsInfoForm
          statsInfo={statsInfo}
          inputStatsInfo={inputStatsInfo}
          randomizeStats={randomizeStats}
          resetStats={resetStats}
        />

        <NewNotesInfoForm
          notesInfo={notesInfo}
          inputNotesInfo={inputNotesInfo}
        />

        <SubmitButton />
        <ClearButton clearInputs={clearInputs} />
      </form>
    </div>
  );
}
