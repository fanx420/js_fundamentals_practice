// 🧩 Problem: Word Frequency Counter

// Instructions:
// Write a function called wordFrequency(text) that takes a string and returns an object showing how many times each word appears in the string.

// 🧠 Requirements:

// Ignore case sensitivity (e.g., “Hello” and “hello” should be treated as the same word).

// Ignore punctuation like commas and periods.

// Return the result as an object where each key is a word and its value is the count.

function wordFrequency(text) {
    const words = text.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, "").split(" ").filter(Boolean);
    
    const occurences = {};
    
    for (let word of words){
        occurences[word] = (occurences[word] || 0 ) + 1;
    }
    return occurences;
}

console.log(wordFrequency("Hello, hello world! This is a world full of code."));
