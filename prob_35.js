// Problem: Find the Missing Number in an Array

// You are given an array containing n distinct numbers taken from the range 1 to n+1. The array is missing exactly one number. Write a function to find the missing number.

function findMissingNumber(arr){
    let numbers = arr.sort((a,b) => a - b);
    let index = 0;
    for (let num of numbers){
        const next = numbers[index + 1];
        if(next - num !== 1){
          return  num + 1;
        }
        index++;
    }
}
console.log(findMissingNumber([1, 2, 4, 5])); // 3
console.log(findMissingNumber([2, 3, 1, 5])); // 4
console.log(findMissingNumber([1]));          // 2
