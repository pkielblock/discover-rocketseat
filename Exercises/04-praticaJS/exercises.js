// 1
let weight;

// 2
console.log(typeof weight);

// 3
let name = 'Pedro';
let age = 19;
let stars = 5.0;
let isSubscribed = true;

// 4
const student = {
    name: 'Pedro',
    age: 19,
    weight: 84.8,
    stars: 5.0,
    isSubscribed: true
};

console.log(typeof student);

console.log(student.name + ' de idade ' + student.age + ' pesa ' + student.weight + 'kg ');

// 5
let students = [];

// 6
students = [
    student
];

// 7
console.log(students[0]);

// 8
const secondStudent = {
    name: 'Henrique',
    age: 20,
    weight: 75.6,
    stars: 4.9,
    isSubscribed: true
};

students[1] = secondStudent;

console.log(students[1]);

// 9
console.log(a);
var a = 1;