// Brute Force
var twoSum = function(nums, target) {
    // Loop through each element
    for (let i = 0; i < nums.length; i++) {
        // Loop through every element AFTER the current one
        for (let j = i + 1; j < nums.length; j++) {
            // Check if the pair sums to target
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    // Return empty array if no solution found (though problem guarantees one)
    return [];
};   

// using Map
// Leetcode program -> 1. Two Sum
var twoSum = function (nums, target) {
    const map = new Map(); // Stores: number -> index

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }

    return [];
};