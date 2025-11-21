import { useState, useEffect } from "react";
import { BASE_URL } from "../../services/character-api.js";

// Form components
import NewBaseInfoForm from "../components/forms/NewBaseInfoForm.jsx";
import NewStatsInfoForm from "../components/forms/NewStatsInfoForm.jsx";
import NewNotesInfoForm from "../components/forms/NewNotesInfoForm.jsx";
import SubmitButton from "../components/forms/SubmitButton.jsx";

// const characterBaseStorage = JSON.parse(
//   localStorage.getItem("characterCubbyBase") || "{}"
// );

// const characterStatsStorage = JSON.parse(
//   localStorage.getItem("characterCubbyStats") || "{}"
// );

// const characterNotesStorage = JSON.parse(
//   localStorage.getItem("characterCubbyNotes") || "{}"
// );

console.log(localStorage)

export default function CharacterForm() {

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
    ...initialNotes
  }

const characterStorage = JSON.parse(
  localStorage.getItem("characterCubby") || JSON.stringify(draftCharacter)
);

  console.log(characterStorage)

  const [baseInfo, setBaseInfo] = useState(characterStorage);
  const [statsInfo, setStatsInfo] = useState(characterStorage);
  const [notesInfo, setNotesInfo] = useState(characterStorage);
  // const [draftBaseValues, setDraftBaseValues] = useState({});
  // const [draftStatsValues, setDraftStatsValues] = useState({});
  // const [draftNotesValues, setDraftNotesValues] = useState({});
  const [draftValues, setDraftValues] = useState(characterStorage)

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
    // localStorage.setItem(
    //   "characterCubbyStats",
    //   JSON.stringify(draftStatsValues.stats)
    // );
    // localStorage.setItem(
    //   "characterCubbyNotes",
    //   JSON.stringify(draftNotesValues)
    // );
  }, [draftValues]);

  console.log(draftValues)

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
    } catch (e) {
      console.log(e);
    }
    setBaseInfo(initialBase);
    setStatsInfo(initialStats);
    setNotesInfo(initialNotes);
    localStorage.removeItem("characterCubby");
  }

  return (
    <div className="form-container">
      <form onSubmit={handleNewSubmit}>
        <NewBaseInfoForm baseInfo={baseInfo} inputBaseInfo={inputBaseInfo} />

        <NewStatsInfoForm
          statsInfo={statsInfo}
          inputStatsInfo={inputStatsInfo}
        />

        <NewNotesInfoForm
          notesInfo={notesInfo}
          inputNotesInfo={inputNotesInfo}
        />

        <SubmitButton />
      </form>
    </div>
  );
}
