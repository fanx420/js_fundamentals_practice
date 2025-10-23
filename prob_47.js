// 🧩 Problem: findSecondLargest()

// Instructions:
// Write a function that finds the second largest number in an array.
// If the array has fewer than two unique numbers, return null.

function findSecondLargest(arr) {
    let nums = [...new Set(arr)].sort((a,b) => b - a);
    if (nums.length < 2) return null;
    return nums[1];
}
console.log(findSecondLargest([10, 5, 20, 8, 20]));
// 10 (the unique numbers are [5, 8, 10, 20]; second largest is 10)

console.log(findSecondLargest([3, 3, 3]));
// null (no second unique number)

console.log(findSecondLargest([1]));
// null

console.log(findSecondLargest([7, 4, 9, 10]));
// 9

