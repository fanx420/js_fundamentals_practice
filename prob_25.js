/*📝 Problem: Remove Duplicates

Write a function removeDuplicates(arr) that takes an array of numbers and returns a new array without duplicates, keeping the original order.

Requirements:

You cannot use Set or other built-in shortcuts.

Solve it using basic loops and conditionals.*/

function removeDuplicates(arr){
    if(arr.length <= 1 ){
        return arr;
    }
    
    const sortedArr = [];
    for (i = 0; i < arr.length; i++){
        if(!sortedArr.includes(arr[i])){
            sortedArr.push(arr[i]);
        }
    }
    return sortedArr
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 
console.log(removeDuplicates([7, 7, 7, 7])); 
console.log(removeDuplicates([])); 
console.log(removeDuplicates([3, 1, 3, 2]));   