/* exported toObject */
function toObject(keyValuePair) {
  let newObject = {};
  newObject[keyValuePair[0]] = keyValuePair[1];
  return newObject;
}

const toObjectResult = toObject();
console.log(toObjectResult);
