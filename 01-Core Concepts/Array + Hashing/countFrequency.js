const arr = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const frequenciesMap = arr =>
  arr.reduce((map, value) => map.set(value, (map.get(value) ?? 0) + 1), new Map());

const result = frequenciesMap(arr);
console.log(result); 