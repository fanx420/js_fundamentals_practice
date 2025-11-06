// 🧩 Problem: Count Unique Elements

// Write a function that counts how many unique elements exist in an array.
// If the array is empty, return 0.

function countUnique(arr){
    if (arr.length === 0) return 0;
    
    let elements = [...new Set(arr)];
   return `${elements.length} (Unique elements are ${elements})`;
}
console.log(countUnique([1, 2, 2, 3, 4, 4, 5]));
// 5 (unique elements are 1, 2, 3, 4, 5)

console.log(countUnique(["apple", "banana", "apple", "orange", "banana"]));
// 3 (unique elements are apple, banana, orange)

console.log(countUnique([]));
// 0
