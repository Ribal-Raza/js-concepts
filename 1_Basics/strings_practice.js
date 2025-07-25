/**
 * @fileoverview String Problems (JavaScript)
 */

// Problem 1
// Write a JavaScript function that takes a string as input and returns the string reversed.
// Example: reverseString("hello") should return "olleh".
function reverseString(str) {
  // return str.split("").reverse().join("");  OR
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}
console.log(`Reversed String of "hello" is: ${reverseString("hello")}`);
// Problem 2
//  Create a function that takes a string and returns the count of vowels
// (a, e, i, o, u, case-insensitive) in it. Example: countVowels("Programming") should return 3
function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i].toLowerCase() == "a" ||
      str[i].toLowerCase() == "e" ||
      str[i].toLowerCase() == "i" ||
      str[i].toLowerCase() == "o" ||
      str[i].toLowerCase() == "u"
    ) {
      count++;
    }
  }
  return count;
}
console.log(
  `Count of vowels in "Programming" is: ${countVowels("Programming")}`
);
console.log(`Count of vowels in "esOPhagUS" is: ${countVowels("esOPhagUS")}`);

// Problem 3
// Write a function that determines if a given string is a palindrome. A palindrome is a word, phrase, or sequence that reads the same backward as forward, ignoring case and non-alphanumeric characters.
//Example: isPalindrome("racecar") should return true.
// Example: isPalindrome("Racecar!") should return true.
// Example: isPalindrome("hello") should return false.
function isPalindrome(str) {
  let normalizedString = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reversed = normalizedString.split("").reverse().join("");
  return normalizedString == reversed;
}
console.log(`Is "racecar" a palindrome? ${isPalindrome("racecar")}`);
console.log(`Is "Racecar!" a palindrome? ${isPalindrome("Racecar!")}`);
console.log(`Is "hello" a palindrome? ${isPalindrome("hello")}`);
console.log(
  `Is "A man, a plan, a canal: Panama" a palindrome? ${isPalindrome(
    "A man, a plan, a canal: Panama"
  )}`
); // Output: true

// Problem 4
//  Implement a function that takes a sentence (string) and capitalizes the first letter of each word in the sentence.
// Example: capitalizeWords("hello world from javascript") should return "Hello World From Javascript".
function capitalizeWords(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    words[i] = word[0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
console.log(
  `Capitalized words of "hello world from javascript" is: ${capitalizeWords(
    "hello world from javascript"
  )}`
);

// Problem 5
// Remove Duplicates from String: Write a function that takes a string and returns a new string
// with all duplicate characters removed. The order of the remaining characters should be preserved.
// Example: removeDuplicates("hello world") should return "helo wrd".
function removeDuplicates(str) {
  let chars = str.split("");
  let uniqueChars = [];
  for (let i = 0; i < chars.length; i++) {
    if (!uniqueChars.includes(chars[i])) {
      uniqueChars.push(chars[i]);
    }
  }
  return uniqueChars.join("");
}
console.log(
  `Unique Charaters from "hello world" are: ${removeDuplicates("hello world")}`
);
console.log(
  `Unique Charaters from "programming" are: ${removeDuplicates("programming")}`
);
console.log(
  `Unique Charaters from "javascript" are: ${removeDuplicates("javascript")}`
);
