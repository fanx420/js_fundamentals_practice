// 🧩 Problem: Find the Longest Word in a Sentence

// Description:
// Write a function findLongestWord(sentence) that takes a string and returns the longest word in it.
// If there are multiple words with the same length, return the first one.

function findLongestWord(sentence){
    if (!sentence) return "";
    let words = sentence.toLowerCase().split(" "); 
    let longestWord = words.reduce((acc, word) => acc.length > word.length? acc : word);
    return longestWord;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// "jumped"

console.log(findLongestWord("I love JavaScript programming"));
// "programming"

console.log(findLongestWord(""));
// ""
