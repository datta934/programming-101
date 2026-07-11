function palindrome(originalStr) {
    let str1 = originalStr.toLowerCase().split("").reverse().join("")
    return str1 === originalStr.toLowerCase();
}

console.log(palindrome("madam"));
