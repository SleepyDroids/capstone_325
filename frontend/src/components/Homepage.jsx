// Importing routes
import { Routes, Route, useNavigate } from "react-router";

// Importing pages / components
// import CharacterList from "../pages/CharacterList.jsx"
// import CharacterForm from "../pages/CharacterForm.jsx"
import HomepageTitle from "./homepage/HomepageTitle";
import HomepageRecent from "./homepage/HomepageRecent";
import HomepageSpecies from "./homepage/HomepageSpecies";
import HomepageClasses from "./homepage/HomepageClasses";

export default function Homepage() {
  const navigate = useNavigate();

  return (
    <main>
      <div id="container">
        <HomepageTitle />
        <HomepageRecent />
        <HomepageSpecies />
        <HomepageClasses />
      </div>
    </main>
  );
}
