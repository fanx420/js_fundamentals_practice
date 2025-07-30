// ✂️ Problem: Capitalize Each Word in Sentences
// You are given an array of sentences. Your task is to capitalize the first letter of each word in each sentence and return the updated array.

// 📋 Input:
// const sentences = [
//   "hello world",
//   "javascript is fun",
//   "practice makes perfect"
// ];
// ✅ Expected Output:
// [
//   "Hello World",
//   "Javascript Is Fun",
//   "Practice Makes Perfect"
// ]
// 📌 Requirements:
// Use map() to iterate through the sentences.

// Inside the map, use split(), map(), join() to capitalize each word.

// Return the final array.

// 🛠️ Solution:
const sentences = [
  "hello world",
  "javascript is fun",
  "practice makes perfect"
];

const firstCapital = sentences.map(e => 
    e.split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    )

console.log(firstCapital)


/*output:
[
  'Hello World',
  'Javascript Is Fun',
  'Practice Makes Perfect'
] */