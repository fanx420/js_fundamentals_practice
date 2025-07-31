// 🧠 Challenge: Title Case with Exceptions
// You are given an array of book titles in lowercase. You need to capitalize the first letter of each word except for certain "stop words" (like "the", "of", "in", "on", "and") unless the stop word is the first word in the title.

// 📦 Input:
// const titles = [
//   "the lord of the rings",
//   "harry potter and the goblet of fire",
//   "to kill a mockingbird",
//   "a game of thrones",
//   "life in the spirit world"
// ];
// ❗ Stop words:
// const stopWords = ["a", "an", "and", "of", "the", "in", "on"];

// ✅ Expected Output:
// [
//   "The Lord of the Rings",
//   "Harry Potter and the Goblet of Fire",
//   "To Kill a Mockingbird",
//   "A Game of Thrones",
//   "Life in the Spirit World"
// ]
// ✅ Requirements:
// Use .split(), .map(), .join()

// Skip capitalizing stop words unless they're the first word

// Clean and readable code

const titles = [
  "the lord of the rings",
  "harry potter and the goblet of fire",
  "to kill a mockingbird",
  "a game of thrones",
  "life in the spirit world"
];
const stopWords = ["a", "an", "and", "of", "the", "in", "on"];

const capitalWords = titles.map(title => 
    title.split(" ")
    .map((word, index) => {
        if (index === 0 || !stopWords.includes(word.toLowerCase())){
            return word[0].toUpperCase() + word.slice(1)
        }else{
            return word.toLowerCase()
        }
    })
    .join(" ")
)

console.log(capitalWords)

/*output:
[
  'The Lord of the Rings',
  'Harry Potter and the Goblet of Fire',
  'To Kill a Mockingbird',
  'A Game of Thrones',
  'Life in the Spirit World'
] */