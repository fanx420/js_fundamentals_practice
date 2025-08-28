/* Problem: FizzBuzz Variation
Write a function that prints numbers from 1 to 50.
If a number is divisible by 3, print "Fizz".
If a number is divisible by 5, print "Buzz".
If a number is divisible by both 3 and 5, print "FizzBuzz".
Otherwise, print the number itself. */

const numbers = Array.from({ length: 50 }, (_, i) => i + 1);

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 5 === 0 && numbers[i] % 3 === 0) {
        console.log("FizzBuzz");
    } else if (numbers[i] % 5 === 0) {
        console.log("Buzz");
    } else if (numbers[i] % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(numbers[i]);
    }
}

// forEach Method: 
numbers.forEach(num => {
    if (num % 5 === 0 && num % 3 === 0) {
        console.log("FizzBuzz");
    } else if (num % 5 === 0) {
        console.log("Buzz");
    }
    else if (num % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(num);
    }
})
