// 🧩 Problem: Merge and Sort Two Arrays (Without Duplicates)

// Description:
// Write a function that takes two arrays of numbers, merges them into one, removes any duplicates, and returns a sorted array in ascending order.
function mergeAndSort(arr1, arr2){
   let combined = arr1.concat(arr2).sort((a,b) => a - b);
   
   return [...new Set(combined)];
}
console.log(mergeAndSort([3, 1, 4], [4, 2, 5]));
// Output: [1, 2, 3, 4, 5]

console.log(mergeAndSort([10, 20, 30], [30, 40, 50]));
// Output: [10, 20, 30, 40, 50]

console.log(mergeAndSort([], [1, 2, 3]));
// Output: [1, 2, 3]
