// trying something for science don't judge me pls

function classImage(c) {
  switch (c) {
    case "Barbarian":
      return console.log("barbarian image import");
    case "Bard":
      return console.log("bard image import");
  }
}

// Profile Page Functions / Variables
export function classFrequency(arr) {
  const tally = {};
/*
- Tally starts as an empty object
- For each character (c) in the arr (data), I use c.charClass as a key on the tally object
- if tally[c.charClass] is undefined or null, treat it as a 0
- Otherwise, use the existing number + 1
*/
  arr.forEach((c) => {
    tally[c.charClass] = (tally[c.charClass] ?? 0) + 1;
  });
 /*
- Count is my tracker object that I'll need to be able to print out the data on the UI
- For In Loop: loop over each KEY in the tally object (e.g. "Bard", "Wizard")
- tally[charClass] is the count (value) for that particular class
- If statement checks if is THIS class' count is greater than the current best count I have stored in count.count
- It is always comparing the current number, and updates the class name and the count to whichever one is the highest
- aka "for each class name in this object (tally), compare its number to the current best - if its bigger, promote it to the new champ"
 */
  const count = { name: "", count: 0 };

  // For In loop checks if the property value for tally is higher than 0
  // iterating over each property, it takes the class with the highest count and "overwrites" count if its tally value was higher than the previous one
  for (const charClass in tally) {
    if (tally[charClass] > count.count) {
      count.name = charClass;
      count.count = tally[charClass];
    }
  }
  return count;
}

export function speciesFrequency(arr) {
  const tally = {};

  arr.forEach((c) => {
    tally[c.race] = (tally[c.race] ?? 0) + 1;
  });

  const count = { name: "", count: 0 };
  for (const species in tally) {
    if (tally[species] > count.count) {
      count.name = species;
      count.count = tally[species];
    }
  }
  return count;
}

export const randomUsers = [
  {
    user: "Bob",
    username: "TheMightyBob",
    messages: 12,
  },
  {
    user: "Jimmy Pickles",
    username: "bobscousin",
    messages: 1,
  },
  {
    user: "Bob",
    username: "TheMightyBob",
    messages: 231,
  },
  {
    user: "Bob",
    username: "TheMightyBob",
    messages: 8,
  },
  {
    user: "Bob",
    username: "TheMightyBob",
    messages: 54,
  },
  {
    user: "Bob",
    username: "TheMightyBob",
    messages: 3,
  },
];

const randomCampaigns = [
  
]
