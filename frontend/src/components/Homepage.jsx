// Importing pages / components
import HomepageTitle from "./homepage/HomepageTitle";
import HomepageRecent from "./homepage/HomepageRecent";
import HomepageSpecies from "./homepage/HomepageSpecies";
import HomepageClasses from "./homepage/HomepageClasses";

export default function Homepage({ data }) {

  return (
    <main>
      <div id="container">
        <HomepageTitle />
        <HomepageRecent data={data} />
        <HomepageSpecies />
        <HomepageClasses />
      </div>
    </main>
  );
}
