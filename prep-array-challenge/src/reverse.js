/* exported reverse */
function reverse(array) {
  let newArray = [];
  for (let index = array.length - 1; index > -1; index--) {
    newArray.push(array[index]);
  }
  return newArray;
}
