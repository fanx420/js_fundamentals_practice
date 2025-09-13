/*🔹 Problem: Count Vowels

Write a function countVowels(str) that returns the number of vowels (a, e, i, o, u) in a given string.

It should work regardless of case (uppercase/lowercase).

If the string is empty, return 0. */

function countVowels(str){
    const vowels = ['a','e','i','o','u'];
    let letters = str.toLowerCase().split("");
    let count = 0;
    
    for (const letter of letters){
       for (const vowel of vowels){
           if (letter.includes(vowel)){
               count += 1;
           }
       }
    }
    return count;
}

console.log(countVowels("hello"));      
console.log(countVowels("JavaScript")); 
console.log(countVowels("AEIOU"));     
console.log(countVowels("rhythm"));      

