/*🚀 Problem: Customer Purchase Summary
You are given an array of customer purchases. Each purchase contains the customer's name, item bought, quantity, and price per item. Your task is to:

Filter out any purchases where the quantity is 0 (invalid transactions).

For valid purchases:

Calculate and display the total price for each purchase (quantity * pricePerItem).

Count how many unique customers made purchases.

At the end, display the total revenue made from all valid purchases.

🧾 Sample Data:
const purchases = [
  { name: "Alice", item: "Notebook", quantity: 3, pricePerItem: 100 },
  { name: "Bob", item: "Pen", quantity: 0, pricePerItem: 10 },
  { name: "Cara", item: "Backpack", quantity: 1, pricePerItem: 800 },
  { name: "Alice", item: "Eraser", quantity: 2, pricePerItem: 15 },
  { name: "Dan", item: "Ruler", quantity: 0, pricePerItem: 25 },
  { name: "Ben", item: "Pencil", quantity: 4, pricePerItem: 20 }
];
🧠 Concepts to Practice:
.filter() to remove invalid data

.map() to compute values

.reduce() to calculate total revenue

Using a Set to track unique customers */

// Solution:
const purchases = [
  { name: "Alice", item: "Notebook", quantity: 3, pricePerItem: 100 },
  { name: "Bob", item: "Pen", quantity: 0, pricePerItem: 10 },
  { name: "Cara", item: "Backpack", quantity: 1, pricePerItem: 800 },
  { name: "Alice", item: "Eraser", quantity: 2, pricePerItem: 15 },
  { name: "Dan", item: "Ruler", quantity: 0, pricePerItem: 25 },
  { name: "Ben", item: "Pencil", quantity: 4, pricePerItem: 20 }
];


const validPurchases = purchases.filter(purchase => purchase.quantity > 0);

validPurchases.forEach(({ name, item, quantity, pricePerItem }) => {
  const total = quantity * pricePerItem;
  console.log(`${name} bought ${quantity} ${item}(s) for ₱${total}`);
});

const uniqueCustomers = new Set(validPurchases.map(p => p.name));
console.log(`\nTotal unique customers: ${uniqueCustomers.size}`);

const totalRevenue = validPurchases.reduce((acc, p) => {
  return acc + (p.quantity * p.pricePerItem);
}, 0);

console.log(`Total Revenue: ₱${totalRevenue}`);

/* Output:
Alice bought 3 Notebook(s) for ₱300
Cara bought 1 Backpack(s) for ₱800
Alice bought 2 Eraser(s) for ₱30
Ben bought 4 Pencil(s) for ₱80

Total unique customers: 4
Total Revenue: ₱1450 */