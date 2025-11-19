import { useState } from "react";
// import { useFormStatus } from "react-dom";
// import { useMultipageForm } from "../useMultipageForm";

import { BASE_URL } from "../../services/character-api.js";

// Form components
import NewBaseInfoForm from "../components/forms/NewBaseInfoForm.jsx";
import NewStatsInfoForm from "../components/forms/NewStatsInfoForm.jsx";
import NewNotesInfoForm from "../components/forms/NewNotesInfoForm.jsx";
import SubmitButton from "../components/forms/SubmitButton.jsx";

/*
MVP Needs to be done: 
- Form successfully creates a post request, everything is able to pass through schema
- Additional validation in form at least for the required fields (name, race, class)

Would be nice, stretch goals:
- Stat randomizer if user doesn't feel like in putting stats themselves
- localStorage persistence if user accidentally refreshes the form during input, not all their data is lost ('cos that would legit make me cry if it happened to me) 
    a. localStorage also needs to clear out AFTER user submits a character so the old character info isn't just sitting there in the forms
    b. Also with localStorage it saves all data as STRINGS but my schema only accepts numbers so when it reverts back to an object, 
       I need to make sure my number values are still there
- Would also like to implement an "isActive" toggle on a character but will ONLY consider that once baseline form POST request works
- Pop up message or page redirect when a submission is successful???
    a. useFormStatus hook to display the data that has been sent to the user back to the server?
*/

export default function CharacterForm() {
  // useState for paginated form / alternatively 3 different useStates for different pieces of the data
  // onChange checks the values

  // const { pages, page } = useMultipageForm([
  //   <div>Page 1</div>,
  //   <div>Page 2</div>,
  //   <div>Page 3</div>,
  // ]);

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

  const [baseInfo, setBaseInfo] = useState(initialBase);
  const [statsInfo, setStatsInfo] = useState(initialStats);
  const [notesInfo, setNotesInfo] = useState(initialNotes);

  function inputBaseInfo(inputs) {
    setBaseInfo((prev) => {
      return { ...prev, ...inputs };
    });
  }

  function inputStatsInfo(inputs) {
    setStatsInfo((prev) => {
      return { ...prev, stats: { ...prev.stats, ...inputs } };
    });
  }

  function inputNotesInfo(input) {
    setNotesInfo((prev) => {
      return { ...prev, ...input };
    });
  }

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