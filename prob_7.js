/*🧠 Problem: Filter & Categorize Products
You're given a list of products in an inventory. Each product has a name, category, stock, and price.

📋 Input:
const products = [
  { name: "Laptop", category: "Electronics", stock: 5, price: 35000 },
  { name: "Desk", category: "Furniture", stock: 0, price: 8000 },
  { name: "Phone", category: "Electronics", stock: 10, price: 20000 },
  { name: "Chair", category: "Furniture", stock: 3, price: 3000 },
  { name: "Headphones", category: "Electronics", stock: 7, price: 1500 },
  { name: "Lamp", category: "Furniture", stock: 2, price: 1200 }
];
🧩 Your Tasks:
Filter out only the products that are in stock (stock > 0).

Group them into two categories:

Electronics

Furniture

Display a summary:

Electronics:
- Laptop: P35000
- Phone: P20000
- Headphones: P1500

Furniture:
- Chair: P3000
- Lamp: P1200 */


const products = [
  { name: "Laptop", category: "Electronics", stock: 5, price: 35000 },
  { name: "Desk", category: "Furniture", stock: 0, price: 8000 },
  { name: "Phone", category: "Electronics", stock: 10, price: 20000 },
  { name: "Chair", category: "Furniture", stock: 3, price: 3000 },
  { name: "Headphones", category: "Electronics", stock: 7, price: 1500 },
  { name: "Lamp", category: "Furniture", stock: 2, price: 1200 }
];

let electronicsList = [];
let furnituresList = [];

for (const { name, category, stock, price} of products){
    if (stock > 0) {
  if (category === "Electronics") {
    electronicsList.push({ name, price });
  } else if (category === "Furniture") {
    furnituresList.push({ name, price });
  }
}

}

console.log("Electronics:")
for (const { name, price } of electronicsList){
    console.log(`- ${name}: ${price}`)
}

console.log("Furnitures:")
for (const { name, price } of furnituresList){
    console.log(`- ${name}: ${price}`)
}
// Output:
/*
Electronics:
- Laptop: 35000
- Phone: 20000  
- Headphones: 1500

Furnitures: 
- Chair: 3000
- Lamp: 1200 */