/* exported getKeys */
function getKeys(object) {
  let newArray = [];

  for (let key in object) {
    newArray.push(key);
  }
  return newArray;
}
const getKeysResults = getKeys();
console.log(getKeysResult);
