// 🧩 Problem: Group Anagrams

// Description:
// Write a function groupAnagrams(words) that groups words that are anagrams of each other into separate arrays.

function groupAnagrams(words) {
    if (words.length === 0) return [];

    const map = new Map();

    for (let word of words) {

        let sorted = word.split("").sort().join("");
        

        if (!map.has(sorted)) {
            map.set(sorted, []);
        }
        map.get(sorted).push(word);
    }


    return Array.from(map.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
/*
[
  ["eat", "tea", "ate"],
  ["tan", "nat"],
  ["bat"]
]
*/

console.log(groupAnagrams(["abc", "bca", "cab", "xyz"]));
/*
[
  ["abc", "bca", "cab"],
  ["xyz"]
]
*/

console.log(groupAnagrams([]));
// []
