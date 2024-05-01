// create your loops here.
function whileLoop1() {
  const newArray = [];
  let index = 0;
  while (index < 10) {
    newArray.push(index);
    index++;
  }
  return newArray;
}
const whileLoop1Result = whileLoop1();
console.log(whileLoop1Result);

function whileLoop2() {
  const newArray2 = [];
  let index = 0;
  while (index < 10) {
    newArray2.push(index * 2);
    index++;
  }
  return newArray2;
}
const whileLoop2Result = whileLoop2();
console.log(whileLoop2Result);

function forLoop1() {
  const anotherArray = [];
  for (let index = 0; index < 10; index++) {
    anotherArray.push(index);
  }
  return anotherArray;
}
const forLoop1Result = forLoop1();
console.log(forLoop1Result);

function forLoop2() {
  for (let index = 100; index >= 0; index--) {
    console.log('Time till explosion: ' + index);
  }
}
const forLoop2Result = forLoop2();

const person = {
  name: 'Ada Lovelace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1(object) {
  const newArrayLoop1 = [];
  for (let prop in person) {
    newArrayLoop1.push(prop);
  }
  return newArrayLoop1;
}
const forInLoop1Result = forInLoop1(person);
console.log(forInLoop1Result);

function forInLoop2(object) {
  const newArrayLoop2 = [];
  for (let key in object) {
    newArrayLoop2.push(object[key]);
  }
  return newArrayLoop2;
}

const forInLoop2Result = forInLoop2(person);
console.log(forInLoop2Result);
