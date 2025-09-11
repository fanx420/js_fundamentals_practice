/*📝 Problem: Find the Maximum and Minimum in an Array

Write a function findMinMax(arr) that returns an object with the smallest and largest numbers in the array.

You cannot use built-ins like Math.min(...arr) or Math.max(...arr).

Solve it using a loop.

If the array is empty, return null.*/

//using reduce

function findMinMax(arr) {
    if (arr.length === 0) {
        return null;
    }
    let max = arr.reduce((acc, next) => acc > next ? acc : next);
    let min = arr.reduce((acc, next) => acc > next ? next : acc);

    return {
        max: max,
        min: min
    }
}

console.log(findMinMax([3, 7, 2, 9, 1]));
console.log(findMinMax([5]));
console.log(findMinMax([]));


//using loops only

function findMinMax(arr) {
    if (arr.length === 0) {
        return null;
    }
    let max = arr[0];
    let min = arr[0];

    for (i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            max = arr[i];
        }
        if (arr[i] < arr[i + 1]) {
            min = (arr[i])
        }
    }
    return {
        max: max,
        min: min
    }
}