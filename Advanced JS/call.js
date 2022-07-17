//Write a function and use 'call' to call the function
var obj = { num: 2 };

var addToThis = function (a) {
  return this.num + a;
};

console.log(addToThis.call(obj, 3));

//Write a program using apply
var obj = { num: 2 };

var addToThis = function (a, b, c) {
  return this.num + a + b + c;
};

var arr = [1, 2, 3];
console.log(addToThis.apply(obj, arr));

//Write a program using bind
var obj = { num: 2 };

var addToThis = function (a, b, c) {
  return this.num + a + b + c;
};

var arr = [1, 2, 3];

var bound = addToThis.bind(obj);

console.log(bound(1, 2, 3));

//Create a new object called Student with age 20 , write a function which prints the age of the student from the student object.
//Dont pass in args. Read from 'this' and use BIND

var student = { age: 20 };

var ageToThis = function student() {
  return this.age;
};
var bound = ageToThis.bind(student);

console.log(bound(student));
