// Problem: Find the First Duplicate

// Write a function findFirstDuplicate(arr) that returns the first element that appears more than once in the array.
// If there are no duplicates, return null.

function findFirstDuplicate(arr) {
    let seen = new Set();

    for (let value of arr) {
        if (seen.has(value)) {
            return value;
        }
        seen.add(value);
    }

    return null;
}

console.log(findFirstDuplicate([2, 5, 1, 2, 3, 5]));
// 2

console.log(findFirstDuplicate([1, 2, 3, 4]));
// null

console.log(findFirstDuplicate(["a", "b", "c", "a", "d", "b"]));
// "a"
