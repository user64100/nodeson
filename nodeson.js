'use strict'
const fs = require('fs')

let person = {
    name: 'Chris',
    age: 13,
    gender: 'Male',
    department: 'English',
    car: 'None'
};

// You can create another table like that, with different content and names

let data = JSON.stringify(person);
console.log("Person.json data")
console.log("Name: " + person.name);
console.log("Age: " + person.age);
console.log("Gender: " + person.gender);
console.log("Department: " + person.department);
console.log("Car: " + person.car);

// Save JSON data to a file
fs.writeFileSync('student.json', data);