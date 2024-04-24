const person = {
  firstName: 'Maya',
  lastName: 'Angelou',
  hobby: 'Writes poetry',
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("This person's name is: " + fullName + '.');

person.job = 'Author';
console.log("This person's job was: " + person.job + '.');

person.previousJob = 'Dancer';
console.log("This person's previous job was: " + person.previousJob + '.');

console.log('The complete person object: ', person);
