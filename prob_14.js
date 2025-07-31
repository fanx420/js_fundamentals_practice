/*🧠 Problem: Clean & Capitalize Product Names
You are given a list of raw product names that include inconsistent casing and extra filler words like "the", "a", "new", etc. You need to:

Remove the filler words unless they are the first word.

Capitalize the first letter of each remaining word.

Join the words back into a clean product name.

🧾 Input:
const products = [
  "the new iphone",
  "a portable charger",
  "wireless bluetooth speaker",
  "the smart home hub",
  "new android tablet"
];

const fillerWords = ["the", "a", "an", "new"];
✅ Expected Output:
[
  "The Iphone",
  "A Portable Charger",
  "Wireless Bluetooth Speaker",
  "The Smart Home Hub",
  "New Android Tablet"
] */

const products = [
  "the new iphone",
  "a portable charger",
  "wireless bluetooth speaker",
  "the smart home hub",
  "new android tablet"
];

const fillerWords = ["the", "a", "an", "new"];

const cleanedProducts = products.map(product => {
  const words = product.split(" ");
  
  const filtered = words.filter((word, index) => {
    return index === 0 || !fillerWords.includes(word.toLowerCase());
  });

  const capitalized = filtered.map(word =>
    word[0].toUpperCase() + word.slice(1)
  );

  return capitalized.join(" ");
});

console.log(cleanedProducts);
/*output:
[
  'The Iphone',
  'A Portable Charger',
  'Wireless Bluetooth Speaker',
  'The Smart Home Hub',
  'New Android Tablet'
] */