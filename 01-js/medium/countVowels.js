/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let ctr = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let letter of str.toLowerCase())
    if (vowels.includes(letter)) {
      ctr++;
      countVowels;
    }
  return ctr;
}

module.exports = countVowels;
