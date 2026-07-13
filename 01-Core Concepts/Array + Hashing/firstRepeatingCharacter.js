function firstRepeatingChar(str) {
    const map = new Map();
    for (let i = 0; i < str.length; i++) {
        if (map.has(str[i])) {
            return { char: str[i], index: map.get(str[i]) };
        }
        map.set(str[i], i);
    }
    return null;
}

console.log(firstRepeatingChar("abcd abcde")); 
// Output: { char: 'a', index: 0 }