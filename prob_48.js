// 🧩 Problem: Find the First Non-Repeating Character

// Description:
// Write a function firstNonRepeatingChar(str) that returns the first character in the string that does not repeat.
// If every character repeats, return null.

function firstNonRepeatingChar(str) {
  const occurrences = {};

  for (let char of str) {
    occurrences[char] = (occurrences[char] || 0) + 1;
  }

  for (let char of str) {
    if (occurrences[char] === 1) {
      return char;
    }
  }

  return null;
}
console.log(firstNonRepeatingChar("aabbccddeffg"));
// "e"

console.log(firstNonRepeatingChar("aabbcc"));
// null

console.log(firstNonRepeatingChar("swiss"));
// "w"

console.log(firstNonRepeatingChar("racecars"));
// "e"
