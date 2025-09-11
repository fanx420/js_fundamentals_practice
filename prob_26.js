/*📝 Problem: Find the Missing Number

You are given an array containing n distinct numbers taken from 1 to n+1.
Your task is to write a function findMissingNumber(arr) that returns the missing number.*/

function firstNonRepeatingChar(str){
    const letters = str.toLowerCase().split("");
    const counts = {};

    for(let letter of letters){
        counts[letter] = (counts[letter] || 0) + 1;
    }
    
    for (let letter of letters){
       if(counts[letter] === 1){
           return letter;
       }
    }
    
  return null;

    
}
console.log(firstNonRepeatingChar("stress"));  
console.log(firstNonRepeatingChar("aabbcc"));   
console.log(firstNonRepeatingChar("sTreSS"));   
console.log(firstNonRepeatingChar("swiss"));    
console.log(firstNonRepeatingChar("google"));
