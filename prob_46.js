// 🧩 Problem: Capitalize the First Letter of Each Word

// Description:
// Write a function capitalizeWords(str) that takes a string and returns it with the first letter of each word capitalized.
// The rest of each word should be in lowercase.

function capitalizeWords(str) {
    return str.split(" ")
    .map(word => {
        if (word.length === 0) return "";
        
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(" ")
}

console.log(capitalizeWords("hello world from javascript"));
// "Hello World From Javascript"

console.log(capitalizeWords("JAVA is fun to learn"));
// "Java Is Fun To Learn"

console.log(capitalizeWords(""));
// ""
