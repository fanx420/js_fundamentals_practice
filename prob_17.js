/*🧠 Problem: Group and Format Orders by Status
You are given a list of customer orders. Each order has a customer name, total amount, and order status ("pending", "completed", or "canceled"). You need to:

Group the orders by their status into separate arrays.

Format each order's output string as:
"Customer: <name> | Amount: ₱<amount> | Status: <status>"

Print each group under a heading like:
"Completed Orders:", followed by each formatted string.

📦 Sample Input:
const orders = [
  { name: "Alice", amount: 1500, status: "completed" },
  { name: "Bob", amount: 3000, status: "pending" },
  { name: "Cara", amount: 700, status: "canceled" },
  { name: "Dan", amount: 2500, status: "completed" },
  { name: "Ella", amount: 1200, status: "pending" }
];
✅ Expected Output Format:
Completed Orders:
Customer: Alice | Amount: ₱1500 | Status: completed
Customer: Dan | Amount: ₱2500 | Status: completed

Pending Orders:
Customer: Bob | Amount: ₱3000 | Status: pending
Customer: Ella | Amount: ₱1200 | Status: pending

Canceled Orders:
Customer: Cara | Amount: ₱700 | Status: canceled */

// Solution:
const orders = [
  { name: "Alice", amount: 1500, status: "completed" },
  { name: "Bob", amount: 3000, status: "pending" },
  { name: "Cara", amount: 700, status: "canceled" },
  { name: "Dan", amount: 2500, status: "completed" },
  { name: "Ella", amount: 1200, status: "pending" }
];

const completedOrders = [];
const pendingOrders = [];
const cancelledOrders = [];

for (const { name, amount, status } of orders) {
  if (status === "completed") {
    completedOrders.push({ name, amount, status });
  } else if (status === "pending") {
    pendingOrders.push({ name, amount, status });
  } else if (status === "canceled") {
    cancelledOrders.push({ name, amount, status });
  }
}

console.log("Completed Orders:");
completedOrders.forEach(({ name, amount, status }) =>
  console.log(`Customer: ${name} | Amount: ${amount} | Status: ${status}`)
);

console.log("\nPending Orders:");
pendingOrders.forEach(({ name, amount, status }) =>
  console.log(`Customer: ${name} | Amount: ${amount} | Status: ${status}`)
);

console.log("\nCancelled Orders:");
cancelledOrders.forEach(({ name, amount, status }) =>
  console.log(`Customer: ${name} | Amount: ${amount} | Status: ${status}`)
);

/*Output:
Completed Orders:
Customer: Alice | Amount: 1500 | Status: completed
Customer: Dan | Amount: 2500 | Status: completed

Pending Orders:
Customer: Bob | Amount: 3000 | Status: pending
Customer: Ella | Amount: 1200 | Status: pending

Cancelled Orders:
Customer: Cara | Amount: 700 | Status: canceled */  
