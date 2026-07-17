// Leetcode program -> 53. Maximum Subarray
// good explanation: https://www.geeksforgeeks.org/dsa/largest-sum-contiguous-subarray/
var maxSubArray = function (nums) {
    let maxEnding = nums[0]
    let res = nums[0]
    for (let i = 1; i < nums.length; i++) {
        maxEnding = Math.max(maxEnding + nums[i], nums[i])
        res = Math.max(res, maxEnding);
    }
    return res

};