/*📝 Problem: Inventory Management

You are given a list of products in a store. Each product has a name, price, and quantity (stock available).

const products = [
  { name: "Laptop", price: 40000, quantity: 5 },
  { name: "Mouse", price: 800, quantity: 0 },
  { name: "Keyboard", price: 1500, quantity: 8 },
  { name: "Monitor", price: 12000, quantity: 2 },
  { name: "USB Cable", price: 300, quantity: 10 }
];


Tasks:

Find all products that are out of stock.

Find the product with the highest price.

Compute the total inventory value (sum of price × quantity for all products).

Print a report like this:

Out of Stock: Mouse
Highest Price: Laptop (40000)
Total Inventory Value: 239000
*/


const products = [
  { name: "Laptop", price: 40000, quantity: 5 },
  { name: "Mouse", price: 800, quantity: 0 },
  { name: "Keyboard", price: 1500, quantity: 8 },
  { name: "Monitor", price: 12000, quantity: 2 },
  { name: "USB Cable", price: 300, quantity: 10 }
];

const outOfStock = products.filter(({quantity}) => quantity === 0 )
const highestPrice = Math.max(...products.map(({price}) =>  price));
const highestProduct = products.filter(({price}) => price === highestPrice)
const total = products.reduce((acc, item) => acc + (item.price * item.quantity), 0)
console.log(`Out of Stock: ${outOfStock[0].name}`);
console.log(`Highest Price: ${highestProduct[0].name} (${highestProduct[0].price})`);
console.log(`Total Inventory Value: ${total}`);