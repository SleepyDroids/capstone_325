import { useState, useEffect } from "react";

// Importing pages / components
import HomepageTitle from "./homepage/HomepageTitle";
import HomepageRecent from "./homepage/HomepageRecent";
import HomepageSpecies from "./homepage/HomepageSpecies";
import HomepageClasses from "./homepage/HomepageClasses";
import ClassDetails from "./homepage/ClassDetails";

const BASE_API_URL = "https://www.dnd5eapi.co/api/2014/classes";

export default function Homepage({ data }) {
  const [classData, setClassData] = useState(null);
  const [speciesData, setSpeciesData] = useState(null);

  async function getClassData(charClass) {
    try {
      const response = await fetch(`${BASE_API_URL}/${charClass}`);
      const result = await response.json();
      setClassData(await result);
      return classData;
    } catch (e) {
      console.log(e);
    }
  }

  async function handleClassDataCall(charClass) {
    console.log("clicked!!");
    getClassData(charClass);
    return classData;
  }

  function toggleClear() {
    console.log("class data reset");
    setClassData(null)
  }

  console.log(classData);

  // can make API calls using an event handler so can use onClick to fire off the call instead of calling all the classes all at once
  // especially since I don't have a need to do so
  // so something like e.target.name or something for the and then use template literal to slap in the name of the class, then make that request THEN retrieve the data I need then and there
  // so one API call and only on user interaction
  // no pre-loading data or a need for useEffect since I don't necessarily need the API data on mount

  return (
    <main>
      {/* <button onClick={() => handleClassDataCall("rogue")}>
        Testing class call
      </button>
         <button onClick={() => handleClassDataCall("druid")}>
        Testing class call 2
      </button> */}
      <div id="container">
        <HomepageTitle />
        <HomepageRecent data={data} />
        {/* <HomepageSpecies /> */}
        <HomepageClasses classData={classData} toggleClear={toggleClear} callClassData={handleClassDataCall} />
        {classData && <ClassDetails classData={classData} toggleClear={toggleClear} />}
      </div>
    </main>
  );
}