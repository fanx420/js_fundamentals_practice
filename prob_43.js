//  💡 Problem: Find the Second Largest Number

// Description:
// Write a function findSecondLargest(arr) that takes an array of numbers and returns the second largest unique number.
// If there is no second largest number (e.g., all elements are equal or the array is too small), return null.

function findSecondLargest(arr){
    if (arr.length < 2) return null
   let sorted = arr.sort((a,b) => b - a);

   
    for (let i = 0; i < sorted.length - 1; i++){
        if (sorted[i] > sorted[i+1]){
           return sorted[i+1];
        }
    }
   return null;
}
console.log(findSecondLargest([10, 20, 4, 45, 99]));
// 45

console.log(findSecondLargest([5, 5, 5]));
// null

console.log(findSecondLargest([1]));
// null

console.log(findSecondLargest([2, 3, 6, 6, 5]));
// 5


//for of loop

function findSecondLargest(arr) {
  if (arr.length < 2) return null;

  let sorted = arr.sort((a, b) => b - a);

  let largest = sorted[0];

  for (let num of sorted) {
    if (num < largest) {
      return num; 
    }
  }

  return null;
}

console.log(findSecondLargest([10, 20, 4, 45, 99]));
// 45

console.log(findSecondLargest([5, 5, 5]));
// null

console.log(findSecondLargest([1]));
// null

console.log(findSecondLargest([2, 3, 6, 6, 5]));
// 5
