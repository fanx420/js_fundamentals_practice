/*🧠 Practice Problem: Course Enrollment Management
🧰 Concepts You’ll Practice:
for...of loop

Conditional logic

Object destructuring

push() and array manipulation

Template literals

📝 Problem Description:
You are tasked with managing student enrollments in different courses. You are given an array of students, each with the following details:

name (string)

course (string)

isEnrolled (boolean)

📋 Given:
const students = [
  { name: "Alice", course: "Math", isEnrolled: true },
  { name: "Bob", course: "Science", isEnrolled: false },
  { name: "Cara", course: "Math", isEnrolled: true },
  { name: "David", course: "History", isEnrolled: false },
  { name: "Ella", course: "Science", isEnrolled: true }
];
🎯 Your Tasks:
Loop through the students using a for...of loop.

Create two separate arrays:

One for enrolled students

One for not enrolled students

Print a formatted summary like:
Enrolled Students:
Alice - Math
Cara - Math
Ella - Science

Not Enrolled Students:
Bob - Science
David - History */

const students = [
  { name: "Alice", course: "Math", isEnrolled: true },
  { name: "Bob", course: "Science", isEnrolled: false },
  { name: "Cara", course: "Math", isEnrolled: true },
  { name: "David", course: "History", isEnrolled: false },
  { name: "Ella", course: "Science", isEnrolled: true }
];

let enrolled = [];
let notEnrolled = [];

for (const { name, course, isEnrolled} of students){
    
    isEnrolled == true ? enrolled.push({name:name, course:course}) : notEnrolled.push({name:name, course:course})
    
}

console.log("Enrolled Students:")
enrolled.forEach(({name , course}) => {
    console.log(`${name} - ${course}`)
})

console.log("\nNot Enrolled Students:")
notEnrolled.forEach(({name , course}) => {
    console.log(`${name} - ${course}`)
})

// Output:
/*
Enrolled Students:
Alice - Math
Cara - Math
Ella - Science

Not Enrolled Students:
Bob - Science
David - History */