/*🔹 Problem: Palindrome Checker

Write a function isPalindrome(str) that checks if a given string is a palindrome.
A palindrome is a word, phrase, or number that reads the same forwards and backwards (ignoring spaces, punctuation, and case). */

function checkPalindrome(str){
    let word = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reverse = word.split("").reverse().join("");
    
     return word === reverse;
}

console.log(checkPalindrome("racecar"));    
console.log(checkPalindrome("Level"));     
console.log(checkPalindrome("hello")); 
console.log(checkPalindrome("A man a plan a canal Panama")); 
