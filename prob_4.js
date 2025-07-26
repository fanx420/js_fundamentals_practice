// 🧠 Exercise: Student Attendance Tracker
// 🪛 Concepts You'll Practice:
// Objects & Arrays

// Loops (forEach)

// Conditional logic

// Template literals

// Date strings (basic)

// 📘 Problem Description:
// You're building a simple program to track student attendance. Each student has:

// name (string)

// presentDays (number)

// totalDays (number)

// 🎒 Given:
// const students = [
//   { name: "Anna", presentDays: 18, totalDays: 20 },
//   { name: "Ben", presentDays: 15, totalDays: 20 },
//   { name: "Cara", presentDays: 12, totalDays: 20 },
//   { name: "David", presentDays: 20, totalDays: 20 }
// ];
// 🎯 Your Tasks:
// Loop through each student and calculate their attendance rate as a percentage.

// If a student has an attendance rate below 75%, mark them as "At Risk", otherwise "Good Standing".

// Print a summary for each student like:


// Anna - 90% - Good Standing
// Cara - 60% - At Risk

// 📝 Solution:

const students = [
    { name: "Anna", presentDays: 18, totalDays: 20 },
    { name: "Ben", presentDays: 15, totalDays: 20 },
    { name: "Cara", presentDays: 12, totalDays: 20 },
    { name: "David", presentDays: 20, totalDays: 20 }
];


students.forEach(student => {
    let status;
    let percentage = Math.round((student.presentDays / student.totalDays) * 100)

    percentage >= 75 ? status = "Good Standing" : status = "At risk"

    console.log(`${student.name} - ${percentage}% - ${status}`)
})

// Output:
// Anna - 90% - Good Standing   
// Ben - 75% - At Risk
// Cara - 60% - At Risk
// David - 100% - Good Standing