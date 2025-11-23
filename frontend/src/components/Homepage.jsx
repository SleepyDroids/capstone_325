import { useState, useEffect } from "react";

// Importing pages / components
import HomepageTitle from "./homepage/HomepageTitle";
import HomepageRecent from "./homepage/HomepageRecent";
import HomepageSpecies from "./homepage/HomepageSpecies";
import HomepageClasses from "./homepage/HomepageClasses";

const BASE_API_URL = "https://www.dnd5eapi.co/api/2014/classes/";

export default function Homepage({ data, reload, setReload }) {
  const [classData, setClassData] = useState([]);

  useEffect(() => {
    async function getClassData() {
      try {
        const response = await fetch(`${BASE_API_URL}`);
        const classData = await response.json();
        setClassData(await classData);
        return classData;
      } catch (e) {
        console.log(e);
      }
    }
    getClassData();
  }, []);

  // console.log(classData);

  return (
    <main>
      <div id="container">
        <HomepageTitle />
        <HomepageRecent data={data} reload={reload} setReload={setReload} />
        <HomepageSpecies />
        <HomepageClasses data={classData} />
      </div>
    </main>
  );
}
