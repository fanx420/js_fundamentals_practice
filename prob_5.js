// 🧠 Exercise: Employee Payroll Summary
// 🧰 Concepts You'll Practice:
// Object Destructuring

// map()

// filter()

// Template literals

// Arithmetic operations

// 📝 Problem Description:
// You're managing a small payroll system. Each employee has the following properties:

// name (string)

// role (string)

// hoursWorked (number)

// hourlyRate (number)

// 📋 Given:
// const employees = [
//   { name: "Alice", role: "Developer", hoursWorked: 40, hourlyRate: 300 },
//   { name: "Bob", role: "Designer", hoursWorked: 35, hourlyRate: 250 },
//   { name: "Charlie", role: "Intern", hoursWorked: 20, hourlyRate: 100 },
//   { name: "Diana", role: "Developer", hoursWorked: 45, hourlyRate: 300 }
// ];
// 🎯 Your Tasks:
// Use object destructuring inside map() to calculate each employee’s total pay.

// Format the result into strings like:


// Alice (Developer) - Total Pay: ₱12000
// Filter only employees who worked more than 35 hours.

// Calculate and display the total payroll cost using reduce().



// 📝 Solution:
const employees = [
  { name: "Alice", role: "Developer", hoursWorked: 40, hourlyRate: 300 },
  { name: "Bob", role: "Designer", hoursWorked: 35, hourlyRate: 250 },
  { name: "Charlie", role: "Intern", hoursWorked: 20, hourlyRate: 100 },
  { name: "Diana", role: "Developer", hoursWorked: 45, hourlyRate: 300 }
];


const salary = employees.map(({ name, role, hoursWorked, hourlyRate}) => {
    let salary = Math.round(hoursWorked * hourlyRate);
    console.log(`${name} (${role}) - Total Pay: P${salary}`)
    
    return salary;
})

const overtime = employees.filter(({name, hoursWorked}) => hoursWorked > 35)
overtime.forEach(({name}) => console.log(`Overtime: ${name}`))

const total = salary.reduce((acc, salary) => {
    return acc + salary
}, 0)

console.log(`Total Payroll Cost: ${total}`)


// Output:
// Alice (Developer) - Total Pay: P12000
// Bob (Designer) - Total Pay: P8750
// Charlie (Intern) - Total Pay: P2000
// Diana (Developer) - Total Pay: P13500
// Overtime: Alice
// Overtime: Diana
// Total Payroll Cost: 36250