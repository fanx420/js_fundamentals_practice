// 📝 Problem 1:
// You are given an array of student objects. Each object has a name and a score.
// const students = [
//   { name: "Anna", score: 85 },
//   { name: "Ben", score: 72 },
//   { name: "Cara", score: 91 },
//   { name: "David", score: 66 }
// ];
// 🎯 Task:
// Write a program that:

// Loops through each student using forEach.

// Checks their score:

// 90 and above = Grade A

// 80–89 = Grade B

// 70–79 = Grade C

// Below 70 = Grade F

// Prints something like:
// Anna scored 85 and received Grade B
// Ben scored 72 and received Grade C



// 📝 Solution:
const students = [
  { name: "Anna", score: 85 },
  { name: "Ben", score: 72 },
  { name: "Cara", score: 91 },
  { name: "David", score: 66 }
];

students.forEach(student => {
    let grade;
    if(student.score >= 90){
        grade = "Grade A";
    }else if (student.score >= 80){
        grade = "Grade B";
    }else if(student.score >= 70){
        grade = "Grade C";
    }else{
        grade = "Grade F";
    }
    
    console.log(`${student.name} scored ${student.score} and received ${grade}`);
    
})

// Output:
// Anna scored 85 and received Grade B
// Ben scored 72 and received Grade C
// Cara scored 91 and received Grade A
// David scored 66 and received Grade F
