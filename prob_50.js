// ✅ Problem: Longest Consecutive Sequence

// Given an unsorted array of integers, return the length of the longest consecutive number sequence.

// A consecutive sequence means numbers follow each other in increasing order (e.g., 3, 4, 5).

// 📌 Function Requirements:

// ✅ Should return the length of the longest sequence
// ✅ Order in array doesn’t matter
// ✅ No sorting allowed — must be O(n) time complexity idea

function longestConsecutive(nums) {
    let set = new Set(nums);
    let longest = 0;

    for (let num of set) {
        if (!set.has(num - 1)) {
            let current = num;
            let length = 1;

            while (set.has(current + 1)) {
                current++;
                length++;
            }

            longest = Math.max(longest, length);
        }
    }

    return longest;
}


console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
// Output: 4
// Explanation: The longest sequence is [1, 2, 3, 4]

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6]));
// Output: 9
// Sequence: [0,1,2,3,4,5,6,7,8]

console.log(longestConsecutive([]));
// Output: 0

console.log(longestConsecutive([1, 2, 2, 3]));
// Output: 3 (sequence is [1,2,3])
