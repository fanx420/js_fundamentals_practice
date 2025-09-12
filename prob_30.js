/*🔹 Problem: FizzBuzz

Write a function fizzBuzz(n) that prints numbers from 1 to n, but:

For multiples of 3, print "Fizz" instead of the number.

For multiples of 5, print "Buzz".

For numbers that are multiples of both 3 and 5, print "FizzBuzz".*/

const numbers = Array.from({length: 50}, (_,i) => i + 1);

    for (const num of numbers){
        if (num % 5 === 0 && num % 3 === 0){
            console.log('fizzbuzz');
        }else if (num % 5 === 0){
            console.log('buzz');
        }else if (num % 3 === 0){
            console.log('fizz');
        }
        else{
            console.log(num);
        }
    }