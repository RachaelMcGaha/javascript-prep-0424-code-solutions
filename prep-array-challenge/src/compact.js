/* exported compact */
function compact(array) {
  let newArray = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index]) {
      newArray.push(array[index]);
      console.log('Variable is truthy' + array[index]);
    } else {
      console.log('Variable is not truthy' + array[index]);
    }
  }
  return newArray;
}
const newArrayResult = compact();
console.log(newArrayResult);
