/* exported reverseWord */
function reverseWord(word) {
  let wordsReversed = '';
  for (let index = word.length - 1; index >= 0; index--) {
    wordsReversed += word[index];
  }
  return wordsReversed;
}
const reverseWordResult = reverseWord();
console.log(reverseWordResult);
