// 🧩 Problem: Flatten a Nested Array

// ✅ Goal:
// Write a function flattenArray(arr) that takes a nested array of any depth and returns a single-level flattened array.

function flattenArray(arr) {
    if (Array.isArray(arr)){
        return arr.flat(arr.length);
    }
    return arr;
}
console.log(flattenArray([1, [2, 3], [4, [5]]]));
// [1, 2, 3, 4, 5]

console.log(flattenArray([[1], [[2]], [[[3]]]]));
// [1, 2, 3]

console.log(flattenArray([1, 2, 3]));
// [1, 2, 3] (no change)

console.log(flattenArray([]));
// []



//recursion

function flattenArray(arr) {
    let result = [];
    
    for (let val of arr){
        if (Array.isArray(val)){
            result.push(...flattenArray(val))
        }else {
            result.push(val)
        }
    }
    return result;
}
console.log(flattenArray([1, [2, 3], [4, [5]]]));
// [1, 2, 3, 4, 5]

console.log(flattenArray([[1], [[2]], [[[3]]]]));
// [1, 2, 3]

console.log(flattenArray([1, 2, 3]));
// [1, 2, 3] (no change)

console.log(flattenArray([]));
// []

