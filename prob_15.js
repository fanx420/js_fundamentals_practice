/*🧪 Problem: Abbreviation Generator
Given an array of organization names, create an array that contains the abbreviation for each organization. The abbreviation should consist of the first letter of each word in the name, capitalized.

📦 Input:
const organizations = [
  "national aeronautics and space administration",
  "federal bureau of investigation",
  "international business machines",
  "central intelligence agency"
];
🎯 Expected Output:
["NASA", "FBI", "IBM", "CIA"]
📌 Instructions:
Use a for loop (not map) to iterate through the array.

For each string:

Split it into words.

Take the first letter of each word and capitalize it.

Combine the letters to form an abbreviation.

Push the abbreviation to a new array.

Log the final array of abbreviations. */

// 📝 Solution:
const organizations = [
  "national aeronautics and space administration",
  "federal bureau of investigation",
  "international business machines",
  "central intelligence agency"
];

const fillerWords = ["of", "and", "the", "in", "on", "at", "for"];

let abbreviations = [];

for (let i = 0; i < organizations.length; i++) {
  const words = organizations[i].split(" ");
  let abbr = "";

  for (let j = 0; j < words.length; j++) {
    const word = words[j].toLowerCase();
    
    if (!fillerWords.includes(word)) {
      abbr += words[j][0].toUpperCase();
    }
  }

  abbreviations.push(abbr);
}

console.log(abbreviations);
/*output:
["NASA", "FBI", "IBM", "CIA"]
*/

