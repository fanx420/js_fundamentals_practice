/*🔹 Problem: Inventory Management
Given a list of items with their quantity and price, compute the total value of the stock, but exclude out-of-stock items.


const inventory = [
  { item: "Notebook", quantity: 5, price: 120 },
  { item: "Pen", quantity: 0, price: 10 },
  { item: "Eraser", quantity: 10, price: 15 },
  { item: "Backpack", quantity: 3, price: 750 }
];
✅ Tasks:

1. Filter items with quantity > 0.

2. Compute the total inventory value: quantity × price.

3. Print each item's name and subtotal. */

// Solution:
const inventory = [
  { item: "Notebook", quantity: 5, price: 120 },
  { item: "Pen", quantity: 0, price: 10 },
  { item: "Eraser", quantity: 10, price: 15 },
  { item: "Backpack", quantity: 3, price: 750 }
];

const filteredItems = inventory.filter(({quantity}) => quantity > 0)

const totalValue = filteredItems.reduce((acc ,{ item, quantity, price }) => {
    let total = quantity * price;
    console.log(`Item Name: ${item} - P${total}`)
    return acc +total;
},0)

console.log(`Total Inventory Value: P${totalValue}`);

/* Output:
Item Name: Notebook - P600
Item Name: Eraser - P150
Item Name: Backpack - P2250
Total Inventory Value: P3000
*/
