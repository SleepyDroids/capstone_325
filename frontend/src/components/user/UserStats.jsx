export default function UserStats({ data }) {
console.log(data)

function classFrequency(arr) {
const tally = {}
// take the full characters array
// for each character, look at their class and create a tally of that class
// return the frequency of that class for every character in data e.g. { Fighter: 3, Wizard: 4 }
// then to find the most used class, I look at my tally object and grab whichever count is highest
// so it looks like e.g. Top Class: Fighter (4) on the page
arr.forEach((c) => {

 tally[c.charClass] = (tally[c.charClass] ?? 0) + 1; 
})

return tally

}

console.log(classFrequency(data))

  return (
    <div className="user-stats">
      <span className="profile-text">Current Statistics:</span>
      <ul>
        <li>
          <span className="details-text">Total:</span> {data.length}
        </li>
        <li>
          <span className="details-text">Top Class:</span> Paladin
        </li>
        <li>
          <span className="details-text">Top Species:</span> Gnome
        </li>
        <li>
          <span className="details-text">Highest Level:</span> 20
        </li>
      </ul>
    </div>
  );
}
