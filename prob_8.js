/*🔹 Problem: Student Grades Analysis
You are given a list of students. Calculate the average score and filter out the students who scored above the average.


const students = [
  { name: "Alex", score: 78 },
  { name: "Beth", score: 85 },
  { name: "Cara", score: 92 },
  { name: "Dan", score: 64 },
  { name: "Ella", score: 90 }
];
✅ Tasks:

1. Compute the average score of all students.

2. Filter students whose score is greater than average.

3. Print their names and scores. */


// Solution:
const students = [
  { name: "Alex", score: 78 },
  { name: "Beth", score: 85 },
  { name: "Cara", score: 92 },
  { name: "Dan", score: 64 },
  { name: "Ella", score: 90 }
];

const total = students.reduce((acc,student)=> acc + student.score, 0);
const avg = total / students.length;

const highStudents = students.filter(student => student.score > avg)

for (const { name, score } of highStudents){
    console.log(`Name: ${name} - Score: ${score}`)
}

/* Output:
Name: Beth - Score: 85
Name: Cara - Score: 92
Name: Ella - Score: 90 */