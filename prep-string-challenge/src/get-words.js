/* exported getWords */
function getWords(string) {
  const newArray = [];

  const separatedWords = string.split(' ');

  for (let index = 0; index < separatedWords.length; index++) {
    if (separatedWords[index] === '') {
      return [];
    } else {
      newArray.push(separatedWords[index]);
    }
  }
  return newArray;
}
const getWordsResult = getWords();
console.log(getWordsResult);
