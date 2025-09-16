/*🔹 Problem: Word Frequency Counter

Write a function wordFrequency(text) that takes a string and returns an object showing how many times each word appears.

Ignore case (e.g., "Hello" and "hello" should be counted together).

Ignore punctuation (commas, periods, etc.).

Words are separated by spaces. */

function wordFrequency(str){
    let words = str.toLowerCase().replace(/[!-/:-@[-`{-~]/g,"").split(" ")
    let freq = {};
   for (let word of words){
        freq[word] = (freq[word] || 0) + 1
   }
    return freq;
}
console.log(wordFrequency("Hello world, hello Web!"));
console.log(wordFrequency("I love coding. Coding is fun!"));
console.log(wordFrequency("")); 
