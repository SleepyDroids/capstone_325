import { useState } from "react";

// Importing pages / components
import HomepageTitle from "./homepage/HomepageTitle";
import HomepageRecent from "./homepage/HomepageRecent";
// import HomepageSpecies from "./homepage/HomepageSpecies";
import HomepageClasses from "./homepage/HomepageClasses";
import ClassDetails from "./homepage/ClassDetails";

const CLASS_API_URL = "https://www.dnd5eapi.co/api/2014/classes";
// const SPECIES_API_URL = "https://www.dnd5eapi.co/api/2014/races";

export default function Homepage({ data }) {
  const [classData, setClassData] = useState(null);
  // const [speciesData, setSpeciesData] = useState(null);

  async function getClassData(charClass) {
    try {
      const response = await fetch(`${CLASS_API_URL}/${charClass}`);
      const result = await response.json();
      setClassData(await result);
      return classData;
    } catch (e) {
      console.log(e);
    }
  }

  //   async function getSpeciesData(species) {
  //   try {
  //     const response = await fetch(`${SPECIES_API_URL}/${species}`);
  //     const result = await response.json();
  //     setSpeciesData(await result);
  //     return speciesData;
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  async function handleClassDataCall(charClass) {
    console.log("clicked!!");
    getClassData(charClass);
    return classData;
  }

  // async function handleSpeciesDataCall(species) {
  //   console.log("clicked!!");
  //   getSpeciesData(species);
  //   return speciesData;
  // }

  function toggleClear() {
    console.log("class and species data reset");
    setClassData(null);
    // setSpeciesData(null);
  }

  console.log(classData);
  // console.log(speciesData);

  // can make API calls using an event handler so can use onClick to fire off the call instead of calling all the classes all at once
  // especially since I don't have a need to do so
  // so something like e.target.name or something for the and then use template literal to slap in the name of the class, then make that request THEN retrieve the data I need then and there
  // so one API call and only on user interaction
  // no pre-loading data or a need for useEffect since I don't necessarily need the API data on mount

  return (
    <main className="home-page">
      {/* title + three main buttons */}
      <section className="home-hero">
        <HomepageTitle />
      </section>

      {/* recent characters + available classes */}
      <section className="home-main">
        <div className="home-main-grid">
          <section className="home-section">
            <h2 className="home-section-title">Recently Forged Heroes</h2>
            <HomepageRecent data={data} />
          </section>

          <section className="home-section">
            <HomepageClasses
              classData={classData}
              toggleClear={toggleClear}
              callClassData={handleClassDataCall}
            />
          </section>
        </div>
      </section>
      {/* <HomepageSpecies /> */}
      {/* class details from external API modal */}
      <div className="confirm-overlay">
        <div className="classData-card">
          {classData && (
            <ClassDetails classData={classData} toggleClear={toggleClear} />
          )}
        </div>
      </div>
    </main>
  );
}
