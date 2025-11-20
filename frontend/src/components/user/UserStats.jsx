export default function UserStats({ data }) {
  console.log(data);

  function classFrequency(arr) {
    const tally = {};
    // take the full characters array
    // for each character, look at their class and create a tally of that class
    // return the frequency of that class for every character in data e.g. { Fighter: 3, Wizard: 4 }
    // then to find the most used class, I look at my tally object and grab whichever count is highest
    // so it looks like e.g. Top Class: Fighter (4) on the page
    arr.forEach((c) => {
      // create a new property of the class name with the value being:
      // the total number of times that property appears and if it is undefined/null, initialize it to 0
      // otherwise increment the value
      tally[c.charClass] = (tally[c.charClass] ?? 0) + 1;
    });

    let count = { name: "", count: 0 };
    for (const charClass in tally) {
      if (tally[charClass] > count.count) {
        count.name = charClass;
        count.count = tally[charClass];
      }
    }
    return count;
  }

    function speciesFrequency(arr) {
    const tally = {};

    arr.forEach((c) => {
      tally[c.race] = (tally[c.race] ?? 0) + 1;
    });

    let count = { name: "", count: 0 };
    for (const species in tally) {
      if (tally[species] > count.count) {
        count.name = species;
        count.count = tally[species];
      }
    }
    return count;
  }

const topClass = classFrequency(data)
const topSpecies = speciesFrequency(data)

  return (
    <div className="user-stats">
      <span className="profile-text">Current Statistics:</span>
      <ul>
        <li>
          <span className="details-text">Total:</span> {data.length}
        </li>
        <li>
          <span className="details-text">Top Class:</span> {topClass.name} ({topClass.count})
        </li>
        <li>
          <span className="details-text">Top Species:</span> {topSpecies.name} ({topSpecies.count})
        </li>
      </ul>
    </div>
  );
}
