/*📝 Problem: Reverse a String (Without Using .reverse())

Write a function reverseString(str) that returns the string reversed.

You cannot use built-in helpers like .reverse() or .split().reverse().join().

You must use a loop.*/

function reverseString(str){
    const letters = str.split("");
    const reverse  = []


for (let i = letters.length  -1; i >= 0 ; i--){
    reverse.push(letters[i])
}

return reverse.join('')
}

console.log(reverseString("hello"))
console.log(reverseString("JavaScript"))
console.log(reverseString("a"));
console.log(reverseString("")); 
