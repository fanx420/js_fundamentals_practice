// Problem: Find the Intersection of Two Arrays

// Write a function findIntersection(arr1, arr2) that returns a new array containing only the elements that appear in both arrays.

function findIntersection(arr1, arr2) {
    let intersection = [];

    for (let x of arr1) {
        for (let y of arr2) {
            if (x === y) {
                intersection.push(x);
            }
        }
    }
    return [...new Set(intersection)];
}

console.log(findIntersection([1, 2, 3, 4], [3, 4, 5, 6]));
// [3, 4]

console.log(findIntersection(["apple", "banana", "cherry"], ["banana", "cherry", "date"]));
// ["banana", "cherry"]

console.log(findIntersection([1, 2, 3], [4, 5, 6]));
// []


//using set

function findIntersection(arr1, arr2) {
    const set2 = new Set(arr2);
    return arr1.filter(item => set2.has(item));
}
