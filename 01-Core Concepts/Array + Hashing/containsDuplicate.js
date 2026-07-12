const numbers = [1, 2, 2, 3, 4, 4, 5];
const seen = new Set();
const duplicates = new Set();

for (let i = 0; i < numbers.length; i++) {
    if (seen.has(numbers[i])) {
        duplicates.add(numbers[i])
    }
    seen.add(numbers[i])
}

console.log(seen); // [1, 2, 3, 4, 5]
console.log(duplicates); // [2, 4]

// Leetcode version -217
var containsDuplicate = function (nums) {
    const seen = new Set();
    const duplicates = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i])) {
            duplicates.add(nums[i])
        }
        seen.add(nums[i])
    }
    return duplicates.size > 0; // returns true or false
};