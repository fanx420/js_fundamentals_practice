// Problem: Character Frequency Counter

// Write a function charFrequency(str) that takes a string and returns an object showing how many times each character appears. Ignore spaces and make the count case-insensitive.

function charFrequency(str) {
    const values = str.toLowerCase().split("");
    
    if (values.length === 0) {
        return {};
    }

    let occurrences = {};
    for (let value of values) {
        if (value !== " ") {   // ✅ skip spaces
            occurrences[value] = (occurrences[value] || 0) + 1;
        }
    }
    return occurrences;
}

console.log(charFrequency("Hello World"));
// { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }

console.log(charFrequency("JavaScript"));
// { j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }

console.log(charFrequency(""));
// {}
