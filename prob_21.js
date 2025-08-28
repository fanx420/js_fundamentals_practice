/*Problem:
You are given an array of student scores. Write a program to:
Find the highest score.
Find the lowest score.
Calculate the average score.
Print the names of students who scored above average.
const students = [
  { name: "Alice", score: 82 },
  { name: "Bob", score: 91 },
  { name: "Cara", score: 76 },
  { name: "Dan", score: 88 },
  { name: "Ella", score: 95 }
]; */

const students = [
  { name: "Alice", score: 82 },
  { name: "Bob", score: 91 },
  { name: "Cara", score: 76 },
  { name: "Dan", score: 88 },
  { name: "Ella", score: 95 }
];

const maxScore = Math.max(...students.map(({score}) => score));
const minScore = Math.min(...students.map(({score}) => score));

const highest = students.filter(({score}) => score === maxScore);
const lowest = students.filter(({score}) => score === minScore);

const totalScore = students.reduce((acc, {score}) => acc + score, 0);
const avgScore = totalScore / students.length;

console.log(`${highest[0].name} got the highest score of ${highest[0].score}.
${lowest[0].name} got the lowest score of ${lowest[0].score}.
The total score average is ${avgScore}.`);
