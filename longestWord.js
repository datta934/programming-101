/**
 * Problem:
 * Find the Longest Word
 *
 * Given a sentence consisting of words separated by spaces,
 * return the longest word in the sentence.
 *
 * If there are multiple words with the same maximum length,
 * return the first one.
 *
 * If the input string is empty, return an empty string.
 */

function longestWord(wordStr) {
    const words = wordStr.split(" ");

    let longestWord = words[0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}

console.log(longestWord("The quick brown fox"));
