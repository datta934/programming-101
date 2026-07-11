const numbers = [1, 2, 2, 3, 4, 4, 5];

// Spread the Set back into a new array
const uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers); // [1, 2, 3, 4, 5]