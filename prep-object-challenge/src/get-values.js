/* exported getValues */
function getValues(object) {
  let newArray = [];

  for (let key in object) {
    newArray.push(object[key]);
  }
  return newArray;
}
const getValuesResults = getValues();
console.log(getValuesResult);
