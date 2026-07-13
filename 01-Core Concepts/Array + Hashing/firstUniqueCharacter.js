function firstUniqueChar(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i; // Return index of first unique character
    }
  }
  return -1; // Return -1 if no unique character exists
}   

console.log(firstUniqueChar("abcdac")); // returns 0