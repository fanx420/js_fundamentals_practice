// 📝 Problem 2:

// 📝 Scenario:
// You are managing an online store's inventory. Each product has a name, category, stock, and price.


// const products = [
//   { name: "Laptop", category: "Electronics", stock: 5, price: 35000 },
//   { name: "Mouse", category: "Electronics", stock: 0, price: 800 },
//   { name: "Desk", category: "Furniture", stock: 2, price: 7000 },
//   { name: "Chair", category: "Furniture", stock: 4, price: 3500 },
//   { name: "Headphones", category: "Electronics", stock: 1, price: 1200 }
// ];
// 🎯 Tasks:
// ✅ 1. Filter out all out-of-stock items.
// ✅ 2. Create a new array that contains:


// [
//   "Laptop - ₱35000",
//   "Mouse - ₱800",
//   ...
// ]
// (Use map() to format strings.)

// ✅ 3. Calculate the total value of in-stock products.
// (Formula: stock * price for each item, then total)


// 📝 Solution:
const products = [
  { name: "Laptop", category: "Electronics", stock: 5, price: 35000 },
  { name: "Mouse", category: "Electronics", stock: 0, price: 800 },
  { name: "Desk", category: "Furniture", stock: 2, price: 7000 },
  { name: "Chair", category: "Furniture", stock: 4, price: 3500 },
  { name: "Headphones", category: "Electronics", stock: 1, price: 1200 }
];

const filteredProducts = products.filter(product => product.stock > 0).map(product => `${product.name} - ${product.price}`)

const total = products.reduce((acc, product) => {
    if (product.stock > 0){
        return acc + (product.stock * product.price)
    }
    return acc
},0)

console.log(filteredProducts)
console.log(`Total value of in-stock products: ${total}`)

// Output:
// ['Laptop - 35000', 'Desk - 7000', 'Chair - 3500', 'Headphones - 1200']
// Total value of in-stock products: 12700