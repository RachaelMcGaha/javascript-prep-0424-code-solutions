/* exported isVowel */
function isVowel(char) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  for (let index = 0; char.length; i++) {
    if (vowels.includes(char[index])) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(isVowel());
