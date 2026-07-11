function reverseWords(revWord) {
    let words = revWord.split(" ")
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].split("").reverse().join("")
    }
    return words.join(" ")
}

console.log(reverseWords("Hello This Is Javascript"));
