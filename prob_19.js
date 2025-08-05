/*🧠 Problem: Employee Working Hours Summary
You are given a list of employees and their working hours. You need to:

Filter out employees who worked less than 40 hours.

For the remaining employees, calculate their pay using a fixed hourlyRate of ₱150.

Display a formatted list showing:
"Name: [name] | Hours Worked: [hours] | Pay: ₱[total]".

Calculate and display the total payroll cost for all qualifying employees.

Count how many employees worked overtime (more than 40 hours).

📦 Sample Data:
const employees = [
  { name: "Anna", hoursWorked: 38 },
  { name: "Ben", hoursWorked: 42 },
  { name: "Cara", hoursWorked: 40 },
  { name: "Dan", hoursWorked: 28 },
  { name: "Ella", hoursWorked: 45 }
];
🎯 Hints:
*Use .filter() to get those who worked at least 40 hours.

*Use .map() to calculate the pay.

*Use .reduce() to compute total payroll.

*Use .forEach() or a for...of loop to log individual summaries.

*Use .filter() again (or inside a loop) to count overtime workers. */

// Solution:
const employees = [
  { name: "Anna", hoursWorked: 38 },
  { name: "Ben", hoursWorked: 42 },
  { name: "Cara", hoursWorked: 40 },
  { name: "Dan", hoursWorked: 28 },
  { name: "Ella", hoursWorked: 45 }
];

const hourlyRate = 150;


const eligibleEmployees = employees.filter(({ hoursWorked }) => hoursWorked >= 40);


const payList = eligibleEmployees.map(({ name, hoursWorked }) => {
  const totalPay = hoursWorked * hourlyRate;
  return { name, hoursWorked, totalPay };
});


for (const { name, hoursWorked, totalPay } of payList) {
  console.log(`Name: ${name} | Hours Worked: ${hoursWorked} | Total Pay: ₱${totalPay}`);
}

const overtimeWorkers = eligibleEmployees.filter(({ hoursWorked }) => hoursWorked > 40);
overtimeWorkers.forEach(({ name }) => {
  console.log(`Overtime Worker: ${name}`);
});

const totalPayroll = payList.reduce((acc, { totalPay }) => acc + totalPay, 0);
console.log(`Total Payroll: ₱${totalPayroll}`);

/*Output:
Name: Ben | Hours Worked: 42 | Total Pay: ₱6300
Name: Cara | Hours Worked: 40 | Total Pay: ₱6000
Name: Ella | Hours Worked: 45 | Total Pay: ₱6750
Overtime Worker: Ben
Overtime Worker: Ella
Total Payroll: ₱19050 */