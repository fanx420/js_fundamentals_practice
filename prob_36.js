// Problem: Remove Duplicates from an Array

// Description:
// Write a function removeDuplicates(arr) that takes an array and returns a new array with all duplicate values removed, keeping only the first occurrence of each element.


//using set
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log(removeDuplicates(["apple", "banana", "apple", "orange", "banana"]));
console.log(removeDuplicates([]));


//using manual loop

function removeDuplicates(arr) {
    if (arr.length === 0) return [];
    let newArr = [];
    for (let x of arr) {
        if (!newArr.includes(x)) {
            newArr.push(x)
        }
    }
    return newArr;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log(removeDuplicates(["apple", "banana", "apple", "orange", "banana"]));
console.log(removeDuplicates([]));
