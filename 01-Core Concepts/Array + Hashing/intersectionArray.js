// Input:

// [1,2,2,3,4]

// [2,3,5]

// Output:

// [2,3]

function intersectionArray(arr1, arr2) {
    const set1 = new Set(arr1);
    const result = [];

    for (let num of arr2) {
        if (set1.has(num)) {
            result.push(num);
        }      
    }
    return result;
}

console.log(intersectionArray([1, 2, 2, 3, 4], [2, 3, 5]));