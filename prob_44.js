// 🧩 Problem: Find the Most Frequent Element in an Array

// Description:
// Write a function findMostFrequent(arr) that takes an array and returns the element that appears the most times.
// If the array is empty, return null.
// If multiple elements have the same highest frequency, return any one of them.

function findMostFrequent(arr){
    if (arr.length === 0) return null;
    let occurences = {};
    
    for (let val of arr){
        occurences[val] = (occurences[val] || 0) + 1;
    }
    
    let mostFrequent = null;
    let mostCount = 0;
    
    for (let [key, count] of Object.entries(occurences)){
        if (count > mostCount){
            mostFrequent = key;
            mostCount = count;
        }
    }
    return mostFrequent
}
console.log(findMostFrequent([1, 3, 2, 1, 4, 1, 3]));
// 1

console.log(findMostFrequent(["apple", "banana", "apple", "orange", "banana", "banana"]));
// "banana"

console.log(findMostFrequent([]));
// null
