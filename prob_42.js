// 🧩 Problem: Count Even and Odd Numbers

// Description:
// Write a function called countEvenOdd that takes an array of integers and returns an object showing how many even and odd numbers there are in the array.

function countEvenOdd(arr){
    let even = 0;
    let odd = 0;
    
    for (let value of arr){
        if (value % 2 === 0){
            even+=1;
        }else{
            odd+=1;
        }
    }
    return {
        even,
        odd
    }
}
console.log(countEvenOdd([1, 2, 3, 4, 5, 6]));
// { even: 3, odd: 3 }

console.log(countEvenOdd([10, 21, 32, 43, 54]));
// { even: 3, odd: 2 }

console.log(countEvenOdd([]));
// { even: 0, odd: 0 }
