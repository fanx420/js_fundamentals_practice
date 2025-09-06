// 🔹 Problem: Anagram Checker

// Write a JavaScript function that takes two strings and checks if they are anagrams of each other.

// An anagram means both words use the same characters in the same frequency, but possibly in a different order.

// Ignore spaces and make it case-insensitive.

const anagramChecker = (str1, str2) => {

  const arr1 = str1.replace(/\s+/g, "").toLowerCase().split('');
  const arr2 = str2.replace(/\s+/g, "").toLowerCase().split('');


  if (arr1.length !== arr2.length) {
    console.log(`${str1} and ${str2} are NOT anagrams`);
    return;
  }


  arr1.sort();
  arr2.sort();


  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`${str1} and ${str2} are NOT anagrams`);
      return;
    }
  }

  console.log(`${str1} and ${str2} ARE anagrams`);
};


anagramChecker("listen", "silent");     
anagramChecker("The eyes", "They see"); 
anagramChecker("hello", "world");      

